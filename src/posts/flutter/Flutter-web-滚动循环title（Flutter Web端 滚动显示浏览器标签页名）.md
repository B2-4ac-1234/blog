---
icon: js
date: 2023-02-07
title: Flutter-web-滚动循环title（Flutter Web端 滚动显示浏览器标签页名）
category:
  - flutter
tag:
  - flutter
  - web
  - js
star: true
footer: 滚动吧,标签页！
---

应用场景：一般用于页面收到新消息通知时，或者正在播放音视频时浏览器标签页会循环显示标签名称，以达到提醒或表示正在进行的效果。

## Flutter 代码

```dart
  /**
   * 修改html的title {repeat 为true则滚动循环显示title}
   * 使用方法 editWebTitle(title: "这是需要滚动显示的标题",repeat: true); / editWebTitle(title: "这是不滚动的标题");
   */
  Timer? _timer;
  void editWebTitle({
    required String title,
    bool repeat = false,//默认不滚动循环
  }){
    print("update title"+title);
    _timer?.cancel();
    if(repeat){
      print("Dynamically update the title");
      String result = title + "     ";//避免循环时后面的字符直接连接，出现345612的情况
      // 通过**定时器**重复设置title达到类似递归的效果
      // 假设目标为"123456  "进行循环，则第一次效果为"23456  1",第二次效果为"3456  12",如此循环
      // PS: 降低duration貌似并不会提升循环流畅度...
      _timer = Timer.periodic(Duration(milliseconds: 150), (timer) {
        String str = "";
        String first = result.split("").first;
        result.split("").reduce((value, element) {
          return str+=element;
        },);
        result = str + first;//将之前的首个字符拼接到末尾
        // print("result");
        SystemChrome.setApplicationSwitcherDescription(ApplicationSwitcherDescription(
          label: result,//设置web的title即标签页名称
        ));
      });
    }else{
      // 用于停止标签滚动的简单处理，此处也可以使用 _timer?.cancel();
      SystemChrome.setApplicationSwitcherDescription(ApplicationSwitcherDescription(
        label: title,
      ));
    }
  }
```

有效果更好(更易实现)的方法欢迎留言。
