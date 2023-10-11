---
sticky: 202309121603
description: ⚕️ git flow 的使用
title: ⚕️ git flow 的使用
publish: true
descriptionHTML: '
  <span style="color:var(--description-font-color);">快速了解 git flow 的使用</span>
  <pre style="background-color: #292b30; padding: 15px; border-radius: 10px;" class="shiki material-theme-palenight">
  <code>
      <span class="line">
        <span style="color:#FFCB6B;">git</span>
        <span style="color:#A6ACCD;"></span>
        <span style="color:#C3E88D;">checkout</span>
        <span style="color:#A6ACCD;"></span>
        <span style="color:#00a6ed;">-b feature/userManage</span>
      </span><br/>
      <span class="line" style="margin-left: 8px">
        <span style="color:#FFCB6B;">git</span>
        <span style="color:#A6ACCD;"></span>
        <span style="color:#C3E88D;">checkout</span>
        <span style="color:#A6ACCD;"></span>
        <span style="color:#00a6ed;">-b hotfix/userBug-0.1</span>
      </span><br/>
      <span class="line" style="margin-left: 8px">
        <span style="color:#FFCB6B;">git</span>
        <span style="color:#A6ACCD;"></span>
        <span style="color:#C3E88D;">merge</span>
        <span style="color:#A6ACCD;"></span>
        <span style="color:#00a6ed;">release --no-ff</span>
      </span><br/>
      <span class="line" style="margin-left: 8px">
        <span style="color:#FFCB6B;">git</span>
        <span style="color:#A6ACCD;"></span>
        <span style="color:#C3E88D;">tag</span>
        <span style="color:#A6ACCD;"></span>
        <span style="color:#00a6ed;">-a v0.1 -m 部署包版本名</span>
      </span>
  </code>
  </pre>
'
tag:
 - GIT
top: 1
sidebar: false
---

# Git flow 了解与使用

## 1. 什么是 Git flow

gitflow 是 git 的一种工作流程规范,由 Vincent Driessen 最先提出来,目的是为了解决分支和 commit 杂乱无章的问题,在实际开发过程中,若多名程序员开发同一个项目时很容易造成代码混乱甚至代码丢失的情况,而合理的运用 gitflow 规范可以很好地解决这个问题.如果你的公司很重视代码 review,那么 gitflow 更是你的不二之选.

## 2. Git flow 的工作流程

> git flow 常会用到下面五种分支：

- ### Master 分支

这个分支只能从其他分支合并，不能在这个分支直接修改。

发布到 Release 的代码测试无误，可以合并过来。发布之后出现的问题，解决完之后可以合并过来。

master 分支的代码要设置提交权限，尽量不要将 master 的提交权限扩散。

```shell
(master)$: git merge release --no-ff          # 把release测试好的代码合并到master，运维人员操作
(master)$: git tag -a v0.1 -m '部署包版本名'    # 给版本命名，打Tag
(master)$: git push origin v0.1       		  # 将tag推送到远程
```

- ### Develop 分支

这个分支是开发人员的主开发分支，包含所有要发布到下一个 Release 的代码，接到新需求和任务的时候，要从 develop 分支拉取代码。

一般情况 develop 的代码来源主要有两个：

**第一**：进行需求开发，结束之后，将 feature 分支的代码合并过来

```shell
(develop)$: git checkout -b feature/userManage           # 从develop建立特性分支
(feature/userManage)$: coding...                         # 开发
(feature/userManage)$: git add xxx
(feature/userManage)$: git commit -m 'feat: 增加了用户管理功能'
(develop)$: git merge feature/userManage --no-ff         # 把特性分支合并到develop
```

**第二**：将 hotfix 处理好的 bug 合并过来

```shell
(develop)$: git merge hotfix/v0.1.1 --no-ff              # 把hotfix分支合并到develop，同步代码
```

- ### Feature 分支

- 开发新功能时，以 develop 为基础创建 feature 分支
- 分支命名: feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module

```shell
(develop)$: git checkout -b feature/userManage           # 从develop建立特性分支
(feature/userManage)$: coding...                         # 开发
(feature/userManage)$: git add xxx
(feature/userManage)$: git commit -m 'feat: 增加了用户管理功能'
(develop)$: git merge feature/userManage --no-ff         # 把特性分支合并到develop
```

- ### Release 分支

该分支又叫**预发布分支**，它是指发布正式版本之前（即合并到 Master 分支之前），我们可能需要有一个预发布的版本进行测试。

预发布分支是从 Develop 分支上面分出来的，预发布结束以后，必须合并进 Develop 和 Master 分支。它的命名，可以采用 release/v0.2 的形式。

1.  当有一组 feature 开发完成，首先会合并到 develop 分支，进入提测时，会创建 release 分支。
2.  如果测试过程中若存在 bug 需要修复，则直接由**开发者在 release 分支修复并提交**。
3.  当测试完成之后，合并 release 分支到 master 和 develop 分支，此时 master 为最新代码，用作上线。

