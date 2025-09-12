---
date: 2025-03-18
title: Flutter写法&优化记录
description: 记录flutter开发中遇到的写法和优化问题
category:
  Flutter
tag:
  - Flutter
footer: Flutter的性能优化就像减肥，你以为少吃点（减少Widget重建）就能瘦，结果发现还得去健身房（优化布局）。
---

## 写法

### 1 flutter中layout的分类
flutter中的layout widget有很多，他们大概可以分为三类，分别是只包含一个child的layout widget，可以包含多个child的layout widget和可滑动的Sliver widgets。

这三种layout也有很多种具体的实现，对于Single-child layout widgets来说，包含下面这些widgets：

Align — 用来对其包含在其中的组件进行对其操作。

AspectRatio — 对其中的组件进行比例缩放。

Baseline — 通过使用子组件的baseline来进行定位。

Center — 自组件位于中间。

ConstrainedBox — 类似于IOS中的constrain,表示子组件的限制条件。

Container — 一个常用的widget，可以用来包含多个其他的widget。

CustomSingleChildLayout — 将其单个子项的布局推迟。

Expanded — 将Row, Column 或者 Flex的child进行扩展。

FittedBox — 根据fit来缩放和定位其child。

FractionallySizedBox — 将child按照总可用空间进行调整。

IntrinsicHeight — 一个将其child调整为child固有高度的小部件。

IntrinsicWidth — 一个将其child调整为child固有宽度的小部件。

LimitedBox — 限制一个box的size。

Offstage — 将child放入render tree中，但是却并不触发任何重绘。

OverflowBox — 允许child覆盖父组件的限制。

Padding — 为child提供padding。

SizedBox — 给定size的box。

SizedOverflowBox — 可以覆盖父组件限制的box。

Transform — 子组件可以变换。

以上是包含单个child的layout组件，下面是可以包含多个child的layout组件：

Column — 表示一列child。

CustomMultiChildLayout — 使用代理来定位和缩放子组件。

Flow — 流式布局。

GridView — 网格布局。

IndexedStack — 从一系列的child中展示其中的一个child。

LayoutBuilder — 可以依赖父组件大小的widget tree。

ListBody — 根据给定的axis来布局child。

ListView — 可滚动的列表。

Row — 表示一行child。

Stack — 栈式布局的组件。

Table — 表格形式的组件。

Wrap — 可以对子child进行动态调整的widget。

可滑动的Sliver widgets有下面几种：

CupertinoSliverNavigationBar — 是一种IOS风格的导航bar。

CustomScrollView — 可以自定义scroll效果的ScrollView。

SliverAppBar — material风格的app bar,其中包含了CustomScrollView。

SliverChildBuilderDelegate — 使用builder callback为slivers提供child的委托。

SliverChildListDelegate — 使用list来为livers提供child的委托。

SliverFixedExtentList — 固定axis extent的sliver。

SliverGrid — child是二维分布的sliver。

SliverList — child是线性布局的sliver。

SliverPadding — 提供padding的sliver。

SliverPersistentHeader — 可变size的sliver。

SliverToBoxAdapter — 包含单个box widget的Sliver。


## 1 优化布局

### 1.1 减少 Widget 重建

能加const就加const。用**ValueNotifier,ValueListenableBuilder(valueListenable: valueNotify, builder: (context, text, child) { return Space(); }),** 代替 **SetState()**能大幅减低重新渲染区域，从而大幅降低界面重绘。

### 1.2 减少不必要的重建

在 Flutter 中，Widget 是不可变的，一旦创建就不能更改。因此，每次更改 Widget 的属性时，都会导致整个 Widget 树重新构建。为了避免不必要地重建，可以使用以下方法：

