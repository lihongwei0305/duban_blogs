# NetWork

| HTTP状态码 |                          |                 |
|:-------:|--------------------------|-----------------|
|         | 具体含义                     | 常见的状态码          |
|   1xx   | 提示信息，表示目前协议处理的中间状态       |                 | 
|   2xx   | 成功，报文已经收到并被正确处理          | 200、204、206     | 
|   3xx   | 重定向，资源位置发生变动，需要客户端重新发生请求 | 301、302、304     | 
|   4xx   | 客户端错误，请求报文有误，服务器无法处理     | 400、403、404     | 
|   5xx   | 服务器错误，服务器正处理请求时内部发生了错误   | 500、501、502、503 | 

## 为什么要有 TCP/IP 网络模型？

对于同一台设备上的进程通信，有很多方式，比如有管道、消息队列、共享内存、信号等方式，而对于不同设备上的进程通信，就需要网络通信，而设备是多样性的，所以要兼容多种设备，就协商出了一套通用的网络协议，这样就可以实现网络的互联互通。

## TCP/IP 网络模型有几层

- 应用层
    - 我们直接接触到的就是应用层，比如电脑、手机上的软件就是在应用层实现的，当两台设备需要通信时，应用层就把数据传递给下一层，也就是传输层。
    - 应用层只需专注为用户提供应用功能，比如HTTP、FTP、DNS等，所以应用层不用去关心数据如何传输的。
    - 应用层是工作在操作系统中的用户态，传输层及其一下是内核态。
- 传输层
    - 为应用层提供网络支持的，作为应用传输数据的媒介，帮助实现应用到应用的通信，而实际的传输功能交个下一层，网络层。
    - 有两个传输协议[TCP和UDP](#tcp和upd)
- 网络层
    - 最常用的就是ip协议，ip协议会将传输层的报文作为数据部分，再加上ip包头组成ip报文
    - 负责将数据从一台设备传输到另一台设备
- 链路层（网络接口层）

## TCP和UPD

### TCP

- 面向连接：在通信之前需要建立连接，通过三次握手确保可靠的通信。
- 可靠性：提供可靠的数据传输，保证数据的顺序和完整性。
- 流式传输：将数据切分成小的数据段，通过序列号和确认机制进行传输。
- 慢启动和拥塞控制：根据网络条件动态调整传输速率，避免拥塞。
- 适用于可靠性要求较高的应用，如文件传输、网页浏览、电子邮件。

### UDP

- 无连接：不需要建立连接，直接发送数据包。
- 无可靠性保证：不提供数据的顺序和完整性保证。
- 基于数据报文：将数据打包成数据报文，每个数据报文都是独立的实体。
- 高效性：没有建立连接个拥塞控制的开销，传输效率较高。
- 适用于实时性要求较高的应用，如音视频流媒体，实时游戏。