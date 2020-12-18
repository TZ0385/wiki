module.exports = [
    '/knowledge/',
      {
		title: "基础知识",
		collapsable: true,
		children:[
            "/knowledge/base/safety",
            "/knowledge/base/modern-crypt",
            "/knowledge/base/network-web",
            "/knowledge/base/network-tcp-ip",
            "/knowledge/base/network-http",
            "/knowledge/base/network-https",
            "/knowledge/base/network-route",
            "/knowledge/base/linux-cmd",
            "/knowledge/base/linux-awk",
            "/knowledge/base/git-base",
            "/knowledge/base/docker-base"
		]
      },
      {
		title: "工具手册",
		collapsable: true,
		children:[
            "/knowledge/tools/nmap",
            "/knowledge/tools/sqlmap",
            "/knowledge/tools/metasploit",
            "/knowledge/tools/burpsuite",
            "/knowledge/intranet/Cobalt-Strike",
			"/knowledge/intranet/Aggressor-script"
		]
	},
	{
		title: "Web安全",
		collapsable: true,
		children:[
            "/knowledge/web/",
            "/knowledge/web/sql-injection",
            "/knowledge/web/xss",
            "/knowledge/web/expression-language-injection",
            "/knowledge/web/xxe",
            "/knowledge/web/source-leaked",
            "/knowledge/web/code-injection",
            "/knowledge/web/csrf-ssrf",
            "/knowledge/web/file-download",
            "/knowledge/web/file-includes",
            "/knowledge/web/file-upload",
            "/knowledge/web/jwt-cookie",
            "/knowledge/web/logical-vulns",
            "/knowledge/web/phpsec",
            "/knowledge/web/same-origin-policy",
            "/knowledge/web/session-sec"
		]
	},
	{
		title: "CTF",
		collapsable: true,
		children:[
            "/knowledge/web/",
            "/knowledge/web/sql-injection",
            "/knowledge/web/xss",
            "/knowledge/web/expression-language-injection",
            "/knowledge/web/xxe",
            "/knowledge/web/source-leaked",
            "/knowledge/web/code-injection",
            "/knowledge/web/csrf-ssrf",
            "/knowledge/web/file-download",
            "/knowledge/web/file-includes",
            "/knowledge/web/file-upload",
            "/knowledge/web/jwt-cookie",
            "/knowledge/web/logical-vulns",
            "/knowledge/web/phpsec",
            "/knowledge/web/same-origin-policy",
            "/knowledge/web/session-sec"
		]
	},
	{
		title: "渗透测试",
		collapsable: true,
		children:[
            "/knowledge/hw/",
            "/knowledge/hw/wan-info",
            "/knowledge/hw/seek-lan-entry",
            "/knowledge/hw/tunnel",
            "/knowledge/hw/trans-file",
            "/knowledge/hw/reverse-shell",
            "/knowledge/hw/privilege",
            "/knowledge/hw/webshell",
            "/knowledge/hw/os-backdoor",
            "/knowledge/hw/dns-c2",
            "/knowledge/hw/lan-info",
            "/knowledge/hw/get-os-passwd",
            "/knowledge/hw/hash-pass",
            "/knowledge/hw/ticket-pass",
            "/knowledge/hw/Gold-and-silver-notes",
            "/knowledge/hw/host-online",
            "/knowledge/hw/remove-os-log",
            "/knowledge/hw/defend-plan",
            "/knowledge/hw/linux-jiagu",
            "/knowledge/hw/win-jiagu",
            "/knowledge/hw/emergency-response",
            "/knowledge/hw/linux-emergency-response",
            "/knowledge/hw/win-emergency-response",
            "/knowledge/hw/remove-webshell"
		]
    },
      {
		title: "组件漏洞",
		collapsable: true,
		children:[
            "/knowledge/vulns/apache-activemq",
            "/knowledge/vulns/apache-httpd",
            "/knowledge/vulns/apache-kylin",
            "/knowledge/vulns/apache-shiro",
            "/knowledge/vulns/apache-solr",
            "/knowledge/vulns/apache-tomcat",
            "/knowledge/vulns/apereo-cas",
            "/knowledge/vulns/big-ip",
            "/knowledge/vulns/drupal",
            "/knowledge/vulns/edit-upload",
            "/knowledge/vulns/exchange",
            "/knowledge/vulns/fastjson",
            "/knowledge/vulns/gitlab",
            "/knowledge/vulns/iis",
            "/knowledge/vulns/joomla",
            "/knowledge/vulns/nginx",
            "/knowledge/vulns/phpmyadmin",
            "/knowledge/vulns/seeyon-oa",
            "/knowledge/vulns/spring",
            "/knowledge/vulns/thinkcmf",
            "/knowledge/vulns/thinkphp",
            "/knowledge/vulns/tongda-oa",
            "/knowledge/vulns/weaver-oa",
            "/knowledge/vulns/weblogic",
            "/knowledge/vulns/wordpress",
            "/knowledge/vulns/zabbix",
            "/knowledge/vulns/zentao",
		]
      },
	{
		title: "代码审计",
		collapsable: true,
		children:[
            "/knowledge/code-audit/",
            "/knowledge/code-audit/php-code-audit",
		]
    },
];