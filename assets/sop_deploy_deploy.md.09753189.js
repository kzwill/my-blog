import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.53f655e8.js";const d=JSON.parse('{"title":"🌐 安装部署","description":"服务器上的安装部署","frontmatter":{"sticky":202309252229,"description":"服务器上的安装部署","title":"🌐 安装部署","readingTime":false,"tag":["Deploy"],"sidebar":true,"top":1,"publish":true},"headers":[],"relativePath":"sop/deploy/deploy.md","filePath":"sop/deploy/deploy.md","lastUpdated":1703210388000}'),l={name:"sop/deploy/deploy.md"},o=p(`<h2 id="_1、node-的安装" tabindex="-1">1、node 的安装 <a class="header-anchor" href="#_1、node-的安装" aria-label="Permalink to &quot;1、node 的安装&quot;">​</a></h2><p>此处以安装node 16.18.1 为例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://cdn.npmmirror.com/binaries/node/v16.18.1/node-v16.18.1-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-xvf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node-v16.18.1-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node-v16.18.1-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node-v16.18.1-linux-x64/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/node</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;export PATH=</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">:/usr/local/node/bin&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/profile</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/profile</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://cdn.npmmirror.com/binaries/node/v16.18.1/node-v16.18.1-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-xvf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node-v16.18.1-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node-v16.18.1-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node-v16.18.1-linux-x64/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/node</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;export PATH=</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">:/usr/local/node/bin&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/profile</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/profile</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">node</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre></div><h2 id="_2、pm2-的安装" tabindex="-1">2、pm2 的安装 <a class="header-anchor" href="#_2、pm2-的安装" aria-label="Permalink to &quot;2、pm2 的安装&quot;">​</a></h2><blockquote><p>备注：使用pm2需要先安装node</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2@latest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pm2@latest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span></span></code></pre></div><p><strong>命令列表：</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Fork 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.js</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-api</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 程序名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Cluster 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.js</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 将根据可用的 CPU 使用 LB 启动最大进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.js</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">max</span><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 和上面一样，但是不推荐使用。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scale</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+3</span><span style="color:#E1E4E8;">             </span><span style="color:#6A737D;"># Scales \`app\` up by 3 workers</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scale</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;"># Scales \`app\` up or down to 2 workers total</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Listing</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;">               </span><span style="color:#6A737D;"># 显示所有进程状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jlist</span><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;"># 以原始JSON格式打印进程列表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prettylist</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 以美化的JSON格式打印进程列表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">describe</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 显示指定进程的所有信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">monit</span><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;"># 监控所有进程</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Logs</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> [--raw]       </span><span style="color:#6A737D;"># 在流中显示所有进程日志</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flush</span><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;"># 清空所有日志文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reloadLogs</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 重新加载所有日志</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Actions</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;">           </span><span style="color:#6A737D;"># 停止所有进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 重启所有进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 将 0s 宕机机时间重新加载（对于 NETWORKED 应用程序）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">             </span><span style="color:#6A737D;"># 停止指定进程id</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 重启指定进程id</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">           </span><span style="color:#6A737D;"># 将进程从pm2列表中删除</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 将从pm2列表中删除所有进程</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Misc</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">proces</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 重置元数据(重启时间…)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">updatePM2</span><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 在内存中更新pm2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ping</span><span style="color:#E1E4E8;">               </span><span style="color:#6A737D;"># 确保pm2守护进程已经启动</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sendSignal</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">SIGUSR2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 向脚本发送系统信号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.js</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-daemon</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.js</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-vizion</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.js</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-autorestart</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Fork 模式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-api</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 程序名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Cluster 模式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 将根据可用的 CPU 使用 LB 启动最大进程</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">max</span><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 和上面一样，但是不推荐使用。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scale</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+3</span><span style="color:#24292E;">             </span><span style="color:#6A737D;"># Scales \`app\` up by 3 workers</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scale</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">              </span><span style="color:#6A737D;"># Scales \`app\` up or down to 2 workers total</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Listing</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;">               </span><span style="color:#6A737D;"># 显示所有进程状态</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jlist</span><span style="color:#24292E;">              </span><span style="color:#6A737D;"># 以原始JSON格式打印进程列表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prettylist</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 以美化的JSON格式打印进程列表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">describe</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 显示指定进程的所有信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">monit</span><span style="color:#24292E;">              </span><span style="color:#6A737D;"># 监控所有进程</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Logs</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> [--raw]       </span><span style="color:#6A737D;"># 在流中显示所有进程日志</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flush</span><span style="color:#24292E;">              </span><span style="color:#6A737D;"># 清空所有日志文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reloadLogs</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 重新加载所有日志</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Actions</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;">           </span><span style="color:#6A737D;"># 停止所有进程</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 重启所有进程</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 将 0s 宕机机时间重新加载（对于 NETWORKED 应用程序）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">             </span><span style="color:#6A737D;"># 停止指定进程id</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 重启指定进程id</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">           </span><span style="color:#6A737D;"># 将进程从pm2列表中删除</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 将从pm2列表中删除所有进程</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Misc</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">proces</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 重置元数据(重启时间…)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">updatePM2</span><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 在内存中更新pm2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ping</span><span style="color:#24292E;">               </span><span style="color:#6A737D;"># 确保pm2守护进程已经启动</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sendSignal</span><span style="color:#24292E;"> </span><span style="color:#032F62;">SIGUSR2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 向脚本发送系统信号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-daemon</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-vizion</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-autorestart</span></span></code></pre></div>`,8),e=[o];function t(c,r,E,y,F,i){return n(),a("div",null,e)}const B=s(l,[["render",t]]);export{d as __pageData,B as default};