---
date: 2025-07-01
title: Flutter问题记录
description: 记录flutter开发中遇到的问题和优化
category:
    Flutter
tag:
  - Flutter
footer: 你遇到问题的问题，不是你的问题。
---

## 1 问题记录

### 1.1 代码相关

#### 1.1.1 const String.fromEnvironment("FLUTTER_ENV",defaultValue: "dev") 和 String.fromEnvironment("FLUTTER_ENV",defaultValue: "dev") 为什么结果不一样

##### 1.1.1.1 const String.fromEnvironment("FLUTTER_ENV", defaultValue: "dev")

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

##### 1.1.1.2 String.fromEnvironment("FLUTTER_ENV", defaultValue: "dev")

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

##### 1.1.1.3 实际应用

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

#### 1.1.2 封装一个参数中带有函数的容器

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
