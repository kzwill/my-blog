---
sticky: 202309252229
description: 服务器上的安装部署
title: 🌐 安装部署
readingTime: false
tag:
  - Deploy
sidebar: true
top: 1
publish: true
---

## 1、node 的安装

此处以安装node 16.18.1 为例：

```bash
 wget https://cdn.npmmirror.com/binaries/node/v16.18.1/node-v16.18.1-linux-x64.tar.xz
  tar -xvf node-v16.18.1-linux-x64.tar.xz
  rm -rf node-v16.18.1-linux-x64.tar.xz
  mv node-v16.18.1-linux-x64/ /usr/local/node
  echo "export PATH=$PATH:/usr/local/node/bin" >> /etc/profile
  source /etc/profile
  node -v
```

## 2、pm2 的安装

> 备注：使用pm2需要先安装node

```bash
  npm install pm2@latest -g
```

**命令列表：**

```bash
    # Fork 模式
    pm2 start app.js --name my-api # 程序名

    # Cluster 模式
    pm2 start app.js -i 0        # 将根据可用的 CPU 使用 LB 启动最大进程
    pm2 start app.js -i max      # 和上面一样，但是不推荐使用。
    pm2 scale app +3             # Scales `app` up by 3 workers
    pm2 scale app 2              # Scales `app` up or down to 2 workers total

    # Listing
    pm2 list               # 显示所有进程状态
    pm2 jlist              # 以原始JSON格式打印进程列表
    pm2 prettylist         # 以美化的JSON格式打印进程列表
    pm2 describe 0         # 显示指定进程的所有信息
    pm2 monit              # 监控所有进程

    # Logs
    pm2 logs [--raw]       # 在流中显示所有进程日志
    pm2 flush              # 清空所有日志文件
    pm2 reloadLogs         # 重新加载所有日志

    # Actions
    pm2 stop all           # 停止所有进程
    pm2 restart all        # 重启所有进程
    pm2 reload all         # 将 0s 宕机机时间重新加载（对于 NETWORKED 应用程序）
    pm2 stop 0             # 停止指定进程id
    pm2 restart 0          # 重启指定进程id
    pm2 delete 0           # 将进程从pm2列表中删除
    pm2 delete all         # 将从pm2列表中删除所有进程

    # Misc
    pm2 reset <process>    # 重置元数据(重启时间…)
    pm2 updatePM2          # 在内存中更新pm2
    pm2 ping               # 确保pm2守护进程已经启动
    pm2 sendSignal SIGUSR2 my-app # 向脚本发送系统信号
    pm2 start app.js --no-daemon
    pm2 start app.js --no-vizion
    pm2 start app.js --no-autorestart
```