- 能用 const 尽量用：如果您的 Widget 是不可变的，可以使用 const 关键字将其标记为常量。这样，Flutter 就可以在编译时进行优化，避免不必要地重建。
- 使用 Key：如果您的 Widget 是可变的，可以使用 Key 来标记它。Key 是一个唯一标识符，可以用于告诉 Flutter 哪些 Widget 需要更新。
- 使用 StatefulWidget：如果您的 Widget 是可变的，可以使用 StatefulWidget 来标记它。StatefulWidget 允许您在 Widget 的状态发生变化时更新它。
- 在只需要变更较少内容尤其文本一类时，使用 ValueNotifier 和 ValueListenableBuilder 代替 setState() 可大幅减少 StatefulWidget 界面重绘

### 1.3 减少不必要的布局

在 Flutter 中，布局是一个非常昂贵的操作，因为它需要重新计算每个 Widget 的位置和大小。为了避免不必要的布局，可以使用以下方法：

- 使用 ListView.builder：ListView.builder 只会在需要时创建和更新列表项，而不是一次性创建所有列表项。
- 使用 Sliver：如果您的列表项是可变的，可以使用 Sliver 来创建它。Sliver 是一个可滚动的 Widget，它只在需要时创建和更新列表项。

## 2 使用 injectable 和 get_it 优化项目结构的框架

- ~~使用 Provider：如果您的 Widget 是可变的，可以使用 Provider 来管理它的状态。Provider 是一个状态管理库，可以帮助您在 Widget 之间共享状态。~~
- 使用 injectable 和 get_it 管理状态：如果您的 Widget 是可变的，可以使用 injectable 和 get_it 来管理它的状态。injectable 和 get_it 是两个状态管理库，可以帮助您在 Widget 之间共享状态。

### 2.1 injectable 和 get_it 框架搭建

安装依赖

flutter pub add injectable get_it

安装生成器

flutter pub add build_runner injectable_generator --dev

yaml 如下

```yaml
dependencies:
  # add injectable to your dependencies
  injectable:
  # add get_it
  get_it:

dev_dependencies:
  # add the generator to your dev_dependencies
  injectable_generator:
  # add build runner if not already added
  build_runner:
```

新建 配置工具文件 lib/inject/injector.dart

```dart
import 'package:get_it/get_it.dart';
import 'package:injectable/injectable.dart';
final getIt = GetIt.instance;

@InjectableInit(
  initializerName: "init", // default
  preferRelativeImports: true, // default
  asExtension: false, // default
)
Future<void> configureDependencies() async => init(getIt);
```

此时应该会报 init 未定义的错误，稍后会生成文件解决。

新建 服务对象 文件 lib/service/future_base_service.dart

单例对象用@singleton 注解，非单例对象用@injectable 注解

```dart
import 'package:injectable/injectable.dart';

@singleton
class FutureBaseService {

  int _counter = 1;

  int get counter => _counter;

  Future<int> init() async {
    return await Future.delayed(Duration(seconds: 1),()=>Future.value(1));
  }

  int add(){
    // print("_counter = ${++_counter}");
    return ++_counter;
  }
}
```

加下来运行生成代码

```shell
flutter pub run build_runner build --delete-conflicting-outputs
```

此时应该会生成 injector.config.dart 文件，此时可以回到 injector.dart 文件，导入 config 文件，此时可以消除 init 未定义的错误。

如果使用 Android studio 可以配置运行设置(Edit Configurations...)，添加运行配置 Shell Script，Execute 选择 Script，text,将生成代码粘贴进去，点击 OK。后续添加服务对象时，只需要在服务对象文件上添加@singleton/@injectable 注解，然后运行 Shell Script 生成代码即可(避免每次命令行输入)。

### 2.2 injectable 和 get_it 框架使用

参考 lib/main.dart

```dart
import 'package:flutter/material.dart';
import 'package:test_injectable/service/future_base_service.dart';

import 'inject/injection.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await configureDependencies();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  ValueNotifier valueNotifier = ValueNotifier(getIt.get<FutureBaseService>().counter);

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    valueNotifier.dispose();
    super.dispose();
  }

  void _incrementCounter() {
    valueNotifier.value = getIt.get<FutureBaseService>().add();
    // setState(() {
    // });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('You have pushed the button this many times:'),
            ValueListenableBuilder(
              valueListenable: valueNotifier,
              builder: (context, value, child) {
                return Text(
                  '$value',
                  style: Theme.of(context).textTheme.headlineMedium,
                );
              },
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}

```

