# 用户管理

<h3>Linux安全系统的核心是用户账户。每个能进入Linux系统的用户都会被分配唯一的用户账户。用户对系统中各种对象的访问权限取决于他们登录系统时用的账户。</h3>

## /etc/passwd文件

- Linux系统使用一个专门的文件来将用户的登录名匹配到对应的UID值。这个文件就是/etc/passwd文件，它包含了一些与用户有关的信息。
    - eg: `root:x:0:0:root:/root:/bin/bash`
        - 用户名
        - 用户密码
        - 用户UID
        - 用户组的ID(GID)
        - 用户账号的文本描述(备注)
        - 用户HOME的目录位置
        - 用户的默认shell

## /etc/shadow文件

- /etc/shadow文件对Linux系统密码管理提供了更多的控制。
    - eg: `root:$6$3SJFHyF8jOCzSH0b$u4ii1FLHCb0EdEvx3mtN.oNeh4HHlGOqUoTwnB0c8jy.B62HGJTg0rdSzxA5pWECFmXZXEGbnYwB4PBYjkSAi/::0:99999:7:::`
        - 登录名
        - 加密后的密码
        - 自上次修改密码后过去的天数密码（自1970年1月1日开始计算）
        - 多少天后才能更改密码
        - 多少天后必须更改密码
        - 密码过期前提前多少天提醒用户更改密码
        - 密码过期后多少天禁用用户账户
        - 用户账户被禁用的日期（用自1970年1月1日到当天的天数表示）
        - 预留字段给将来使用

## 添加用户

- `useradd`
    - `-c` 给新用户添加备注
    - `-d` 为主目录指定一个名字(如果不想用登录名作为主目录名)
    - `-e` 用YYYY-MM-DD格式指定账号的过期日期
    - `-f` 指定这个账户密码过期后多少天这个账户被禁用；0表示密码一过期就立即禁用，1表示禁用这个功能
    - `-g` 指定用户的GID
    - `-k` 必须和-m一起使用，将/etc/skel目录的内容复制到用户的HOME目录
    - `-m` 创建用户的HOME目录
    - `-M` 不创建用户的HOME目录
    - `-n` 创建一个和登录名一样的新组
    - `-r` 创建系统账户 ID < 1000
    - `-p` 密码
    - `-s` 指定shell
    - `-u` 指定uid

## 刪除用户

- `userdel` 默认删除/etc/shadow文件中的用户信息
    - `-r` 删除HOME目录以及邮件目录

## 修改用户

- `uesrmod`
    - `-l` 修改登录名
    - `-p` 修改账户的密码
    - `-L` 锁定账户,使用户无法登陆
    - `-U` 解除锁定

- `passwd` 修改密码
    - `-e` 强制用户下次登录时修改密码
    - eg: `echo admin | --stdin passwd user`

- `chpasswd` 从标准输入自动读取登录名和密码对（由冒号分割）列表，给密码加密，然后为用户账户设置。
    - eg: `chpasswd < users.txt`
    - eg: `cat user:admin | chpasswd`
- `chage`
  `-d` 设置上次修改密码到现在的天数
  `-E` 设置密码过期的日期
  `-I` 设置密码过期到锁定账户的天数
  `-m` 设置修改密码之间最少要多少天
  `-W` 设置密码过期前多久开始出现提醒信息 
