(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{746:function(_,v,t){"use strict";t.r(v);var s=t(103),p=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"tcp和udp"}},[_._v("TCP和UDP "),t("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp"}},[_._v("#")])]),_._v(" "),t("ol",[t("li",[_._v("TCP是面向连接的，UDP是无连接的；")]),_._v(" "),t("li",[_._v("TCP是可靠传输，UDP不可靠；")]),_._v(" "),t("li",[_._v("TCP是面向字节流的，UDP是面向报文的；")]),_._v(" "),t("li",[_._v("TCP的连接是点到点的，UDP支持一对一、一对多通信。")])]),_._v(" "),t("h1",{attrs:{id:"osi七层模型"}},[_._v("OSI七层模型 "),t("a",{staticClass:"header-anchor",attrs:{href:"#osi七层模型"}},[_._v("#")])]),_._v(" "),t("p",[_._v("1、**物理层：**负责0、1比特流与电压的高低，光的闪灭之间的互换；双绞线，无线，光纤")]),_._v(" "),t("p",[_._v("2、**数据链路层：**负责物理层面上的互连、节点间的通信传输；以太网，无线网，PPP")]),_._v(" "),t("p",[_._v("3、**网络层：**负责寻址和路由选择；ARP，IPv4，IPv6，IPsec")]),_._v(" "),t("p",[_._v("4、**传输层：**起可靠传输作用，只在通信双方节点进行处理；TCP，UDP")]),_._v(" "),t("p",[_._v("5、**会话层：**负责建立和断开通信连接")]),_._v(" "),t("p",[_._v("6、**表示层：**负责数据格式的转换")]),_._v(" "),t("p",[_._v("7、**应用层：**提供应用程序通信细节；Telnet，SSH，HTTP，SMTP，SSL/TLS，FTP，SNMP")]),_._v(" "),t("h1",{attrs:{id:"tcp-ip四层模型"}},[_._v("TCP/IP四层模型 "),t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip四层模型"}},[_._v("#")])]),_._v(" "),t("p",[_._v("1、**应用层：**对应OSI参考模型的高层，提供各种服务")]),_._v(" "),t("p",[_._v("2、"),t("strong",[_._v("传输层：")]),_._v(" 为应用层实体提供端到端的通信功能，保证了数据包的顺序传送及数据的完整性")]),_._v(" "),t("p",[_._v("3、"),t("strong",[_._v("网际互联层：")]),_._v(" 主要解决主机到主机的通信问题 ， 有三个主要协议：网际协议（IP）、互联网组管理协议（IGMP）和互联网控制报文协议（ICMP）")]),_._v(" "),t("p",[_._v("4、"),t("strong",[_._v("网络接入层：")]),_._v(" 负责监视数据在主机和网络之间的交换")]),_._v(" "),t("h1",{attrs:{id:"三次握手"}},[_._v("三次握手 "),t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")])]),_._v(" "),t("p",[_._v("刚开始客户端处于 Closed 的状态，服务端处于 Listen 状态。")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("第一次握手")]),_._v("：客户端给服务端发一个 SYN 报文，并指明客户端的初始化序列号 ISN(c)。此时客户端处于 SYN_Send 状态。")]),_._v(" "),t("p",[t("strong",[_._v("第二次握手")]),_._v("：服务器收到客户端的 SYN 报文之后，会以自己的 SYN 报文作为应答，并且也是指定了自己的初始化序列号 ISN(s)。")]),_._v(" "),t("p",[_._v("​\t\t\t\t\t   同时会把客户端的 ISN + 1 作为 ACK 的值，表示自己已经收到了客户端的 SYN，此时服务器处于 SYN_REVD 的状态。")]),_._v(" "),t("p",[t("strong",[_._v("第三次握手")]),_._v("：客户端收到 SYN 报文之后，会发送一个 ACK 报文，当然，也是一样把服务器的 ISN + 1 作为 ACK 的值")]),_._v(" "),t("p",[_._v("​\t\t\t\t\t   表示已经收到了服务端的 SYN  报文，此时客户端处于 establised 状态。")]),_._v(" "),t("p",[_._v("​\t\t\t\t\t   服务器收到 ACK 报文之后，也处于 establised 状态，此时，双方已建立起了链接")])]),_._v(" "),t("h4",{attrs:{id:"三次握手的作用"}},[_._v("三次握手的作用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手的作用"}},[_._v("#")])]),_._v(" "),t("p",[_._v("确认双方的接受能力、发送能力是否正常。")]),_._v(" "),t("p",[_._v("指定自己的初始化序列号，为后面的可靠传送做准备。")]),_._v(" "),t("p",[_._v("如果是 HTTPS 协议的话，三次握手这个过程，还会进行数字证书的验证以及加密密钥的生成。")]),_._v(" "),t("p",[_._v("①(ISN)是固定的吗\n三次握手的一个重要功能是客户端和服务端交换 ISN(Initial Sequence Number)，以便让对方知道接下来接收数据的时候如何按序列号组装数据。\n如果 ISN 是固定的，攻击者很容易猜出后续的确认号，因此 ISN 是动态生成的。")]),_._v(" "),t("p",[_._v("②什么是半连接队列\n服务器第一次收到客户端的 SYN 之后，就会处于 SYN_RCVD 状态，此时双方还没有完全建立其连接，服务器会把此种状态下请求连接放在一个队列里，我们把这种队列称之为半连接队列。\n当然还有一个全连接队列，就是已经完成三次握手，建立起连接的就会放在全连接队列中。如果队列满了就有可能会出现丢包现象。\n这里在补充一点关于SYN-ACK 重传次数的问题：\n服务器发送完SYN-ACK包，如果未收到客户确认包，服务器进行首次重传，等待一段时间仍未收到客户确认包，进行第二次重传。如果重传次数超过系统规定的最大重传次数，系统将该连接信息从半连接队列中删除。\n注意，每次重传等待的时间不一定相同，一般会是指数增长，例如间隔时间为 1s，2s，4s，8s......")]),_._v(" "),t("p",[_._v("③三次握手过程中可以携带数据吗\n很多人可能会认为三次握手都不能携带数据，其实第三次握手的时候，是可以携带数据的。\n也就是说，第一次、第二次握手不可以携带数据，而第三次握手是可以携带数据的。\n为什么这样呢?大家可以想一个问题，假如第一次握手可以携带数据的话，如果有人要恶意攻击服务器，那他每次都在第一次握手中的 SYN 报文中放入大量的数据。\n因为攻击者根本就不理服务器的接收、发送能力是否正常，然后疯狂着重复发 SYN 报文的话，这会让服务器花费很多时间、内存空间来接收这些报文。\n也就是说，第一次握手可以放数据的话，其中一个简单的原因就是会让服务器更加容易受到攻击了。\n而对于第三次的话，此时客户端已经处于 established 状态，也就是说，对于客户端来说，他已经建立起连接了，并且也已经知道服务器的接收、发送能力是正常的了，所以能携带数据页没啥毛病。")]),_._v(" "),t("h1",{attrs:{id:"四次挥手"}},[_._v("四次挥手 "),t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[_._v("#")])]),_._v(" "),t("p",[_._v("刚开始双方都处于 establised 状态，假如是客户端先发起关闭请求，则：")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("第一次挥手")]),_._v("：客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于 FIN_WAIT1 状态。")]),_._v(" "),t("p",[t("strong",[_._v("第二次挥手")]),_._v("：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文的序列号值")]),_._v(" "),t("p",[_._v("​\t\t\t\t\t   表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT 状态。")]),_._v(" "),t("p",[t("strong",[_._v("第三次挥手")]),_._v("：如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号。此时服务端处于 LAST_ACK 的状态。")]),_._v(" "),t("p",[t("strong",[_._v("第四次挥手")]),_._v("：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答")]),_._v(" "),t("p",[_._v("​\t\t\t\t\t   且把服务端的序列号值 +1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT 状态。")]),_._v(" "),t("p",[_._v("​\t\t\t\t\t   需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态")]),_._v(" "),t("p",[_._v("​\t\t\t\t\t   服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态。")])]),_._v(" "),t("p",[t("strong",[_._v("这里特别需要注意的是 TIME_WAIT 这个状态，为什么客户端发送 ACK 之后不直接关闭，而是要等一阵子才关闭？")])]),_._v(" "),t("p",[_._v("因为要确保服务器是否已经收到了我们的 ACK 报文，如果没有收到的话，服务器会重新发 FIN 报文给客户端")]),_._v(" "),t("p",[_._v("客户端再次收到 ACK 报文之后，就知道之前的 ACK 报文丢失了，然后再次发送 ACK 报文。")]),_._v(" "),t("p",[_._v("至于 TIME_WAIT 持续的时间至少是一个报文的来回时间。")]),_._v(" "),t("p",[_._v("一般会设置一个计时，如果过了这个计时没有再次收到 FIN 报文，则代表对方成功，就是 ACK 报文，此时处于 CLOSED 状态。")]),_._v(" "),t("p",[t("strong",[_._v("每个状态所包含的含义")]),_._v("：")]),_._v(" "),t("blockquote",[t("p",[_._v("LISTEN：侦听来自远方 TCP 端口的连接请求。")]),_._v(" "),t("p",[_._v("SYN-SENT：在发送连接请求后等待匹配的连接请求。")]),_._v(" "),t("p",[_._v("SYN-RECEIVED：在收到和发送一个连接请求后等待对连接请求的确认。")]),_._v(" "),t("p",[_._v("ESTABLISHED：代表一个打开的连接，数据可以传送给用户。")]),_._v(" "),t("p",[_._v("FIN-WAIT-1：等待远程 TCP 的连接中断请求，或先前的连接中断请求的确认。")]),_._v(" "),t("p",[_._v("FIN-WAIT-2：从远程 TCP 等待连接中断请求。")]),_._v(" "),t("p",[_._v("CLOSE-WAIT：等待从本地用户发来的连接中断请求。")]),_._v(" "),t("p",[_._v("CLOSING：等待远程 TCP 对连接中断的确认。")]),_._v(" "),t("p",[_._v("LAST-ACK：等待原来发向远程 TCP 的连接中断请求的确认。")]),_._v(" "),t("p",[_._v("TIME-WAIT：等待足够的时间以确保远程 TCP 接收到连接中断请求的确认。")]),_._v(" "),t("p",[_._v("CLOSED：没有任何连接状态。")])])])}),[],!1,null,null,null);v.default=p.exports}}]);