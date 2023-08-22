## 配置webview使用http

1. 在res下创建xml目录，在xml下创建network_security_config.xml文件

   `android\app\src\main\res\xml\network_security_config.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true"/>
</network-security-config>
```

2. 在AndroidManifest.xml使用
```xml

<activity>
    android:networkSecurityConfig="@xml/network_security_config"
</activity>
```
3. 在android\app\build.gradle下将targetSdkVersion改为27
```text
  defaultConfig {
        minSdkVersion 19
        targetSdkVersion 27
    }
```

## android打包

### 一 android studio终端生成签名文件

```shell
keytool -genkey -v -keystore <存放的路径>/文件名字.jks -keyalg RSA -keysize 2048 -validity 有效时间 -alias 别名
```

1. genkey : 产生密钥
2. keystore ：
3. <存放的路径>/key.jks ：证书的存放路径和名字
4. keyalg RSA -keysize 2048 ：使用 2048 位 RSA 算法对签名加密
5. validity 10000 ：有效期时间，这里是 10000天
6. alias sign ： 别名 sign

### 二 导入签名文件key.jks

在Flutter工程中/android/app目录下创建key文件夹，然后把sign.jks复制进来(注意保存在电脑本地的文件夹中还得有存在key.jks文件)

### 三 在android目录下创建 key.properties文件

```text
storePassword=lhw0305
keyPassword=lhw0305
keyAlias=sign
storeFile=D:\\flutter\\project\\flutter_demo01\\android\\app\\key\\key.jks
```

### 四 配置/android/app/build.gradle文件

1. 在flutter的/android/app/build.gradle文件中的android前加入

```text
 def keystorePropertiesFile =  rootProject.file("key.properties")
 def keystoreProperties = new Properties()
 keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
```

2. 在android里的signingConfigs加入release

```text
  signingConfigs {
        release {

            keyAlias keystoreProperties['keyAlias']

            keyPassword keystoreProperties['keyPassword']

            storeFile file(keystoreProperties['storeFile'])

            storePassword keystoreProperties['storePassword']
        }
    }

    buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so `flutter run --release` works.
            signingConfig signingConfigs.release
        }
    }
```

### 五 生成apk

```text
flutter build apk --target-platform android-arm --split-per-abi
```

或者

```text
flutter build apk (相对上面那个命令，此命令打包的apk相对大一些)
```

### 六 flutter install (安装到模拟器中)
