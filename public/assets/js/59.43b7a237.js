(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{784:function(t,r,s){"use strict";s.r(r);var e=s(103),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"burpsuite简要手册"}},[t._v("BurpSuite简要手册 "),s("a",{staticClass:"header-anchor",attrs:{href:"#burpsuite简要手册"}},[t._v("#")])]),t._v(" "),s("p",[s("strong",[t._v("灵活使用Burp可以提高渗透测试和漏洞挖掘的效率")])]),t._v(" "),s("h1",{attrs:{id:"选项摘要"}},[t._v("选项摘要 "),s("a",{staticClass:"header-anchor",attrs:{href:"#选项摘要"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Proxy\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#一个拦截HTTP/S的代理服务器")]),t._v("\nSpider\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#是一个应用智能感应的网络爬虫，它能完整的枚举应用程序的内容和功能。")]),t._v("\nScanner\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[仅限专业版]——是一个高级的工具，执行后，它能自动地发现web 应用程序的安全漏洞。")]),t._v("\nIntruder\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#枚举和fuzzing")]),t._v("\nRepeater\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#数据包重放")]),t._v("\nSequencer\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#会话令牌和重要数据项的随机性分析工具。")]),t._v("\nDecoder\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#智能解码编码工具")]),t._v("\nComparer\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可视化的“差异”比较工具")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h1",{attrs:{id:"intruder模块详解"}},[t._v("Intruder模块详解 "),s("a",{staticClass:"header-anchor",attrs:{href:"#intruder模块详解"}},[t._v("#")])]),t._v(" "),s("p",[s("strong",[t._v("Positions 有效负载位置—攻击类型")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("code",[t._v("Sniper")])]),t._v("：单独参数Fuzz")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("Battering ram")])]),t._v("：多个位置相同参数Fuzz")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("Pitchfork")])]),t._v("：多参数同时顺序Fuzz（顺序爆破用户名和对应ID）")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("Cluster bomb")])]),t._v("：多参数遍历Fuzz（例如用户名+密码爆破）")])]),t._v(" "),s("h1",{attrs:{id:"代理设置"}},[t._v("代理设置 "),s("a",{staticClass:"header-anchor",attrs:{href:"#代理设置"}},[t._v("#")])]),t._v(" "),s("p",[s("strong",[t._v("拦截HTTPS代理")])]),t._v(" "),s("blockquote",[s("p",[t._v("1、 浏览器设置好BurpSuite代理服务器后，访问http://burp ，下载CA证书")]),t._v(" "),s("p",[t._v("2、双击安装这个证书，在浏览器"),s("code",[t._v("证书机构")]),t._v("处导入证书")]),t._v(" "),s("p",[t._v("注意：安装到受信任的根证书颁发机构")])]),t._v(" "),s("p",[s("strong",[t._v("APP抓包")])]),t._v(" "),s("blockquote",[s("p",[t._v("1、"),s("code",[t._v("Proxy Listeners")]),t._v(" => 选中当前在用的代理 => "),s("code",[t._v("Edit")]),t._v(" => "),s("code",[t._v("Bind to address")]),t._v(" => "),s("code",[t._v("All interfaces")])]),t._v(" "),s("p",[t._v("2、 手机和PC连接同一Wifi，手机设置HTTP代理为BurpSuite所在的PC的IP和端口")])]),t._v(" "),s("p",[s("strong",[t._v("代理链")]),t._v("（SSR+Bp）")]),t._v(" "),s("p",[t._v("User options下的Connections页面中，有『Upstream Proxy Servers』和『SOCKS Proxy』")]),t._v(" "),s("h1",{attrs:{id:"burp拓展插件"}},[t._v("Burp拓展插件 "),s("a",{staticClass:"header-anchor",attrs:{href:"#burp拓展插件"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"co2-一个增强采集扩展-应用商店可安装"}},[t._v("CO2：一个增强采集扩展（应用商店可安装） "),s("a",{staticClass:"header-anchor",attrs:{href:"#co2-一个增强采集扩展-应用商店可安装"}},[t._v("#")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("SQLMapper")]),t._v("：GUI形式的sqlmap，便于构建命令")]),t._v(" "),s("p",[s("strong",[t._v("User Generator")]),t._v("：用户生成器， 使用名称统计信息生成名称或用户名")]),t._v(" "),s("p",[s("strong",[t._v("Name Mangler")]),t._v("：给出一个简短的名称和用户名列表，生成潜在用户名列表")]),t._v(" "),s("p",[s("strong",[t._v("CeWLer")]),t._v("： 从现有的Burp历史中提取字典")]),t._v(" "),s("p",[s("strong",[t._v("Masher")]),t._v("：生成自定义密码字典")])]),t._v(" "),s("h3",{attrs:{id:"chunked-coding-converter-0-2-1-jar"}},[t._v("chunked-coding-converter.0.2.1.jar "),s("a",{staticClass:"header-anchor",attrs:{href:"#chunked-coding-converter-0-2-1-jar"}},[t._v("#")])]),t._v(" "),s("p",[t._v("国人c0ny1最新版 burp分块输出，也是对抗waf的插件")]),t._v(" "),s("p",[t._v("地址：https://github.com/c0ny1/chunked-coding-converter")]),t._v(" "),s("h3",{attrs:{id:"burpshiropassivescan"}},[t._v("BurpShiroPassiveScan "),s("a",{staticClass:"header-anchor",attrs:{href:"#burpshiropassivescan"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Shiro反序列化被动扫描")]),t._v(" "),s("h3",{attrs:{id:"passive-scan-client-0-1"}},[t._v("passive-scan-client.0.1 "),s("a",{staticClass:"header-anchor",attrs:{href:"#passive-scan-client-0-1"}},[t._v("#")])]),t._v(" "),s("p",[t._v("配合Xray被动扫描")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("当然还有很多要学的，自己编写插件等等~")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://portswigger.net/burp/documentation/contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);