```shell
(develop)$: git checkout -b release/v0.1.0              # 把hotfix分支合并到develop，同步代码
(master)$:  git merge release/v0.1.0 --no-ff			# 将release的代码合并到master分支
(master)$: git tag -a v0.1 -m '部署包版本名'				# 打一个新的tag

(develop)$:  git merge release/v0.1.0 --no-ff			# 将release的代码合并到develop分支
```

- ### Hotfix 分支

这个分支主要目的是线上 bug 修改，小功能的修改。发布之后有 bug，需要尽快修复不可能去等下一个版本迭代再去修改，这时候我们的 hotfix 分支就派上用场了。

hotfix 主要流程如下：

- 切换到 master 分支，创建一个 hotfix 分支，如 hotfix/v0.1.1
- 在该分支处理 bug，然后提交
- 切换至 master 分支，将 hotfix 的代码合并过来
- 切换至 develop 分支，将 hotfix 的代码合并过来

> **命名规则**：在当前 release 版本号后面写小版本号。
>
> 例如: 当前的 release 分支为 v0.2，则 hotfix 分支名为 v0.2.1，下个 hotfix 分支名为 v0.2.2。

```shell
(master)$: git checkout -b hotfix/v0.1.1              # 从master建立hotfix分支
(hotfix/v0.1.1)$: bcoding...                          # 开发
(hotfix/v0.1.1)$: git add xxx
(hotfix/v0.1.1)$: git commit -m 'fix: 处理了xxxbug'
(master)$:  git merge hotfix/v0.1.1  --no-ff          # 把hotfix分支合并到master，并上线到生产环境
(develop)$: git merge hotfix/v0.1.1  --no-ff          # 把hotfix分支合并到dev，同步代码
```

<span style="color: red">建议: feature、release、hotfix 分支的代码合并到 master develop 后要及时删除。</span>

## 3. git flow 工作流程图

<iframe id="embed_dom" name="embed_dom" frameborder="0" style="width:800px; height:500px;" src="https://www.processon.com/embed/6520118cca74b14bc107227b"></iframe>

## 4. 官方的流程图

<div style="width: 800px;height: 800px;border: 1px #333 solid">
    <img src="https://jeffkreeftmeijer.com/git-flow/git-flow.png" style="max-height: 100%"/>
</div>

## 5. git 常用命令

```shell
// 初始化仓库
git init
// 克隆（复制）一个远程仓库到本地
git clone <repository-url>
// 将文件提交到暂存区
git add <file>
// 提交更改到版本历史
git commit -m "fix: 提交消息"
// 查看文件状态
git status
// 查看提交历史
git log

// 切换分支
git checkout feature/userManage
// 创建一个分支
git branch feature/logManage
// 创建一个分支并切换到当前分支
git checkout -b feature/roleManage

// 拉取代码
git pull
// 拉取另一个分支的代码到当前分支
git pull origin develop

// 合并分支到当前分支
git merge <branch-name>

// 推送代码到远程
git push
// 推送代码到另一个仓库
git push remote_name dev
```

**关于 git 合并时 快进（fast-forward）合并和非快进合并的区别：**

#### `git merge feat`：

- 这是标准的分支合并操作，它会将 "feat" 分支的更改合并到当前分支。
- 如果没有冲突，合并将是一个快进（fast-forward）合并，这意味着不会创建新的合并提交，只是将当前分支的指针移动到 "feat" 分支的最新提交。
- 这种方式将使得分支历史线性，并且不会保留关于合并的具体信息。

#### `git merge feat --no-ff`：

- 这是使用 "--no-ff" 标志进行分支合并的方式。它用于确保即使没有冲突，也会创建一个新的合并提交，而不是执行快进合并。
- 这种合并策略会保留关于分支合并的具体信息，包括合并的源分支和合并时间戳。
- 使用 "--no-ff" 可以更清晰地显示分支合并的历史，特别是在多人协作或复杂项目中。

> 总的来说，区别在于合并历史的形状和信息的保留。使用 "--no-ff" 合并策略会创建更有信息量的合并提交，而标准的 `git merge` 可能会导致更线性的历史。你可以根据项目的需求和合并历史的可读性来选择合适的策略。

<div style="width: 800px;height: 400px;border: 1px #333 solid">
    <img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xNjA3NTQ1OS0zNGRhMjkxYzE0NWU3MDc3LnBuZz9pbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3N0cmlwfGltYWdlVmlldzIvMi93LzEyMDAvZm9ybWF0L3dlYnA?x-oss-process=image/format,png" style="max-height: 100%"/>
</div>

<iframe id="embed_dom" name="embed_dom" frameborder="0" style="width:800px; height:800px;" src="https://www.processon.com/embed/6526936b7fde9c4bb35fe559"></iframe>
