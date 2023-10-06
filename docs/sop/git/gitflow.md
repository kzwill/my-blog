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
        <span style="color:#00a6ed;">-b feature/userManager</span>
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

```sh
(master)$: git merge release --no-ff          # 把release测试好的代码合并到master，运维人员操作
(master)$: git tag -a v0.1 -m '部署包版本名'    # 给版本命名，打Tag
```

- ### Develop 分支

这个分支是开发人员的主开发分支，包含所有要发布到下一个 Release 的代码，接到新需求和任务的时候，要从 develop 分支拉取代码。

一般情况 develop 的代码来源主要有两个：

**第一**：进行需求开发，结束之后，将 feature 分支的代码合并过来

```sh
(develop)$: git checkout -b feature/userManager           # 从develop建立特性分支
(feature/userManager)$: coding...                         # 开发
(feature/userManager)$: git add xxx
(feature/userManager)$: git commit -m 'feat: 增加了用户管理功能'
(develop)$: git merge feature/userManager --no-ff         # 把特性分支合并到develop
```

**第二**：将 hotfix 处理好的 bug 合并过来

```sh
(develop)$: git merge hotfix/v0.1.1 --no-ff              # 把hotfix分支合并到develop，同步代码
```

- ### Feature 分支

- 开发新功能时，以 develop 为基础创建 feature 分支
- 分支命名: feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module

```sh
(develop)$: git checkout -b feature/userManager           # 从develop建立特性分支
(feature/userManager)$: coding...                         # 开发
(feature/userManager)$: git add xxx
(feature/userManager)$: git commit -m 'feat: 增加了用户管理功能'
(develop)$: git merge feature/userManager --no-ff         # 把特性分支合并到develop
```

- ### Release 分支

该分支又叫**预发布分支**，它是指发布正式版本之前（即合并到 Master 分支之前），我们可能需要有一个预发布的版本进行测试。

预发布分支是从 Develop 分支上面分出来的，预发布结束以后，必须合并进 Develop 和 Master 分支。它的命名，可以采用 release/v0.2 的形式。

1.  当有一组 feature 开发完成，首先会合并到 develop 分支，进入提测时，会创建 release 分支。
2.  如果测试过程中若存在 bug 需要修复，则直接由**开发者在 release 分支修复并提交**。
3.  当测试完成之后，合并 release 分支到 master 和 develop 分支，此时 master 为最新代码，用作上线。

```sh
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

```sh
(master)$: git checkout -b hotfix/v0.1.1              # 从master建立hotfix分支
(hotfix/v0.1.1)$: bcoding...                          # 开发
(hotfix/v0.1.1)$: git add xxx
(hotfix/v0.1.1)$: git commit -m 'fix: 处理了xxxbug'
(master)$:  git merge hotfix/v0.1.1  --no-ff          # 把hotfix分支合并到master，并上线到生产环境
(develop)$: git merge hotfix/v0.1.1  --no-ff          # 把hotfix分支合并到dev，同步代码
```

<span style="color: red">建议: feature、release、hotfix 分支的代码合并到 master develop 后要及时删除。</span>

## 3. git flow 工作流程图

<iframe id="embed_dom" name="embed_dom" frameborder="0" style="width:750px; height:500px;" src="https://www.processon.com/embed/6520118cca74b14bc107227b"></iframe>

## 4. 官方的流程图

<div style="width: 750px;height: 800px;border: 1px #333 solid">
    <img src="https://jeffkreeftmeijer.com/git-flow/git-flow.png" style="max-height: 100%"/>
</div>
