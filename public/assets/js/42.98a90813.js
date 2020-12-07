(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{768:function(t,s,a){"use strict";a.r(s);var e=a(103),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"linux入侵排查"}},[t._v("Linux入侵排查 "),a("a",{staticClass:"header-anchor",attrs:{href:"#linux入侵排查"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"账号安全"}},[t._v("账号安全 "),a("a",{staticClass:"header-anchor",attrs:{href:"#账号安全"}},[t._v("#")])]),t._v(" "),a("p",[t._v("先查看基础用户信息文件(/etc/passwd，/etc/shadow，/etc/group)")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、查询特权用户特权用户"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid 为0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" -F: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("==0{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),t._v(" /etc/passwd\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、查询可以远程登录的帐号信息\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("|\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$6")]),t._v("/{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),t._v(" /etc/shadow\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、除root帐号外，其他帐号是否存在sudo权限。如非管理需要，普通帐号应删除sudo权限\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" /etc/sudoers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^#\\|^$"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ALL=(ALL)"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("、禁用或删除多余及可疑的帐号\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -L user    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#禁用帐号，帐号无法登录，/etc/shadow第二栏为!开头")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("userdel")]),t._v(" -r user    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将删除user用户，并且将/home目录下的user目录一并删除")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"查看历史命令"}},[t._v("查看历史命令 "),a("a",{staticClass:"header-anchor",attrs:{href:"#查看历史命令"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/bash_history "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" history.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"检查网络连接"}},[t._v("检查网络连接 "),a("a",{staticClass:"header-anchor",attrs:{href:"#检查网络连接"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -antlp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看 PID 所对应的进程文件路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /proc/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PID")]),t._v("/exe\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"检查异常进程"}},[t._v("检查异常进程 "),a("a",{staticClass:"header-anchor",attrs:{href:"#检查异常进程"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" pid\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"检查开机启动项"}},[t._v("检查开机启动项 "),a("a",{staticClass:"header-anchor",attrs:{href:"#检查开机启动项"}},[t._v("#")])]),t._v(" "),a("p",[t._v("系统运行级别示意图：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("运行级别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("关机")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("单用户模式，可以想象为windows的安全模式，主要用于系统修复")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不完全的命令行模式，不含NFS服务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("完全的命令行模式，就是标准字符界面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("系统保留")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("图形模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("重启动")])])])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#系统默认允许级别")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v("  /etc/inittab\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("：initdefault  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#系统开机后直接进入哪个运行级别")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("当我们需要开机启动自己的脚本时，只需要将可执行脚本丢在"),a("code",[t._v("/etc/init.d")]),t._v("目录下，然后在"),a("code",[t._v("/etc/rc.d/rc*.d")]),t._v("中建立软链接即可")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/init.d/sshd /etc/rc.d/rc3.d/S100ssh\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#S开头代表加载时自启动")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"检查定时任务"}},[t._v("检查定时任务 "),a("a",{staticClass:"header-anchor",attrs:{href:"#检查定时任务"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al /var/spool/cron/* \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/crontab\n/etc/cron.d/*\n/etc/cron.daily/* \n/etc/cron.hourly/* \n/etc/cron.monthly/*\n/etc/cron.weekly/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看目录下所有文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" /etc/cron.d/*\n\n/etc/anacrontab\n/var/spool/anacron/*\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[a("a",{attrs:{href:"http://blog.lujun9972.win/blog/2018/04/19/%E4%BD%BF%E7%94%A8anacron%E5%AE%9A%E6%9C%9F%E6%89%A7%E8%A1%8C%E4%BB%BB%E5%8A%A1/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("anacrontab是啥"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"检查服务"}},[t._v("检查服务 "),a("a",{staticClass:"header-anchor",attrs:{href:"#检查服务"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v("  --list  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看服务自启动状态，可以看到所有的RPM包安装的服务")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#源码包安装的服务位置")]),t._v("\n/user/local/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"检查异常文件"}},[t._v("检查异常文件 "),a("a",{staticClass:"header-anchor",attrs:{href:"#检查异常文件"}},[t._v("#")])]),t._v(" "),a("blockquote",[a("p",[t._v("1、查看敏感目录，如/tmp目录下的文件，同时注意隐藏文件夹，以“..”为名的文件夹具有隐藏属性")]),t._v(" "),a("p",[t._v("2、针对可疑文件可以使用"),a("code",[t._v("stat")]),t._v("查看创建修改时间")]),t._v(" "),a("p",[t._v("3、发现WebShell、远控木马的创建时间")]),t._v(" "),a("p",[a("strong",[t._v("如何找出同一时间范围内创建的文件？")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" ./ -iname "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v(" -atime "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -type f \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#找出 ./ 下一天前访问过的文件")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"检查系统日志"}},[t._v("检查系统日志 "),a("a",{staticClass:"header-anchor",attrs:{href:"#检查系统日志"}},[t._v("#")])]),t._v(" "),a("p",[t._v("日志默认存放位置：/var/log/")]),t._v(" "),a("p",[t._v("查看日志配置情况：more /etc/rsyslog.conf")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("日志文件")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/var/log/cron")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("记录系统定时任务相关的日志")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/var/log/message")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("记录Linux操作系统常见的系统和服务错误信息(首要检查对象)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("/var/log/btmp")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("记录"),a("strong",[t._v("错误登录（登陆失败）"),a("strong",[t._v("日志；使用")]),t._v("lastb")]),t._v("命令查看")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("/var/log/lastlog")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("记录系统中所有用户最后一次成功登录时间，使用"),a("strong",[t._v("lastlog")]),t._v("命令查看")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("/var/log/wtmp")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("永久记录所有用户的登录、注销信息，同时记录系统的启动、重启、关机事件；用"),a("strong",[t._v("last")]),t._v("命令来查看")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/var/log/utmp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("只记录"),a("strong",[t._v("当前登录用户")]),t._v("的信息；使用"),a("strong",[t._v("w,who,users")]),t._v("等命令来查询")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/var/log/secure")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("记录验证和授权方面的信息，如SSH登录，su切换用户，sudo授权，甚至添加用户和修改用户密码")])])])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查询ssh登录记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" /var/log/secure\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装软件的日志-> Centos")]),t._v("\n/var/log/yum.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装软件的日志-> Ubuntu")]),t._v("\n/var/log/apt/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("**/var/log/syslog：**只记录警告信息，常常是系统出问题的信息；")]),t._v(" "),a("blockquote",[a("p",[t._v("syslog是Linux系统默认的日志守护进程")]),t._v(" "),a("p",[t._v("默认的syslog配置文件是/etc/sysctl.conf文件")]),t._v(" "),a("p",[a("strong",[t._v("syslog不可以使用vi等工具直接查看，它是二进制文件，使用 lastlog 查看")])])]),t._v(" "),a("p",[t._v("默认Centos，Fedora不生成该日志文件，但可以配置让系统生成该日志文件")]),t._v(" "),a("p",[a("code",[t._v("/etc/rsyslog.conf")]),t._v("文件中加上："),a("code",[t._v("*.warning /var/log/syslog")])]),t._v(" "),a("p",[t._v("该日志文件能记录当用户登录时login记录下的错误口令、Sendmail的问题、su命令执行失败等信息")]),t._v(" "),a("p",[a("strong",[t._v("正确清空syslog日志的方式")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/init.d/syslog\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"查杀工具"}},[t._v("查杀工具 "),a("a",{staticClass:"header-anchor",attrs:{href:"#查杀工具"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.clamav.net/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("杀软-Clamav"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.chkrootkit.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("chkrootkit"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"http://rkhunter.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rkhunter"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/grayddq/GScan",target:"_blank",rel:"noopener noreferrer"}},[t._v("GScan自动化检测脚本"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);