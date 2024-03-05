---
icon: swift
date: 2023-06-12
title: Flutter(Pigeon) IOS(swift)平台 AES8加解密（PKCS7模式）大文件实现
category:
  - flutter
tag:
  - flutter
  - ios
  - swift
star: true
footer: 桀桀解...
---

# flutter

## 1.创建插件项目(encrypt_pigeon),包名为(com.example.encrypt_pigeon)

![创建flutter插件项目](https://github.com/B2-4ac-1234/blog/blob/main/src/.vuepress/public/assets/images/flutter/flutter_create_project_plugin.png?raw=true)

## 2.创建目录/文件

![pigeon模版类](https://github.com/B2-4ac-1234/blog/blob/main/src/.vuepress/public/assets/images/flutter/flutter_create_pigeon.png?raw=true)

```dart
import 'package:pigeon/pigeon.dart';

/// Flutter调用原生的方法
@HostApi()
abstract class EncryptApi {
  String encryptStr(String key,String iv,String str);
  String decryptStr(String key,String iv,String str);
  bool encryptFile(String key,String iv,String src,String desc);
  bool decryptFile(String key,String iv,String src,String desc);
}

// /// 原生调用Flutter的方法
// @FlutterApi()
// abstract class FlutterEverything {
//   Everything giveMeEverythingFlutter();
//   Everything echoFlutter(Everything everything);
// }
```

## 3.创建并运行脚本

```bash
flutter pub run pigeon \
--input lib/pigeon/encrypt_pigeon.dart   \
--dart_out lib/encrypt_api.dart   \
--java_out android/src/main/java/com/example/encrypt_pigeon/EncryptPlugin.java   \
--java_package "com.example.encrypt_pigeon"   \
--objc_header_out ios/Classes/EncryptUntil.h   \
--objc_source_out ios/Classes/EncryptUntil.m   \
--objc_prefix FLT \
```

## 4.修改程序入口\*

```yaml
flutter:
	plugin:
		platforms:
			android:
				package: com.example.encrypt
				pluginClass: EncryptUntil
			ios:
				pluginClass: SwiftEncryptUntil
```

## 5.继承 pigeon 生成类，进行封装

```dart
import 'package:encrypt/encrypt_api.dart';
import 'package:flutter/foundation.dart';

class EncryptUntil {

  late String KEY;

  late String IV;

  static final EncryptUntil _instance = EncryptUntil._internal();

  EncryptUntil._internal();

  //单例模式，配置默认key和iv
  factory EncryptUntil({String? key, String? iv}) {
    _instance.KEY = key??"xxxxxxxxxxxxxxxx";
    _instance.IV = iv??"xxxxxxxxxxxxxxxx";
    debugPrint("EncryptUntil.factory: key=${_instance.KEY},iv=${_instance.IV}");
    return _instance;
  }


  Future<String?> encryptStr(String str) async {
    debugPrint("EncryptUntil.encryptStr: str=$str");
    String result = await EncryptApi().encryptStr(KEY,IV,str);
    debugPrint("EncryptUntil.encryptStr: result=$result");
    return result;
  }

  Future<String?> decryptStr(String str) async {
    debugPrint("EncryptUntil.decryptStr: str=$str");
    String result = await EncryptApi().decryptStr(KEY,IV,str);
    debugPrint("EncryptUntil.decryptStr: result=$result");
    return result;
  }

  Future<bool?> encryptFile({required String src,required String desc,String? key, String? iv}) async {
    int begin = DateTime.now().millisecondsSinceEpoch;
    debugPrint("EncryptUntil.encryptFile: src=$src,desc=$desc");
    bool result = await EncryptApi().encryptFile(KEY,IV,src,desc);
    int end = DateTime.now().millisecondsSinceEpoch;
    debugPrint("EncryptUntil.encryptFile: result=$result,used:${(end-begin)/1000}s");
    return result;
  }

  Future<bool?> decryptFile({required String src,required String desc,String? key, String? iv}) async {
    int begin = DateTime.now().millisecondsSinceEpoch;
    debugPrint("EncryptUntil.decryptFile: src=$src,desc=$desc");
    bool result = await EncryptApi().decryptFile(KEY,IV,src,desc);
    int end = DateTime.now().millisecondsSinceEpoch;
    debugPrint("EncryptUntil.decryptFile: result=$result,used:${(end-begin)/1000}s");
    return result;
  }
}
```

# IOS

## 1.在 example/ios 目录下运行 pod install CommonCryptoModule

## 2.用 Xcode 打开 example/ios 下的.workspace 文件

```swift
import Flutter
import UIKit
import CryptoSwift
import CommonCrypto

public class SwiftEncryptIosPlugin: NSObject, FlutterPlugin {

    public static func register(with registrar: FlutterPluginRegistrar) {
        let channel = FlutterMethodChannel(name: "encrypt_ios", binaryMessenger: registrar.messenger())
        let instance = SwiftEncryptIosPlugin()
        registrar.addMethodCallDelegate(instance, channel: channel)
    }

    public func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult) {

        //传入参数
        let arg = call.arguments
        //获取必要的key与iv
        if let args = arg as? [String: Any],
           let key = args["key"] as? String,
           let iv = args["iv"] as? String
        {
            let keyData = Data(bytes: key, count: key.count)
            let ivData = Data(bytes: iv, count: iv.count)
            switch call.method {//区分调用方法
            case "encryptStr":
                if let str = args["str"] as? String{
                    debugPrint("encryptStr->str:"+str)
                    let deData = aesCBC(operation: kCCEncrypt, data: Data(bytes: str.bytes, count: str.count), keyData: keyData, ivData: ivData)
                    debugPrint("encryptStr->destr:"+deData.base64EncodedString())
                    result(deData.base64EncodedString())//编码base64返回，与Android端相同
                }else{
                    result(FlutterError(code: "-1", message: "iOS could not extract " +
                                        "flutter arguments in method: (encryptStr),missing parameter 'str'", details: nil))
                }
            case "decryptStr":
                if let str = args["str"] as? String{
                    debugPrint("decryptStr->str:"+str)
                    let strData = Data(base64Encoded: str)//需要先解码base64，再进行解密
                    let deData = aesCBC(operation: kCCDecrypt, data:strData!, keyData: keyData, ivData: ivData)
                    let deStr = String(bytes: deData.bytes,encoding: String.Encoding.utf8)//转utf-8输出
                    debugPrint("decryptStr->destr:",deStr)
                    result(deStr)
                }else{
                    result(FlutterError(code: "-1", message: "iOS could not extract " +
                                        "flutter arguments in method: (encryptStr),missing parameter 'str'", details: nil))
                }
            case "encryptFile":
                if let src = args["src"] as? String,
                   let desc = args["desc"] as? String{
                    var isSuccess = false
                    do{
                        isSuccess = try aesCBCFile(operation: kCCEncrypt, keyData: keyData, ivData: ivData, _srcPath: src, _descPath: desc)
                        result(isSuccess)
                    }catch{
                        result(FlutterError(code: "-1", message: error.localizedDescription, details: nil))
                    }
                }else{
                    result(FlutterError(code: "-1", message: "iOS could not extract " +
                                        "flutter arguments in method: (encryptFile),missing parameter 'src/desc'", details: nil))
                }
            case "decryptFile":
                if let src = args["src"] as? String,
                   let desc = args["desc"] as? String{
                    var isSuccess = false
                    do{
                        isSuccess = try aesCBCFile(operation: kCCDecrypt, keyData: keyData, ivData: ivData, _srcPath: src, _descPath: desc)
                        result(isSuccess)
                    }catch{
                        result(FlutterError(code: "-1", message: error.localizedDescription, details: nil))
                    }
                }else{
                    result(FlutterError(code: "-1", message: "iOS could not extract " +
                                        "flutter arguments in method: (decryptFile),missing parameter 'src/desc'", details: nil))
                }
            default :
                result("iOS " + UIDevice.current.systemVersion)
            }
        }else{
            result(FlutterError(code: "-1", message: "iOS could not extract " +
                                "flutter arguments in : missing parameter(key or iv)", details: nil))
        }
    }
	// AES加解密
    public func aesCBC(operation: Int, data:Data, keyData: Data, ivData: Data) -> Data {
        let dataLength = data.count
        let cryptLength  = size_t(dataLength + kCCBlockSizeAES128)
        var cryptData = Data(count:cryptLength)

        let keyLength = size_t(kCCKeySizeAES128)
        let options = CCOptions(kCCOptionPKCS7Padding)


        var numBytesEncrypted :size_t = 0

        let cryptStatus = cryptData.withUnsafeMutableBytes {cryptBytes in
            data.withUnsafeBytes {dataBytes in
                ivData.withUnsafeBytes {ivBytes in
                    keyData.withUnsafeBytes {keyBytes in
                        CCCrypt(CCOperation(operation),
                                CCAlgorithm(kCCAlgorithmAES),
                                options,
                                keyBytes, keyLength,
                                ivBytes,
                                dataBytes, dataLength,
                                cryptBytes, cryptLength,
                                &numBytesEncrypted)
                    }
                }
            }
        }

        if UInt32(cryptStatus) == UInt32(kCCSuccess) {
            cryptData.removeSubrange(numBytesEncrypted..<cryptData.count)

        } else {
            print("Error: \(cryptStatus)")
        }

        return cryptData;
    }

    public func aesCBCFile(operation: Int, keyData: Data, ivData: Data, _srcPath:String,_descPath:String) throws -> Bool{

        debugPrint("FileSrc:"+_srcPath)
        debugPrint("FileDesc:"+_descPath)

        let startTime = CFAbsoluteTimeGetCurrent()//记录方法开始时间

        if !(FileManager.default.fileExists(atPath: _srcPath)) {//判断源文件是否存在
            throw URLError(URLError.cannotWriteToFile,userInfo: ["message":"can't find file by srcPath"])
        }
        let inputStream = InputStream(fileAtPath: _srcPath)
        if inputStream == nil {//判断源文件流是否存在
            throw URLError(URLError.cannotWriteToFile,userInfo: ["message":"can't find file by srcPath"])
        }

        var srcFileSize : Int = 0
        let src = try FileManager.default.attributesOfItem(atPath: _srcPath)
        srcFileSize = Int(src[FileAttributeKey.size] as! UInt64)
        debugPrint("Begin,SrcFileSize:",srcFileSize)

        //初始化目标文件流,如果存在目标文件，进行移除
        if(FileManager.default.fileExists(atPath: _descPath)){
            try FileManager.default.removeItem(atPath: _descPath)
        }
        FileManager.default.createFile(atPath: _descPath, contents: nil)
        let outputStream = OutputStream(toFileAtPath: _descPath, append: true)!
        outputStream.open()

        //初始化加解密
        let keyLength = size_t(kCCKeySizeAES128)
        let options = CCOptions(kCCOptionPKCS7Padding)
        var cryptor: CCCryptorRef?
        //        defer {
        //            CCCryptorRelease(cryptor)
        //        }
        let status = keyData.withUnsafeBytes {keyBytes in
            ivData.withUnsafeBytes {ivBytes in
                CCCryptorCreate(CCOperation(operation), CCAlgorithm(kCCAlgorithmAES), options, keyBytes, keyLength, ivBytes, &cryptor)
            }
        }//创建加解密对象

        inputStream?.open()//开启输入流

        var bufused = 0//bufused为实际加解密所进行的字符个数
        var finalPointer:UnsafeMutablePointer<UInt8> = UnsafeMutablePointer<UInt8>.allocate(capacity: 1)//保存CCCryptorUpdate的结果
        let bufferSize = 1024*1024//缓冲区大小

        while inputStream!.hasBytesAvailable{

            let buffer = UnsafeMutablePointer<UInt8>.allocate(capacity: bufferSize)//缓冲区
            let read = inputStream!.read(buffer, maxLength: bufferSize)//读取数据流到缓冲区

            if (read == 0){
                buffer.deallocate()//清空缓冲区
                break
            }
            var readData = Data(bytes: buffer, count: read)
            var readLength  = readData.count

            let resultLength = size_t(readData.count + kCCBlockSizeAES128)//保存加解密后数组的长度
            var updateData = [UInt8](repeating: 0, count: resultLength)//保存加解密后的数据

            var cryptStatus = readData.withUnsafeBytes {readBytes in
                CCCryptorUpdate(cryptor, readBytes, readLength, &updateData, resultLength , &bufused)//进行加解密
            }

            if UInt32(cryptStatus) == UInt32(kCCSuccess) {
                updateData.removeSubrange(bufused..<resultLength)//保存实际进行的加解密个数，去除原本多余的字符

            } else {
                print("Error: \(cryptStatus)")
            }

            outputStream.write(updateData, maxLength: updateData.count)//写入文件

            finalPointer.initialize(from: updateData, count: 1)//记录修改,直接地址相连接，避免了内存溢出

            buffer.deallocate()//清空缓冲区
        }

        //数据读取完毕,关闭读取文件流
        inputStream!.close()

        CCCryptorFinal(cryptor, finalPointer, srcFileSize, &bufused)//通过CCCryptorFinal可以获得srcFileSize-updateResult.count大小的且合并后不影响updateResult的数组

        CCCryptorRelease(cryptor)//释放内存

        let bufferPointer = UnsafeMutableBufferPointer(start: finalPointer, count: bufused)//截取有效地址

        let result = outputStream.write(Array(bufferPointer), maxLength: bufused)//转为数组并写入文件

        //数据写入完毕,关闭写入文件流
        outputStream.close()

        var descFileSize : Int = 0
        let desc = try FileManager.default.attributesOfItem(atPath: _descPath)
        descFileSize = Int(desc[FileAttributeKey.size] as! UInt64)
        debugPrint("Finish,DescFileSize:",descFileSize)
        //记录结束时间
        let endTime = CFAbsoluteTimeGetCurrent()
        debugPrint(String(format:"aesCBCFile Function usage time ：%.2f second", (endTime - startTime)))
        return true
    }
}
```

转载请注明出处
