---
icon: vuejs
date: 2024-06-17
title: 解决Flutter3.10+版本输入emoji表情显示为黑白的问题
category:
  - Flutter
  - bug
tag:
  - Flutter
  - emoji
  - bug
  - js
footer: flutter官方只需要升级版本就好了，但是开发人员要修改的bug(代码)就多了。
---

### 1.flutter 项目

#### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <!--
    If you are serving your web app in a path other than the root, change the
    href value below to reflect the base path you are serving from.

    The path provided below has to start and end with a slash "/" in order for
    it to work correctly.

    For more details:
    * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base

    This is a placeholder for base href that will be replaced by the value of
    the `--base-href` argument provided to `flutter build`.
  -->
    <base href="$FLUTTER_BASE_HREF" />

    <meta charset="UTF-8" />
    <meta content="IE=Edge" http-equiv="X-UA-Compatible" />
    <meta name="description" content="A new Flutter project." />

    <!-- iOS meta tags & icons -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="anywhere" />
    <link rel="apple-touch-icon" href="images/favicon.png" />

    <title>Handcent Anywhere</title>

    <link rel="manifest" href="manifest.json" />

    <style type="text/css">
      #loader {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #loader h1 {
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 32px;
        line-height: normal;
      }
    </style>
  </head>
  <body>
    <!-- This script installs service_worker.js to provide PWA functionality to
       application. For more information, see:
       https://developers.google.com/web/fundamentals/primers/service-workers -->
    <div id="loader">
      <h1>
        <img src="images/loading.gif" />
      </h1>
    </div>

    <script>
      var serviceWorkerVersion = null;
      var scriptLoaded = false;
      function loadMainDartJs() {
        if (scriptLoaded) {
          return;
        }
        scriptLoaded = true;
        var scriptTag = document.createElement("script");
        scriptTag.src = "main.dart.js";
        scriptTag.type = "application/javascript";
        document.body.append(scriptTag);
      }

      if ("serviceWorker" in navigator) {
        // Service workers are supported. Use them.
        window.addEventListener("load", function () {
          // Wait for registration to finish before dropping the <script> tag.
          // Otherwise, the browser will load the script multiple times,
          // potentially different versions.
          var serviceWorkerUrl =
            "flutter_service_worker.js?v=" + serviceWorkerVersion;
          navigator.serviceWorker.register(serviceWorkerUrl).then((reg) => {
            function waitForActivation(serviceWorker) {
              serviceWorker.addEventListener("statechange", () => {
                if (serviceWorker.state == "activated") {
                  console.log("Installed new service worker.");
                  loadMainDartJs();
                }
              });
            }
            if (!reg.active && (reg.installing || reg.waiting)) {
              // No active web worker and we have installed or are installing
              // one for the first time. Simply wait for it to activate.
              waitForActivation(reg.installing || reg.waiting);
            } else if (!reg.active.scriptURL.endsWith(serviceWorkerVersion)) {
              // When the app updates the serviceWorkerVersion changes, so we
              // need to ask the service worker to update.
              console.log("New service worker available.");
              reg.update();
              waitForActivation(reg.installing);
            } else {
              // Existing service worker is still good.
              console.log("Loading app from service worker.");
              loadMainDartJs();
            }
          });

          // If service worker doesn't succeed in a reasonable amount of time,
          // fallback to plaint <script> tag.
          setTimeout(() => {
            if (!scriptLoaded) {
              console.warn(
                "Failed to load app from service worker. Falling back to plain <script> tag."
              );
              loadMainDartJs();
            }
          }, 4000);
        });
      } else {
        // Service workers not supported. Just drop the <script> tag.
        loadMainDartJs();
      }
    </script>
    <script>
      // 外部通知
      function externalNotification(title, content) {
        if (window.Notification && Notification.permission !== "denied") {
          Notification.requestPermission(function (status) {
            var n = new Notification(title, { body: content });
          });
        }
      }
      // 获取外部通知权限
      async function requestExternalPermission() {
        return JSON.stringify(
          await Notification.requestPermission().then(function (result) {
            if (result === "denied") {
              return false;
            }
            if (result === "default") {
              return false;
            }
            return true;
          })
        );
      }
    </script>
  </body>
</html>
```

#### 效果

![效果图](https://github.com/B2-4ac-1234/blog/blob/main/src/.vuepress/public/assets/images/flutter/flutter_emoji_no_color.png?raw=true)

### 2.解决方法

关键在于
useColorEmoji: true 但是不知道哪里写

![参考自问答](https://stackoverflow.com/questions/77753891/emojis-arent-dispalying-in-flutter-web-they-are-black-and-white)

以及

![官方文档](https://docs.flutter.dev/platform-integration/web/bootstrapping)

Example: Display a progress indicator
To give the user of your application feedback during the initialization process, use the hooks provided for each stage to update the DOM:

```
{{flutter_js}}
{{flutter_build_config}}

const loading = document.createElement('div');
document.body.appendChild(loading);
loading.textContent = "Loading Entrypoint...";
_flutter.loader.load({
  onEntrypointLoaded: async function(engineInitializer) {
    loading.textContent = "Initializing engine...";
    const appRunner = await engineInitializer.initializeEngine();

    loading.textContent = "Running app...";
    await appRunner.runApp();
  }
});
```

两者结合之后

#### index.html

```js
<script>
  {{flutter_js}}
  {{flutter_build_config}}
  console.log("begin flutter loader.load");
  _flutter.loader.load({
    onEntrypointLoaded: async function (engineInitializer) {
      console.log("begin enable emoji color");
      const appRunner = await engineInitializer.initializeEngine({
        useColorEmoji: true,
      });
      console.log("Running app...");
      await appRunner.runApp();
    },
  });
</script>
```

#### 效果

![效果图](https://github.com/B2-4ac-1234/blog/blob/main/src/.vuepress/public/assets/images/flutter/flutter_emoji_color.png?raw=true)