总之导入 injection.dart，使用 getIt.get<服务对象>()获取服务对象即可。
例子是用@singleton 生成单例，同时使用 valueListenableBuilder 监听值变化，更新界面。代替了 setState()。如果不用 valueListenableBuilder，使用 setState()也可以更新界面。

### 2.3 injectable 和 get_it 的优点,依赖注入的用法请[参考](https://pub.dev/packages/injectable#setup)

#### 2.3.1 @singleton 注解就省去了 dart 的单例的实现。

```dart
class FutureBaseService {
  static FutureBaseService? _instance;
  FutureBaseService._internal();
  static FutureBaseService get instance {
    _instance ??= FutureBaseService._internal();
    return _instance!;
  }
}
```

#### 2.3.2 @Named("impl1") 抽象类绑定到实现, 可以直接使用抽象类，切换实现类非常方便

Binding an abstract class to multiple implementations
将抽象类绑定到多个实现

抽象类(@factoryParam 注释构造函数参数,最多两个)

```dart
@injectable
class BackendService {
  BackendService(@factoryParam String url);
}
```

实现

```dart
@Named("impl1")
@Injectable(as: Service)
class ServiceImpl implements Service {}

@Named("impl2")
@Injectable(as: Service)
class ServiceImp2 implements Service {}
```

意思是将 Service 抽象类绑定到 ServiceImpl 和 ServiceImp2 两个实现类。好处是后续使用类时，只需要使用 Service 抽象类，就可以使用 ServiceImpl 和 ServiceImp2 两个实现类,方便两个实现类的切换。
使用时可以这样使用

```dart
@injectable
class MyRepo {
   final Service service;
    MyRepo(@Named('impl1') this.service)
}
```

比如要替换 Service 的实现类，只需要修改 MyRepo 的构造函数即可。
使用小写的 @named 注释自动将实现类名称分配给实例名称。然后使用 @Named.from（Type） 注解从类型中提取名称。

```dart
@named
@Injectable(as: Service)
 class ServiceImpl1 implements Service {}

@injectable
class MyRepo {
   final Service service;
    MyRepo(@Named.from(ServiceImpl2) this.service)
}
```

就是省了@Named("impl2")改为@Named.from(ServiceImpl2)就不需要知道具体的实现类名称了。

##### 1.2.3.3 @Environment("dev") @Environment("test") 不同环境下注册

(估计只影响占用内存吧)

非常坑的是写法看起来和 java 非常像，但其实只影响代码生成而已。
spring boot 可以通过@requestMapping("/test")注解来区分接收不同请求,执行不同代码
但 dart 的@dev 和@test 就完全不影响。
如果像通过配置文件或者运行参数来区分环境/代码，需要在代码逻辑上判断(类似 if(String.fromEnvironment("FLUTTER_ENV",defaultValue: "dev")) === "test")。
@dev 和@test 不能实现，只能在代码逻辑上判断！！！

## 3 用flutter_bloc代替provider(超过demo级别就建议使用)

### 3.1 安装和说明[参考](https://pub.dev/packages/flutter_bloc)
```shell
flutter pub add flutter_bloc
```

### 3.2 用法
分为三部分,bloc对象,state状态和event事件。
bloc 对象管理state状态,state只能通过event事件来改变state状态。
界面通过BlocBuilder来监听state状态的变化，更新界面，通过添加event事件来更新state状态。
逻辑上可看作 界面=>event=>bloc=>state=>BlocBuilder=>界面...
即使是event修改的状态和原状态相同，界面监听的state状态也会变化，所以界面也会更新。(这点很好理解，准确是提交状态和监听状态，不是只监听状态变化)
由于界面上通过BlocBuilder来监听state状态的变化，所以逻辑上局部有多种状态的尤其适合，例如在线状态(在线，忙碌，离开，离线...)。
逻辑上界面就和状态分开了，界面只需要监听状态变化，不需要关心状态的变化逻辑。
bloc就不关心界面了，只关心状态的变化逻辑。

