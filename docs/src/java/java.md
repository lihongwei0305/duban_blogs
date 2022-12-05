---
footer: false
---

# Java

## 多线程

### 1. Thread

```java
// 主线程
public class MainThread {
    public static void main(String[] args) {
         System.out.println("主线程启动");
        TestThread th = new TestThread();
        th.start();
        for (int i = 0; i < 100; i++) {
            System.out.println("主线程main:" + i);
        }
    }
}


// 子线程
public class TestThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("子线程:"+ i);
        }
    }
}

```

