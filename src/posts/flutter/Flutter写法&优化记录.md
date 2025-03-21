---
date: 2025-03-18
title: Flutter写法&优化记录
description: 记录flutter开发中遇到的问题和优化
category:
  - Flutter
tag:
  - Flutter
footer: Flutter的性能优化就像减肥，你以为少吃点（减少Widget重建）就能瘦，结果发现还得去健身房（优化布局）。
---

## 1 优化布局

### 1.1 减少 Widget 重建

#### 1.1.1 减少不必要的重建

在 Flutter 中，Widget 是不可变的，一旦创建就不能更改。因此，每次更改 Widget 的属性时，都会导致整个 Widget 树重新构建。为了避免不必要的重建，可以使用以下方法：

- 能用 const 尽量用：如果您的 Widget 是不可变的，可以使用 const 关键字将其标记为常量。这样，Flutter 就可以在编译时进行优化，避免不必要的重建。
- 使用 Key：如果您的 Widget 是可变的，可以使用 Key 来标记它。Key 是一个唯一标识符，可以用于告诉 Flutter 哪些 Widget 需要更新。
- 使用 StatefulWidget：如果您的 Widget 是可变的，可以使用 StatefulWidget 来标记它。StatefulWidget 允许您在 Widget 的状态发生变化时更新它。
- 在只需要变更较少内容尤其文本一类时，使用 ValueNotifier 和 valueListenable 代替 setState() 可大幅减少 StatefulWidget 界面重绘

#### 1.1.2 减少不必要的布局

在 Flutter 中，布局是一个非常昂贵的操作，因为它需要重新计算每个 Widget 的位置和大小。为了避免不必要的布局，可以使用以下方法：

- 使用 ListView.builder：ListView.builder 只会在需要时创建和更新列表项，而不是一次性创建所有列表项。
- 使用 Sliver：如果您的列表项是可变的，可以使用 Sliver 来创建它。Sliver 是一个可滚动的 Widget，它只在需要时创建和更新列表项。

### 1.2 使用 injectable 和 get_it 优化项目结构的框架

- ~~使用 Provider：如果您的 Widget 是可变的，可以使用 Provider 来管理它的状态。Provider 是一个状态管理库，可以帮助您在 Widget 之间共享状态。~~
- 使用 injectable 和 get_it 管理状态：如果您的 Widget 是可变的，可以使用 injectable 和 get_it 来管理它的状态。injectable 和 get_it 是两个状态管理库，可以帮助您在 Widget 之间共享状态。

#### 1.2.1 injectable 和 get_it 框架搭建

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

#### 1.2.2 injectable 和 get_it 框架使用

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

#### 1.2.3 injectable 和 get_it 的优点,依赖注入的用法请[参考](https://pub.dev/packages/injectable#setup)

##### 1.2.3.1 @singleton 注解就省去了 dart 的单例的实现。

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

##### 1.2.3.2 @Named("impl1") 抽象类绑定到实现, 可以直接使用抽象类，切换实现类非常方便

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

## 2 问题记录

### 2.1 代码相关

#### 2.1.1 const String.fromEnvironment("FLUTTER_ENV",defaultValue: "dev") 和 String.fromEnvironment("FLUTTER_ENV",defaultValue: "dev") 为什么结果不一样

##### 2.1.1.1 const String.fromEnvironment("FLUTTER_ENV", defaultValue: "dev")

const 关键字的作用：

const 表示编译时常量。在编译时，Dart 会尝试解析 String.fromEnvironment 的值。

如果 FLUTTER_ENV 环境变量在编译时未定义，Dart 会直接使用 defaultValue（即 "dev"），并且这个值会被硬编码到编译后的代码中。

行为：

如果 FLUTTER_ENV 在编译时未定义，const String.fromEnvironment 会直接返回 "dev"。

如果 FLUTTER_ENV 在编译时定义了（例如通过 --dart-define 传递），Dart 会使用定义的值。

注意：const 版本的环境变量只能在编译时解析，无法在运行时动态更改。

示例：

```dart
const env = String.fromEnvironment("FLUTTER_ENV", defaultValue: "dev");
print(env); // 如果 FLUTTER_ENV 未定义，输出 "dev"
```

##### 2.1.1.2 String.fromEnvironment("FLUTTER_ENV", defaultValue: "dev")

没有 const 关键字：

这是一个非常量调用，String.fromEnvironment 会在运行时解析环境变量。

如果 FLUTTER_ENV 环境变量在运行时未定义，Dart 会使用 defaultValue（即 "dev"）。

行为：

如果 FLUTTER_ENV 在运行时未定义，String.fromEnvironment 会返回 "dev"。

如果 FLUTTER_ENV 在运行时定义了（例如通过系统环境变量或运行时配置），Dart 会使用定义的值。

注意：非 const 版本的环境变量可以在运行时动态解析。

示例：

```dart
final env = String.fromEnvironment("FLUTTER_ENV", defaultValue: "dev");
print(env); // 如果 FLUTTER_ENV 未定义，输出 "dev"
```

##### 2.1.1.3 实际应用

使用 const String.fromEnvironment
适合在编译时确定的环境变量，例如区分开发环境和生产环境：

```dart
const env = String.fromEnvironment("FLUTTER_ENV", defaultValue: "dev");
print(env); // 编译时确定，输出 "dev" 或定义的值
```

使用 String.fromEnvironment
适合在运行时动态解析的环境变量，例如从系统环境变量中读取：

```dart
final env = String.fromEnvironment("FLUTTER_ENV", defaultValue: "dev");
print(env); // 运行时解析，输出 "dev" 或系统环境变量的值
```

在运行时，可以通过设置系统环境变量来影响结果：

```shell
export FLUTTER_ENV=test
flutter run
```

#### 2.1.2 封装一个参数中带有函数的容器

```dart
Widget _buildSliderButton(
    String label,
    double value,
    Function(double) onChanged,//关键这里
  ) {
    return Column(
      children: [
        Text(
          label,
          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                fontSize: 11.sp,
              ),
        ),
        Slider(
          value: value,
          activeColor: Theme.of(context).colorScheme.primary,
          onChanged: (val) {
            onChanged(val);
            _update();
          },
        ),
      ],
    );
  }
```

使用时

```dart
_buildSliderButton(
  Strings.blusher.i18n,
  _beautyFilters.blusherValue,
  (value) {
    setState(() {
      _beautyFilters.blusherValue = value;
    });
  },
)
```
