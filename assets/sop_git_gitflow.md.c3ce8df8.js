import{_ as n,o as l,c as p,Q as s,k as a}from"./chunks/framework.53f655e8.js";const m=JSON.parse('{"title":"⚕️ git flow 的使用","description":"⚕️ git flow 的使用","frontmatter":{"sticky":202309121603,"description":"⚕️ git flow 的使用","title":"⚕️ git flow 的使用","publish":true,"descriptionHTML":" <span style=\\"color:var(--description-font-color);\\">快速了解 git flow 的使用</span> <pre style=\\"background-color: #292b30; padding: 15px; border-radius: 10px;\\" class=\\"shiki material-theme-palenight\\"> <code> <span class=\\"line\\"> <span style=\\"color:#FFCB6B;\\">git</span> <span style=\\"color:#A6ACCD;\\"></span> <span style=\\"color:#C3E88D;\\">checkout</span> <span style=\\"color:#A6ACCD;\\"></span> <span style=\\"color:#00a6ed;\\">-b feature/userManage</span> </span><br/> <span class=\\"line\\" style=\\"margin-left: 8px\\"> <span style=\\"color:#FFCB6B;\\">git</span> <span style=\\"color:#A6ACCD;\\"></span> <span style=\\"color:#C3E88D;\\">checkout</span> <span style=\\"color:#A6ACCD;\\"></span> <span style=\\"color:#00a6ed;\\">-b hotfix/userBug-0.1</span> </span><br/> <span class=\\"line\\" style=\\"margin-left: 8px\\"> <span style=\\"color:#FFCB6B;\\">git</span> <span style=\\"color:#A6ACCD;\\"></span> <span style=\\"color:#C3E88D;\\">merge</span> <span style=\\"color:#A6ACCD;\\"></span> <span style=\\"color:#00a6ed;\\">release --no-ff</span> </span><br/> <span class=\\"line\\" style=\\"margin-left: 8px\\"> <span style=\\"color:#FFCB6B;\\">git</span> <span style=\\"color:#A6ACCD;\\"></span> <span style=\\"color:#C3E88D;\\">tag</span> <span style=\\"color:#A6ACCD;\\"></span> <span style=\\"color:#00a6ed;\\">-a v0.1 -m 部署包版本名</span> </span> </code> </pre> ","tag":["GIT"],"top":1,"sidebar":false},"headers":[],"relativePath":"sop/git/gitflow.md","filePath":"sop/git/gitflow.md","lastUpdated":1697036941000}'),e={name:"sop/git/gitflow.md"},o=s(`<h1 id="git-flow-了解与使用" tabindex="-1">Git flow 了解与使用 <a class="header-anchor" href="#git-flow-了解与使用" aria-label="Permalink to &quot;Git flow 了解与使用&quot;">​</a></h1><h2 id="_1-什么是-git-flow" tabindex="-1">1. 什么是 Git flow <a class="header-anchor" href="#_1-什么是-git-flow" aria-label="Permalink to &quot;1. 什么是 Git flow&quot;">​</a></h2><p>gitflow 是 git 的一种工作流程规范,由 Vincent Driessen 最先提出来,目的是为了解决分支和 commit 杂乱无章的问题,在实际开发过程中,若多名程序员开发同一个项目时很容易造成代码混乱甚至代码丢失的情况,而合理的运用 gitflow 规范可以很好地解决这个问题.如果你的公司很重视代码 review,那么 gitflow 更是你的不二之选.</p><h2 id="_2-git-flow-的工作流程" tabindex="-1">2. Git flow 的工作流程 <a class="header-anchor" href="#_2-git-flow-的工作流程" aria-label="Permalink to &quot;2. Git flow 的工作流程&quot;">​</a></h2><blockquote><p>git flow 常会用到下面五种分支：</p></blockquote><ul><li><h3 id="master-分支" tabindex="-1">Master 分支 <a class="header-anchor" href="#master-分支" aria-label="Permalink to &quot;Master 分支&quot;">​</a></h3></li></ul><p>这个分支只能从其他分支合并，不能在这个分支直接修改。</p><p>发布到 Release 的代码测试无误，可以合并过来。发布之后出现的问题，解决完之后可以合并过来。</p><p>master 分支的代码要设置提交权限，尽量不要将 master 的提交权限扩散。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">master</span><span style="color:#E1E4E8;">)$: git merge release --no-ff          </span><span style="color:#6A737D;"># 把release测试好的代码合并到master，运维人员操作</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">master</span><span style="color:#E1E4E8;">)$: git tag -a v0.1 -m </span><span style="color:#9ECBFF;">&#39;部署包版本名&#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 给版本命名，打Tag</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">master</span><span style="color:#E1E4E8;">)$: git push origin v0.1       		  </span><span style="color:#6A737D;"># 将tag推送到远程</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">master</span><span style="color:#24292E;">)$: git merge release --no-ff          </span><span style="color:#6A737D;"># 把release测试好的代码合并到master，运维人员操作</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">master</span><span style="color:#24292E;">)$: git tag -a v0.1 -m </span><span style="color:#032F62;">&#39;部署包版本名&#39;</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 给版本命名，打Tag</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">master</span><span style="color:#24292E;">)$: git push origin v0.1       		  </span><span style="color:#6A737D;"># 将tag推送到远程</span></span></code></pre></div><ul><li><h3 id="develop-分支" tabindex="-1">Develop 分支 <a class="header-anchor" href="#develop-分支" aria-label="Permalink to &quot;Develop 分支&quot;">​</a></h3></li></ul><p>这个分支是开发人员的主开发分支，包含所有要发布到下一个 Release 的代码，接到新需求和任务的时候，要从 develop 分支拉取代码。</p><p>一般情况 develop 的代码来源主要有两个：</p><p><strong>第一</strong>：进行需求开发，结束之后，将 feature 分支的代码合并过来</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">develop</span><span style="color:#E1E4E8;">)$: git checkout -b feature/userManage           </span><span style="color:#6A737D;"># 从develop建立特性分支</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">feature/userManage</span><span style="color:#E1E4E8;">)$: coding...                         </span><span style="color:#6A737D;"># 开发</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">feature/userManage</span><span style="color:#E1E4E8;">)$: git add xxx</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">feature/userManage</span><span style="color:#E1E4E8;">)$: git commit -m </span><span style="color:#9ECBFF;">&#39;feat: 增加了用户管理功能&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">develop</span><span style="color:#E1E4E8;">)$: git merge feature/userManage --no-ff         </span><span style="color:#6A737D;"># 把特性分支合并到develop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">develop</span><span style="color:#24292E;">)$: git checkout -b feature/userManage           </span><span style="color:#6A737D;"># 从develop建立特性分支</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">feature/userManage</span><span style="color:#24292E;">)$: coding...                         </span><span style="color:#6A737D;"># 开发</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">feature/userManage</span><span style="color:#24292E;">)$: git add xxx</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">feature/userManage</span><span style="color:#24292E;">)$: git commit -m </span><span style="color:#032F62;">&#39;feat: 增加了用户管理功能&#39;</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">develop</span><span style="color:#24292E;">)$: git merge feature/userManage --no-ff         </span><span style="color:#6A737D;"># 把特性分支合并到develop</span></span></code></pre></div><p><strong>第二</strong>：将 hotfix 处理好的 bug 合并过来</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">develop</span><span style="color:#E1E4E8;">)$: git merge hotfix/v0.1.1 --no-ff              </span><span style="color:#6A737D;"># 把hotfix分支合并到develop，同步代码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">develop</span><span style="color:#24292E;">)$: git merge hotfix/v0.1.1 --no-ff              </span><span style="color:#6A737D;"># 把hotfix分支合并到develop，同步代码</span></span></code></pre></div><ul><li><h3 id="feature-分支" tabindex="-1">Feature 分支 <a class="header-anchor" href="#feature-分支" aria-label="Permalink to &quot;Feature 分支&quot;">​</a></h3></li><li><p>开发新功能时，以 develop 为基础创建 feature 分支</p></li><li><p>分支命名: feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module</p></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">develop</span><span style="color:#E1E4E8;">)$: git checkout -b feature/userManage           </span><span style="color:#6A737D;"># 从develop建立特性分支</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">feature/userManage</span><span style="color:#E1E4E8;">)$: coding...                         </span><span style="color:#6A737D;"># 开发</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">feature/userManage</span><span style="color:#E1E4E8;">)$: git add xxx</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">feature/userManage</span><span style="color:#E1E4E8;">)$: git commit -m </span><span style="color:#9ECBFF;">&#39;feat: 增加了用户管理功能&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">develop</span><span style="color:#E1E4E8;">)$: git merge feature/userManage --no-ff         </span><span style="color:#6A737D;"># 把特性分支合并到develop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">develop</span><span style="color:#24292E;">)$: git checkout -b feature/userManage           </span><span style="color:#6A737D;"># 从develop建立特性分支</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">feature/userManage</span><span style="color:#24292E;">)$: coding...                         </span><span style="color:#6A737D;"># 开发</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">feature/userManage</span><span style="color:#24292E;">)$: git add xxx</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">feature/userManage</span><span style="color:#24292E;">)$: git commit -m </span><span style="color:#032F62;">&#39;feat: 增加了用户管理功能&#39;</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">develop</span><span style="color:#24292E;">)$: git merge feature/userManage --no-ff         </span><span style="color:#6A737D;"># 把特性分支合并到develop</span></span></code></pre></div><ul><li><h3 id="release-分支" tabindex="-1">Release 分支 <a class="header-anchor" href="#release-分支" aria-label="Permalink to &quot;Release 分支&quot;">​</a></h3></li></ul><p>该分支又叫<strong>预发布分支</strong>，它是指发布正式版本之前（即合并到 Master 分支之前），我们可能需要有一个预发布的版本进行测试。</p><p>预发布分支是从 Develop 分支上面分出来的，预发布结束以后，必须合并进 Develop 和 Master 分支。它的命名，可以采用 release/v0.2 的形式。</p><ol><li>当有一组 feature 开发完成，首先会合并到 develop 分支，进入提测时，会创建 release 分支。</li><li>如果测试过程中若存在 bug 需要修复，则直接由<strong>开发者在 release 分支修复并提交</strong>。</li><li>当测试完成之后，合并 release 分支到 master 和 develop 分支，此时 master 为最新代码，用作上线。</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">develop</span><span style="color:#E1E4E8;">)$: git checkout -b release/v0.1.0              </span><span style="color:#6A737D;"># 把hotfix分支合并到develop，同步代码</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">master</span><span style="color:#E1E4E8;">)$:  git merge release/v0.1.0 --no-ff			</span><span style="color:#6A737D;"># 将release的代码合并到master分支</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">master</span><span style="color:#E1E4E8;">)$: git tag -a v0.1 -m </span><span style="color:#9ECBFF;">&#39;部署包版本名&#39;</span><span style="color:#E1E4E8;">				</span><span style="color:#6A737D;"># 打一个新的tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">develop</span><span style="color:#E1E4E8;">)$:  git merge release/v0.1.0 --no-ff			</span><span style="color:#6A737D;"># 将release的代码合并到develop分支</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">develop</span><span style="color:#24292E;">)$: git checkout -b release/v0.1.0              </span><span style="color:#6A737D;"># 把hotfix分支合并到develop，同步代码</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">master</span><span style="color:#24292E;">)$:  git merge release/v0.1.0 --no-ff			</span><span style="color:#6A737D;"># 将release的代码合并到master分支</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">master</span><span style="color:#24292E;">)$: git tag -a v0.1 -m </span><span style="color:#032F62;">&#39;部署包版本名&#39;</span><span style="color:#24292E;">				</span><span style="color:#6A737D;"># 打一个新的tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">develop</span><span style="color:#24292E;">)$:  git merge release/v0.1.0 --no-ff			</span><span style="color:#6A737D;"># 将release的代码合并到develop分支</span></span></code></pre></div><ul><li><h3 id="hotfix-分支" tabindex="-1">Hotfix 分支 <a class="header-anchor" href="#hotfix-分支" aria-label="Permalink to &quot;Hotfix 分支&quot;">​</a></h3></li></ul><p>这个分支主要目的是线上 bug 修改，小功能的修改。发布之后有 bug，需要尽快修复不可能去等下一个版本迭代再去修改，这时候我们的 hotfix 分支就派上用场了。</p><p>hotfix 主要流程如下：</p><ul><li>切换到 master 分支，创建一个 hotfix 分支，如 hotfix/v0.1.1</li><li>在该分支处理 bug，然后提交</li><li>切换至 master 分支，将 hotfix 的代码合并过来</li><li>切换至 develop 分支，将 hotfix 的代码合并过来</li></ul><blockquote><p><strong>命名规则</strong>：在当前 release 版本号后面写小版本号。</p><p>例如: 当前的 release 分支为 v0.2，则 hotfix 分支名为 v0.2.1，下个 hotfix 分支名为 v0.2.2。</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">master</span><span style="color:#E1E4E8;">)$: git checkout -b hotfix/v0.1.1              </span><span style="color:#6A737D;"># 从master建立hotfix分支</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">hotfix/v0.1.1</span><span style="color:#E1E4E8;">)$: bcoding...                          </span><span style="color:#6A737D;"># 开发</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">hotfix/v0.1.1</span><span style="color:#E1E4E8;">)$: git add xxx</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">hotfix/v0.1.1</span><span style="color:#E1E4E8;">)$: git commit -m </span><span style="color:#9ECBFF;">&#39;fix: 处理了xxxbug&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">master</span><span style="color:#E1E4E8;">)$:  git merge hotfix/v0.1.1  --no-ff          </span><span style="color:#6A737D;"># 把hotfix分支合并到master，并上线到生产环境</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">develop</span><span style="color:#E1E4E8;">)$: git merge hotfix/v0.1.1  --no-ff          </span><span style="color:#6A737D;"># 把hotfix分支合并到dev，同步代码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">master</span><span style="color:#24292E;">)$: git checkout -b hotfix/v0.1.1              </span><span style="color:#6A737D;"># 从master建立hotfix分支</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">hotfix/v0.1.1</span><span style="color:#24292E;">)$: bcoding...                          </span><span style="color:#6A737D;"># 开发</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">hotfix/v0.1.1</span><span style="color:#24292E;">)$: git add xxx</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">hotfix/v0.1.1</span><span style="color:#24292E;">)$: git commit -m </span><span style="color:#032F62;">&#39;fix: 处理了xxxbug&#39;</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">master</span><span style="color:#24292E;">)$:  git merge hotfix/v0.1.1  --no-ff          </span><span style="color:#6A737D;"># 把hotfix分支合并到master，并上线到生产环境</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">develop</span><span style="color:#24292E;">)$: git merge hotfix/v0.1.1  --no-ff          </span><span style="color:#6A737D;"># 把hotfix分支合并到dev，同步代码</span></span></code></pre></div><p><span style="color:red;">建议: feature、release、hotfix 分支的代码合并到 master develop 后要及时删除。</span></p><h2 id="_3-git-flow-工作流程图" tabindex="-1">3. git flow 工作流程图 <a class="header-anchor" href="#_3-git-flow-工作流程图" aria-label="Permalink to &quot;3. git flow 工作流程图&quot;">​</a></h2>`,32),t=a("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{width:"800px",height:"500px"},src:"https://www.processon.com/embed/6520118cca74b14bc107227b"},null,-1),r=s(`<h2 id="_4-官方的流程图" tabindex="-1">4. 官方的流程图 <a class="header-anchor" href="#_4-官方的流程图" aria-label="Permalink to &quot;4. 官方的流程图&quot;">​</a></h2><div style="width:800px;height:800px;border:1px #333 solid;"><img src="https://jeffkreeftmeijer.com/git-flow/git-flow.png" style="max-height:100%;"></div><h2 id="_5-git-常用命令" tabindex="-1">5. git 常用命令 <a class="header-anchor" href="#_5-git-常用命令" aria-label="Permalink to &quot;5. git 常用命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">初始化仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">克隆（复制）一个远程仓库到本地</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">repository-ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">将文件提交到暂存区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">fil</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">提交更改到版本历史</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;fix: 提交消息&quot;</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">查看文件状态</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">查看提交历史</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">切换分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">feature/userManage</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">创建一个分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">feature/logManage</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">创建一个分支并切换到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">feature/roleManage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">拉取代码</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">拉取另一个分支的代码到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">合并分支到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">branch-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">推送代码到远程</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">推送代码到另一个仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">初始化仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">克隆（复制）一个远程仓库到本地</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">repository-ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">将文件提交到暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">fil</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">提交更改到版本历史</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;fix: 提交消息&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">查看文件状态</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">查看提交历史</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">切换分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">feature/userManage</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">创建一个分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">feature/logManage</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">创建一个分支并切换到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">feature/roleManage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">拉取代码</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">拉取另一个分支的代码到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">合并分支到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">branch-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">推送代码到远程</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">推送代码到另一个仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p><strong>关于 git 合并时 快进（fast-forward）合并和非快进合并的区别：</strong></p><h4 id="git-merge-feat" tabindex="-1"><code>git merge feat</code>： <a class="header-anchor" href="#git-merge-feat" aria-label="Permalink to &quot;\`git merge feat\`：&quot;">​</a></h4><ul><li>这是标准的分支合并操作，它会将 &quot;feat&quot; 分支的更改合并到当前分支。</li><li>如果没有冲突，合并将是一个快进（fast-forward）合并，这意味着不会创建新的合并提交，只是将当前分支的指针移动到 &quot;feat&quot; 分支的最新提交。</li><li>这种方式将使得分支历史线性，并且不会保留关于合并的具体信息。</li></ul><h4 id="git-merge-feat-no-ff" tabindex="-1"><code>git merge feat --no-ff</code>： <a class="header-anchor" href="#git-merge-feat-no-ff" aria-label="Permalink to &quot;\`git merge feat --no-ff\`：&quot;">​</a></h4><ul><li>这是使用 &quot;--no-ff&quot; 标志进行分支合并的方式。它用于确保即使没有冲突，也会创建一个新的合并提交，而不是执行快进合并。</li><li>这种合并策略会保留关于分支合并的具体信息，包括合并的源分支和合并时间戳。</li><li>使用 &quot;--no-ff&quot; 可以更清晰地显示分支合并的历史，特别是在多人协作或复杂项目中。</li></ul><blockquote><p>总的来说，区别在于合并历史的形状和信息的保留。使用 &quot;--no-ff&quot; 合并策略会创建更有信息量的合并提交，而标准的 <code>git merge</code> 可能会导致更线性的历史。你可以根据项目的需求和合并历史的可读性来选择合适的策略。</p></blockquote><div style="width:800px;height:400px;border:1px #333 solid;"><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xNjA3NTQ1OS0zNGRhMjkxYzE0NWU3MDc3LnBuZz9pbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3N0cmlwfGltYWdlVmlldzIvMi93LzEyMDAvZm9ybWF0L3dlYnA?x-oss-process=image/format,png" style="max-height:100%;"></div>`,11),c=a("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{width:"800px",height:"800px"},src:"https://www.processon.com/embed/6526936b7fde9c4bb35fe559"},null,-1),i=[o,t,r,c];function y(E,g,d,F,h,f){return l(),p("div",null,i)}const C=n(e,[["render",y]]);export{m as __pageData,C as default};