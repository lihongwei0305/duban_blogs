## 功能

1. 数据链路的建立、维护、与拆除
2. 帧的包装、传输、同步
3. 帧的差错恢复
4. 流量控制

## 数据在传输过程中的三种方式

1. 单播【Unicast】 （一对一）
2. 广播【Broadcast】 （一对所有）
3. 组播【Multicast】 （一对一部分）

::: tip 提示
在IPv6中取消了广播，取而代之的是任播【AnyCast】
:::

## MAC

###### 用来识别以太网上的某个单独的设备或一组设备

## 以太网的拓步结构形式

1. 总线型
2. 令牌型
3. 星型
4. 全互联型
5. 半互联型
6. 倒状树型结构
7. 混合型

## 以太网帧格式

1. Ethernet II
2. IEEE 802.3
   两种格式的区别在于Ethernet格式中包含一个【Type | 类型】字段,标识以太网帧处理完之后将会被上送到哪个上层协议进行处理；而IEEE
   802.3格式中，同样的位置是【length | 长度】字段

## 以太网交换机

1. 交换机分为两大类
    - 盒式交换机
    - 柜式交换机
2. 交换机会发广播

## 冲突与冲突域

1. 为了防止冲突的发生，同时也为了提高传输效率，应采取的做法是【分隔冲突域】
2. 交换机每一个端口就是一个独立的冲突域

##### 由于交换机的接收到接收到数据之后，会从除了接收方的其他端口发送广播，会形成广播风暴

## VLAN【Virtual Local Area Network | 虚拟局域网】

### 概念：是物理设备上连接的不受物理位置限制的用户的一个逻辑组

### 作用：用来分割广播域，隔绝广播风暴

### 交换机中的接口默认都在VLAN1中

### 种类

1. 基于端口的静态划分
2. 基于MAC地址的动态划分
3. 基于IP子网的动态划分
4. 基于协议的动态划分

::: tip 优先级
MAC地址 > IP子网 > 协议 > 端口
:::

## 链路类型

1. 接入链路【access】
2. 中继链路【trunk】
3. 混杂链路【hybrid】

```shell
// access
[Huawei] int e0/0/1
[Huawei] port link-type access
[Huawei] port default vlan 2

// trunk
[Huawei] int e0/0/1
[Huawei] port link-type trunk
[Huawei] port trunk allonse-pass all

// hybrid
[Huawei] int e0/0/1
[Huawei] port link-type hybrid
[Huawei] port hybrid vlan pvid 2


```

## GVRP 【自动识别VLAN】

```shell
[Huawei] gvrp   //在全局开启
[Huawei-Ethernet0/0/1] gvrp  //然后在接口开启
```

## LLDP【Link Layer Discover Protocol | 链路层发现协议】

##### 用来发现直连的邻居信息

```shell
[Huawei] lldp enable 
[Huawei] display llpd neighbor  //查看邻居的设备信息
```

## STP【生成树协议】

### 用来在二层网络中防止环路的发生，防止广播风暴的产生

1. 选择根网桥
    1. 比较BID，越小越优选 【BID = 网桥优先级 + 网桥的NAC地址】
2. 选择根端口
    1. 最低的到达根网桥的路径开销
    2. 最低的发送方网桥ID
    3. 最低的端口优先级
    4. 发送方（根网桥）最低的端口ID
3. 选择指定端口
    1. 根网桥中的所有端口为指定端口
    2. 非根网桥中：
        1. BPDU中的根网桥ID
        2. 最低的到达根网桥的路径开销
        3. 发送方（非根网桥）的网桥ID

## 交换机生成树的端口状态

1. 禁用【Disable】
2. 阻塞【Discard】
3. 侦听【Listening】
4. 学习【Learning】
5. 转发【Forwarding】

## 链路聚合

### 特点：

1. 提高链路带宽、增强网络可用性、支持负载分担
2. 配置链路聚合后将不再运算STP生成树

### 种类：

1. 手工负载反分担模式：允许所有活跃端口参与转发
    - 成员端口加入Eth-Trunk（隧道组）后，Eth-Trunk端口将会学习MAC地址，而成员端口将不再学习MAC地址
2. LACP【链路聚合控制协议】模式：支持链路备份

## 堆叠和集群

- 盒式交换机堆叠，最多支持32台设备
- 框式交换机集群，最多支持2台设备
