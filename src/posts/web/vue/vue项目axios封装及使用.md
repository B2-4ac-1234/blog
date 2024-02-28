---
icon: vuejs
date: 2024-02-25
title: vue项目axios封装及使用
category:
  - ts
tag:
  - ts
  - vue-request
star: true
sticky: false
footer: 此刻，封装之时。
---

## 配置

### public/config.json

```json
{
  "base_url": "http://192.168.xxx.xxx:8080/xxx",
  "time_out": 10000
}
```

### request.ts

```ts
import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";
export type { Method };
// import { AjaxLoadingStore } from "./store";

import { ElMessage } from "element-plus";
import router from "@/router";
import { useRequest } from "vue-request";
import { GlobalLoadingStore } from "@/utils/store";

const env = import.meta.env.MODE;
const BASE_URL = import.meta.env.VITE_BASE_API;
export { BASE_URL };
/**   基础返回类型
 **   名称	类型	说明
 **  code	number	返回的状态码
 **  message	string	返回文本信息
 **  data	T	返回数据
 *
 */
export interface requestReturnType<T = any> {
  /**
   * @说明 返回code状态码
   */
  code?: number;
  /** @说明 返回文本信息 */
  message?: string;
  /** @说明 返回数据 */
  data?: T;
}
/**
 * 配置基础url
 * @param base_url 各模块的base_url
 * @param url 接口相对模块的url
 * @param params 对象(默认对象为空,当请求方法省略时可以省略)
 * @param method 请求方法(默认get请求,可以省略)
 * @returns 指定返回对象类型requestReturnType或者数组类型requestReturnType
 */
export async function baseApi<returnType = any>(
  base_url: string,
  url: string,
  params: { [param: string]: any } = {},
  method: Method = "GET"
): Promise<requestReturnType<returnType>> {
  return await httpProxy<returnType>({
    url: base_url + url,
    method: method,
    data: params,
  });
}

/** 创建axios实例 */
async function getAxiosInstance() {
  let instance: AxiosInstance;
  // if (env == 'prod') {
  //   // 这里如果是打包正式服,使用打包后配置文件路径返回的base_url进行配置
  //   await axios.get("../../config.json").then((res) => {
  //     instance = axios.create({
  //       timeout: 10000, // 超时时间
  //       baseURL: res.data.base_url,
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //     });
  //   })
  // } else {
  //   instance = axios.create({
  //     timeout: 10000, // 超时时间
  //     baseURL: BASE_URL,
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //   });
  // }
  if (env == "dev") {
    instance = axios.create({
      timeout: 10000,
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  } else {
    await axios.get(window.location.pathname + "config.json").then((res) => {
      instance = axios.create({
        timeout: res.data.time_out ?? 6000, // 超时时间
        baseURL: res.data.base_url,
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
  }
  localStorage.setItem("BASE_URL", instance.getUri());
  /** 添加请求拦截 */
  instance.interceptors.request.use(
    (config) => {
      // if (!config.url) {
      //   throw console.error("todo:首次请求url路径问题");
      // }
      /** 请求拦截-可做网络加载开始动作 */
      // if (config.showLoading && config.showLoading == true) {
      // AjaxLoadingStore().showLoading(true)
      // }
      if (localStorage.getItem("token")) {
        config.headers.token = localStorage.getItem("token") || "";
      }
      /** 对不同访问方式进行封装 */
      switch (config.method) {
        case "get":
          if (config.url && (config.url as string).lastIndexOf("?") < 0) {
            config.url += "?";
          }
          if (config.data) {
            if (config.data instanceof Object) {
              for (const [k, v] of Object.entries(config.data)) {
                if (v != null) {
                  config.url = config.url + "&" + k + "=" + v;
                }
              }
              // config.data = null
            } else if (
              config.data instanceof String ||
              config.data instanceof Number
            ) {
              config.url += "/" + encodeURIComponent(config.data.toString());
            }
          }
          config.url += "&l=zh_CN";
          return config;
        case "post":
          if (!config.data) {
            config.data = {};
          }
          config.data["l"] = "zh_CN";
          return config;
        case "put":
          if (!config.data) {
            config.data = {};
          }
          config.data["l"] = "zh_CN";
          return config;
        case "delete":
          //只传id的值
          if (config.data && typeof config.data != "object") {
            config.url = config.url + "/" + config.data;
            config.data = {};
          }
          config.data["l"] = "zh_CN";
          return config;
        case "file":
          config.method = "post";
          config.headers["Content-Type"] = "multipart/form-data";
          // config.headers.Accept = "application/json, text/plain, */*"
          config.responseType = "blob";
          if (config.data) {
            if (config.data instanceof File) {
              const formatData = new FormData();
              formatData.append("file", config.data);
              config.data = formatData;
            }
          }
          config.data["l"] = "zh_CN";
          return config;
      }
    },
    (err) => {
      console.log(`output->err`, err);
      return Promise.reject(err);
    }
  );
  return instance;
}

class Request {
  // 存储单例
  private static instance: Promise<AxiosInstance>;

  public static getInstance() {
    // 判断是否已经有单例了
    if (!this.instance) {
      this.instance = getAxiosInstance();
    }
    //返回实例
    return this.instance;
  }
}

/** 代理请求 */
// 注意此处的泛型T，默认值时any；兼容未提供指定类型的方式
async function httpProxy<T = any | Array<any>>(
  config: AxiosRequestConfig
): Promise<requestReturnType<T>> {
  const instance = await Request.getInstance();
  // 这里使用vuerequest实现loading防止闪烁,缓存访问路径config.url，避免staleTime时间内重复请求
  const { runAsync, loading } = useRequest(instance, {
    cacheKey: config.url + config.data,
    manual: true,
    cacheTime: 2 * 1000, // 2s
    throttleInterval: config.data?.throttleInterval || 100,
    staleTime: config.data?.staleTime || 1200,
  });
  // GlobalLoadingStore().showLoading(true)
  // const interval = self.setInterval(() => {
  //   if (!loading.value) {
  //     GlobalLoadingStore().showLoading(false)
  //     window.clearInterval(interval)
  //   }
  // }, 500)
  return await runAsync(config.url, config)
    .then(async (res: requestReturnType<T>) => {
      // window.clearInterval(interval);
      return await res.data;
    })
    .catch(async (error) => {
      // window.clearInterval(interval);
      if (error && error.response) {
        if (env === "dev") {
          switch (error.response.status) {
            case 400:
              error.message = "错误请求";
              break;
            case 401:
              error.message = "未授权，请重新登录";
              ElMessage({
                message: error.message,
                grouping: true,
                type: "error",
              });
              localStorage.removeItem("token");
              router.push({ path: "/login" });
              break;
            case 403:
              error.message = "拒绝访问";
              break;
            case 404:
              error.message = "请求错误,未找到该资源";
              break;
            case 405:
              error.message = "请求方法未允许";
              break;
            case 408:
              error.message = "请求超时";
              break;
            case 500:
              error.message = "服务器端出错";
              break;
            case 501:
              error.message = "网络未实现";
              break;
            case 502:
              error.message = "网络错误";
              break;
            case 503:
              error.message = "服务不可用";
              break;
            case 504:
              error.message = "网络超时";
              break;
            case 505:
              error.message = "http版本不支持该请求";
              break;
            default:
              error.message = `连接错误${error.response.status}`;
          }
        } else {
          if (error.response.status == 401) {
            localStorage.removeItem("token");
            ElMessage({
              message: error.message,
              grouping: true,
              type: "error",
            });
            router.push({ path: "/login" });
            return;
          }
          error.message = "连接到服务器失败";
        }
      }
      console.log(`output->error.message`, error.message);
      /** 错误逻辑处理，此处可在页面弹框处理 */
      ElMessage({
        message: error.message,
        grouping: true,
        type: "error",
      });
      return Promise.reject(error);
    });
}

export default httpProxy;
```