#### 1.3.3 例子
以下代码是一个简单的例子，展示了如何使用flutter_bloc来管理用户设置(包含用户名、主题颜色和亮度模式)。
##### 1.3.3.1 user_setting_bloc.dart
```dart
part 'user_setting_event.dart';
part 'user_setting_state.dart';

@singleton
class UserSetting extends Bloc<UserSettingEvent, UserSettingState> {
  String _username = "";
  HcTheme _themeData = HcTheme.defaultLightList().first;

  bool _brightness = false;

  UserSetting() : super(UserSettingStateInit()) {
    on<UserSettingEvent>((event, emit) async {
      if (event is UserNameChange) {
        emit(UserSettingStateName(_username));
      }
      if (event is UserThemeChange) {
        emit(UserSettingStateTheme(_themeData.themeData));
      }
      if (event is UserBrightnessChange) {
        emit(UserSettingStateBrightness(_brightness));
      }
    });
  }

  void setUsername(String username) {
    LogUtil().d("setUsername:$username");
    _username = username;
    add(UserNameChange(_username));
  }

  String getUsername() {
    return _username;
  }

  void setHcTheme(HcTheme hcTheme) {
    LogUtil().d("will set HcTheme:$hcTheme");
    _themeData = hcTheme;
  }

  HcTheme getHcTheme() {
    return _themeData;
  }

  void setBrightness(bool mode) {
    _brightness = mode;
    add(UserBrightnessChange(mode));
  }

  bool getBrightness() {
    return _brightness;
  }
}
```
##### 1.3.3.2 user_setting_event.dart
```dart
part of 'user_setting_bloc.dart';

abstract class UserSettingEvent {}

class UserNameChange extends UserSettingEvent {
  String username;

  UserNameChange(this.username);
}

class UserThemeChange extends UserSettingEvent {
  ThemeData themeData;

  UserThemeChange(this.themeData);
}

class UserBrightnessChange extends UserSettingEvent {
  bool mode;

  UserBrightnessChange(this.mode);
}
```
##### 1.3.3.3 user_setting_state.dart
```dart
part of 'user_setting_bloc.dart';

abstract class UserSettingState {}

class UserSettingStateInit extends UserSettingState {}

class UserSettingStateName extends UserSettingState {
  String username;

  UserSettingStateName(this.username);
}

class UserSettingStateTheme extends UserSettingStateInit {
  ThemeData theme;

  UserSettingStateTheme(this.theme);
}

class UserSettingStateBrightness extends UserSettingStateInit {
  bool mode;

  UserSettingStateBrightness(this.mode);
}

```
##### 1.3.3.4 其他地方使用
main.dart
if (state is UserSettingStateTheme) {
    theme = state.theme;
}
通过判断状态，获取状态中的数据，更新界面。
MultiBlocProvider是用来管理多个bloc对象的，这里只管理一个bloc对象。
BlocBuilder是用来监听bloc对象的状态变化的，一定要要是MultiBlocProvider或者BlocProvider的子级，否则无法监听状态变化。
```dart
return MultiBlocProvider(
  providers: [
    BlocProvider(
      create: (BuildContext context) => getIt<UserSetting>(),
    ),
  ],
  child: BlocBuilder<UserSetting, UserSettingState>(
      builder: (context, state) {
        ThemeData theme = getIt<UserSetting>()
            .getHcTheme()
            .themeData;
        if (state is UserSettingStateTheme) {
          theme = state.theme;
        }
        return MaterialApp(
          title: 'WebRTC Flutter',
          theme: theme,
          home: Builder(
            builder: (context) {
              return LoginPage();
            },
          ),
        );
      }
  ),
);
```
其他页面，通过获取到bloc对象(通过getIt可以更方便获取),调用对应方法更新状态。
```dart
getIt<UserSetting>().setHcTheme(ThemeData(colorSchemeSeed: Colors.red, brightness: Brightness.light));
```