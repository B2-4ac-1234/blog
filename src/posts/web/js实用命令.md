---
icon: js
date: 2024-12-13
title: js实用命令
category:
  - js
  - ts
tag:
  - js/ts
star: true
sticky: true
footer: 不js，web了无生趣
---

## 基本类型
### 字符串左右侧补全
```js
let str = "match";
str.padStart(10, "0"); //"00000match"
str.padEnd(10, "0"); //"match00000"
```
## 方法
### 输入变量
```js
let username = prompt("请输入用户名:");
console.log(username);
```
### 获取存储空间变量
```js
let phone = JSON.parse(localStorage.canvasworkbenchweb_auth).user_info.phone;
let authToken = localStorage.getItem('authToken');
```

### js代码格式
```js
// https://wap.fj.10086.cn/bass-loveHomeActivityH5/?inviteCode=YOZg520bGUWJHzIECegqTpeXqtmfkxw==_h267QzoO1ffkJwQfnHuu3knSjNz5zTg==&ch=jituan_01_01
// 登录后复制到浏览器console运行
"use strict";
{
    const config = {
        interval: 1 * 1000 // 抽奖间隔时间，毫秒
    };
    const output = () => {
        console.log(outputData.message);
    };
    const outputData = {};
    const wait = (time) => {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    };
    const getAuthToken = () => {
        return localStorage.getItem('authToken');
    };
    const getLeftLotteryTimes = async () => {
        const date = new Date();
        const res = await fetch("https://wap.fj.10086.cn/bass-commonActServer/activityLottery/getLeftLotteryTimes", {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
                "authorization": `Bearer ${authToken}`,
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://wap.fj.10086.cn/bass-loveHomeActivityH5/",
            "referrerPolicy": "unsafe-url",
            "body": `{\"appId\":0,\"timestamp\":${Date.parse(String(date))},\"activityId\":\"1801177675971014657\",\"channelCode\":\"\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        return res.json();
    };
    const doTask = async () => {
        const date = new Date();
        const res = await fetch("https://wap.fj.10086.cn/bass-commonActServer/loveHome/doTask", {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
                "authorization": `Bearer ${authToken}`,
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://wap.fj.10086.cn/bass-loveHomeActivityH5/",
            "referrerPolicy": "unsafe-url",
            "body": `{\"appId\":0,\"timestamp\":${Date.parse(String(date))},\"taskType\":0,\"taskId\":1}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        return res.json();
    };
    const luckDraw = async () => {
        const date = new Date();
        const res = await fetch("https://wap.fj.10086.cn/bass-commonActServer/activityLottery/luckDraw", {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
                "authorization": `Bearer ${authToken}`,
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://wap.fj.10086.cn/bass-loveHomeActivityH5/",
            "referrerPolicy": "unsafe-url",
            "body": `{\"appId\":0,\"timestamp\":${Date.parse(String(date))},\"activityId\":\"1801177675971014657\",\"channelCode\":\"\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        return res.json();
    };
    const fetchPrize = async (lotteryId) => {
        const date = new Date();
        const res = await fetch("https://wap.fj.10086.cn/bass-commonActServer/activityLottery/fetchPrize", {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
                "authorization": `Bearer ${authToken}`,
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://wap.fj.10086.cn/bass-loveHomeActivityH5/",
            "referrerPolicy": "unsafe-url",
            "body": `{\"appId\":0,\"timestamp\":${Date.parse(String(date))},\"activityId\":\"1801177675971014657\",\"channelCode\":\"\",\"lotteryId\":\"${lotteryId}\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        return res.json();
    };
    const start = async () => {
        let { data: { leftTimes } } = await getLeftLotteryTimes();
        const message = [];
        while (true) {
            if (leftTimes <= 0) {
                await doTask();
            }
            const { code, data, msg } = await luckDraw();
            if (code === '0000') {
                message.push(data.prizeName);
                await fetchPrize(data.lotteryId);
                // 谢谢参与，停止抽奖
                if (data.prizeId === '1801191228325081089') {
                    break;
                }
            }
            else {
                message.push(msg);
                break;
            }
            leftTimes--;
            await wait(config.interval);
        }
        outputData.message = message.join('\n');
        output();
    };
    const authToken = getAuthToken();
    start();
    1; //解决alook浏览器不支持promise返回类型
}

```
