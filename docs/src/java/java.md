---
footer: false
---

# Java

## 多线程

### 1. Thread类

```java
// 主线程
public class Main {
    public static void main(String[] args) {
        TestThread tt1 = new TestThread("线程AAA");
        TestThread tt2 = new TestThread("线程BBB");
        TestThread tt3 = new TestThread("线程CCC");
        tt1.start();
        tt2.start();
        tt3.start();
    }
}

// 子线程
public class TestThread extends Thread {
    private String title;
    public TestThread(String title) {
        this.title = title;
    }
    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(this.title + i);
        }
    }
}

```

### 2. Runnable接口

```java
// 主线程
public class Main {
    public static void main(String[] args) {
        Thread m1 = new Thread(new MyThread("线程AAAAA"));
        Thread m2 = new Thread(new MyThread("线程BBBBB"));
        Thread m3 = new Thread(new MyThread("线程CCCCC"));
        m1.start();
        m2.start();
        m3.start();
    }
}

// 子线程
public class MyThread implements Runnable {
    private String title;
    public MyThread(String title) {
        this.title = title;
    }
    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(this.title + i);
        }
    }
}
```

:::tip 解决Thread实现多线程出现的单继承问题；并且增加了函数式接口；
:::

### 3. Callable接口

```java
// 主线程
public class Main {
    public static void main(String[] args) throws Exception {
        FutureTask<String> ft1 = new FutureTask<String>(new CallableThread("A"));
        FutureTask<String> ft2 = new FutureTask<String>(new CallableThread("B"));
        FutureTask<String> ft3 = new FutureTask<String>(new CallableThread("C"));
        new Thread(ft1).start();
        new Thread(ft2).start();
        new Thread(ft3).start();
        System.out.println("【线程返回数据】：" + ft1.get());
        System.out.println("【线程返回数据】：" + ft2.get());
        System.out.println("【线程返回数据】：" + ft3.get());
    }
}

// 子线程
public class CallableThread implements Callable<String> {
    private String title;
    public CallableThread(String title) {
        this.title = title;
    }
    @Override
    public String call() throws Exception {
        for (int i = 0; i < 10; i++) {
            System.out.println(this.title + "线程执行:" + i);
        }
        return this.title + "test";
    }
}
```

::: tip Callable接口实现弥补了Runnable实现多线程没有返回值的问题。