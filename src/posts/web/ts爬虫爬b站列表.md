---
icon: js
date: 2024-03-29
title: ts爬虫
category:
  - web
tag:
  - typescript
star: false
sticky: false
footer: 方向决定难度,角度决定步数。
---

```json
{
  "name": "pachong",
  "version": "1.0.0",
  "description": "a js test",
  "main": "index.ts",
  "scripts": {
    "dev": "ts-node index.ts"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^20.11.30",
    "axios": "^1.6.8",
    "cheerio": "^1.0.0-rc.12",
    "log4js": "^6.9.1",
    "ts-node": "^10.9.2",
    "tslib": "^2.6.2",
    "typescript": "^5.4.3"
  }
}
```

```shell
npm install
npm run dev
```

```ts
import * as cheerio from "cheerio";
import * as fs from "fs";
import * as path from "path";
import axios from "axios";
import log4js from "log4js";
log4js.configure({
  appenders: {
    console: { type: "stdout" },
    file: {
      type: "dateFile",
      filename: "./logs/server.log",
      pattern: "-yyyyMMdd.log",
      alwaysIncludePattern: false,
    },
  },
  categories: {
    default: { appenders: ["console", "file"], level: "debug" },
  },
});

const logger = log4js.getLogger("main_server");

main();

async function main() {
  const cookie = null; //配置cookie后获取的为推荐的热门列表
  const list: any[] = await getBillBillPopularList(1, false, 10, cookie);
  list.forEach((v, i) => {
    logger.info(`top${i + 1}`);
    logger.info(`title:${v.title}`);
    logger.info(`auth:${v.owner.name}\n`);
  });
  var map: Map<string, string> = new Map();
  list.forEach((v, i) => {
    logger.info(`top${i + 1} / ${list.length}`);
    let url = v.pic;
    let title = (v.title as string).trim();
    map.set(url, title);
  });
  await downloadImageByMap(map);
  logger.info("end");
}
/**
 * 获取b站热门列表
 * @param page 从第几页开始,默认第一页
 * @param no_more 是否继续,默认是
 * @param top 取top前几,为空则全取
 * @param cookie 配置cookie后获取的为推荐的热门列表
 * @returns
 */
async function getBillBillPopularList(
  page = 1,
  no_more = false,
  top: number | null = 10,
  cookie: string | null = null
): Promise<any[]> {
  var base_url = "https://api.bilibili.com/x/web-interface/popular?pn=" + page;
  logger.info(base_url);
  const data = await axios
    .get(base_url, {
      headers: {
        Cookie: cookie || "",
      },
    })
    .then((res) => {
      no_more = res.data.no_more;
      return res.data.data;
    });

  var list: any[] = data?.list;
  page++;
  if (
    data?.list &&
    list.length > 0 &&
    (top == null || page * 20 < top) &&
    !no_more
  ) {
    var getList = await getBillBillPopularList(page, no_more, top);
    if (getList) {
      return list.concat(list, getList);
    }
  }
  return list || [];
}
/**
 * 获取bid视频的推荐列表的图片
 */
async function getBillBillImage(bid: string) {
  const urls: string[] = [];
  const base_url = "https://www.bilibili.com/video/" + bid;
  const html = await axios
    .get(base_url, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => res.data);
  const $ = cheerio.load(html);
  let script_array = $("script");
  const script = script_array
    .filter((index, element) => {
      return $(element).text().startsWith("window.__INITIAL_STATE__");
    })[0]
    .children.filter((e) => e.type == "text")[0];
  let json = ((script as any).data as string)
    .trim()
    .split("window.__INITIAL_STATE__=")[1];
  if (json.indexOf(";(function()") > 0) {
    json = json.split(";(function()")[0];
  }
  const jsonObject = JSON.parse(json);
  const pic_list: [] = jsonObject.related;
  pic_list.forEach(async (value: any, index) => {
    urls.push(value.pic);
  });
  logger.info(downloadImage(urls));
}
/**
 * 下载图片,保存到文件夹
 * @param urls
 * @returns
 */
async function downloadImage(urls: string[]): Promise<string> {
  await urls.forEach(async (url, index) => {
    setTimeout(async () => {
      const buffer = await axios
        .get(url, { responseType: "arraybuffer" })
        .then((res) => res.data)
        .catch((e) => {
          return e;
        });
      const ws = fs.createWriteStream(
        path.join(__dirname, "./download_img/") + new Date().getTime() + ".jpg"
      );
      ws.write(buffer);
      logger.info(`write ${index}`);
    }, 200);
  });
  return "finish";
}

/**
 * 下载图片,保存到文件夹(如果文件夹不存在则创建,如果已存在同名文件不重复下载)
 * @param map
 * @returns
 */
async function downloadImageByMap(map: Map<string, string>): Promise<void> {
  fs.mkdir(path.join(__dirname, "./download_img/"), () => {});
  const total = map.size;
  var index = 1;
  await map.forEach(async (title, url) => {
    let filePath = path.join(__dirname, "./download_img/") + title + ".jpg";
    if (!fs.existsSync(filePath)) {
      setTimeout(async () => {
        const buffer = await axios
          .get(url, { responseType: "arraybuffer" })
          .then((res) => res.data)
          .catch((e) => {
            return e;
          });
        const ws = fs.createWriteStream(filePath);
        ws.write(buffer);
        logger.info(`write ${title} success`);
        logger.info(`${index}/${total}`);
        index++;
      }, 200);
    }
  });
  logger.info("finish write");
}
```