## 可选配置(全局 loading)

### store.ts

```ts
import { createPinia } from "pinia";
// 创建store实例
const store = createPinia();
export default store;
import { defineStore } from "pinia";
import { ElLoading } from "element-plus";
export const GlobalLoadingStore = defineStore({
  id: "gLoading", // 命名，唯一
  state: () => ({
    Loading: false,
  }),
  actions: {
    showLoading(val: boolean) {
      this.Loading = val;
      const options = {
        body: true,
        lock: true,
        text: "加载中，请稍后", //加载动画的文字
        background: "rgba(0, 0, 0, 0.1)", //加载动画的背景
        fullscreen: true,
      };
      let loadingInstance = ElLoading.service(options);
      val ? ElLoading.service(options) : loadingInstance.close(); //这里判断调用方法时候的参数值，打开服务的时候传true，关闭服务的时候传false
    },
  },
});
```

## 使用

### XxxApi.ts

```ts
import { baseApi, Method } from "@/utils/request";

async function api(
  url: string,
  params: { [param: string]: any } = {},
  method: Method = "GET"
) {
  return await baseApi("/xxx", url, params, method);
}

export interface Xxx {
  id: number;
  value: string;
}

export const XxxApi = {
  /**
   * xxx列表
   * @param data
   * @returns
   */
  async list(data?: object) {
    return await api<Xxx[]>("/xxx/list", data);
  },
};
```

### xxx.vue

```vue
<template>
  <div v-for="item in xxxList">
    {{ item.id + item.name }}
  </div>
</template>
<script setup lang="ts">
import { XxxApi } from "@/api/XxxApi.ts";
let xxxList = ref<Xxx[]>([]);
const initList = async () => {
  await XxxApi.list({}).then((res) => {
    xxxList.value = res.data;
    console.log(xxxList.value[0].id); //可以根据上面Xxx的类型正常提示使用
  });
};
</script>
```
