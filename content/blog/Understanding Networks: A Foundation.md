network is an important part of our modern world and modern life.
whether you use your phone to access your home control or liking some one's post on instagram, you're using networks and your phone talks to instagram.   

there are two main types of network protocol
- osi
- TCP/IP

### Layering
Before we go any further it's important to know what is "network layer".
Layering is a technique used in computer programming to divide a complex problem or system into smaller and more manageable parts.
In this way we abstract the under layers to focus and work or use an upper layer.
As an example:
Consider we want to transfer files and images from the source (consider in city A) to the destination (in another city: B). for better understanding you want to download a video. 
It really doesn't matter whether you use your phone and sim-card to access the internet or your provider use fiber-optic cable or not.
Of course it effect on your download speed but it does matter on its own layer.

### TCP/IP

The TCP/IP model refers to the Transmission Control Protocol/[Internet Protocol](https://www.simplilearn.com/understanding-ipsec-rar37-article "Internet Protocol") Model. This model is a part of the network domain designed specifically for overseeing efficient and error-free transmission of data.

The model works on a four-layered architecture model, where each layer implicit the required network protocols on the data to be transmitted, which remodels the data to the most optimum structure for efficient transmission over the network.

TCP/IP layers from bottom to top are :
- network access
- internet layer
- transport layer
- application layer

### The History of TCP/IP

The Internet Protocol Suite, or TCP/IP for short, is the set of protocols that make up the network layer of the Internet.

- TCP/IP was developed during the Cold War as a way for the U.S. Department of Defense to connect computers within their networks and with each other across national boundaries. It's been used since the late 1960s when it was formalized by DARPA and later adopted by government agencies and universities worldwide as a common networking standard.
- The first version of TCP/IP was ARPANET (1975), which stands for Advanced Research Projects Administration Network. The name changed to TCP/IP in 1983, when it became an open standard that could be used on any network. 
- To give researchers access to each other's equipment, they needed to send messages quickly over long distances without having them re-transmitted by any intermediate nodes along the way. This necessity led to the development of the [Transmission Control Protocol (TCP)](https://www.simplilearn.com/differences-between-tcp-vs-udp-article "Transmission Control Protocol (TCP)") and Internet Protocol (IP). These protocols were intended for machine-to-machine connections, such as between computers over local area networks or wide-area networks. 

## OSI Model

The OSI model (Open Systems Interconnection) is a seven-layer model that divides the complexity of network communications into seven smaller, more manageable parts, each responsible for a different aspect of the communication process.

The seven layers of the OSI model are:

- Physical layer,
- Data link layer,
- Network layer,
- Transport layer. 
- Session layer,
- Presentation layer,
- Application layer.
"from bottom to top"

Each OSI model layer is responsible for a different aspect of the communication process


### Physical layer
It's the first and lowest layer of OSI. This layer's function is to transfer zeros and ones use cables, wireless, electricity and ...
I have nothing more to say about this layer
as always you have some choices and situations and you choose the best way and product
using fiber-optic or a simple RJ-45 cable 

### Data Link

Thank to physical layer now computers can be connected to each other. we don't care if there are connected using cables, wireless connection or etc. Now they have to talk to each other, but how ? 
consider 2 person talking to each other at the same time. non of them understand the others words. this is what we call collision. in this example one can wait and the other talks, but what about a 10 person meeting? can we have the exact approach or solution from 2-person example?? of course not, we can have another solution like hand raising or microphone in front of each person.

as you see, different approach for different situations.

layer-2 switches and mac address are two device and concept in this layer.
each device and network card has a unique mac address (how? ask IEEE)
and a switch is a hub that understand mac address, and has a table of which mac-addr is connected to which port.
if you connect 5 devices to one switch, when ever dev-1 wants to talk to dev-2 it connects them to each other. dev-3:5 don't notify and they can talk to each other at the same time.

### Network layer
Handles the routing and sending of data between different networks. The most important protocols at this layer are IP and routings.

a network is a group of compute nodes. thanks to previous layer they are connected with a topology and they can talk to each other with out collision. and each one has a mac address.
but to reach the goal that they actually talk they need a logical address. why? 
consider our first example from [Layering](#layering):
the server address is `04:b0:e7:aa:22:90`
how do you want to find this server?? ask every 10 billion device in the world if they are our server??
i don't believe so
going to Taiwan and ask the company, where did they send that network card ?? 
of course not
but with logical address (local or public) you know the server is in country A, city B, and ...

so each computer has a logical address. IP is one of the protocols for addressing compute nodes in a network. like IPv4 and IPv6. each IP contains two main part:
- net id
- host id

net id represents the network that contains that node. and you can check two IP if they are in the same network or not by checking if they have same net-id.

**each node can talk to another node if they are in the same network**

OK, wait a sec. what? in our own example, how we can download from a server??

first:
**Internet is a network of networks**

second:
routers

if you want to talk to a node with another net-id what you do is to ask a router to do so.
if i connect my laptop and my phone to the same network, they can talk to each other with no third node in this layer (switch is in the layer 2).
but i want to talk to a node in another network.
my laptop calculate and understand that this IP is not in my own network, so it sends the request to the router.
router takes the request and sends it to another router.
until my request finds by a router who has the same net-id, so it takes my request and sends it to the destination.

how routers know takes each request to who? out of the scope, go research about dynamic routing


### Transport
this layer is a layer between network concepts and applications' world.
this layer contains ports and transport protocols

now lets take a look at our first example
you go to a website, it serves a web app. and click download and you start downloading a file.
both downloading and web service are from the same IP.
this is were ports and transport protocols comes in.
each IP has several(65,535) ports. and each service is behind one of them and using a protocol.
#### transport protocols
I like to liken transport protocols to natural languages.
if you want to talk to a chinese you speak in chinese.

each transport protocol can be ether connection-less or connection-oriented and reliable or unreliable.
protocols with handshake  are consider as connection oriented.
protocols with reliability are those that you ensure destination has recieved the packet.

two main types of connections are tcp and udp:
- TCP: connection-oriented and reliable
- UDP: connection-less and not reliable

**Notice**: TCP and UDP are not protocols themselves. they are types of protocols

a reliable connection-oriented example (TCP) :
```
+hi
-hi
+i want to send a packet
-i listen
+packet
-i resived
+bye
-bye
```
and unreliable connection-less(UDP) :
```
+packet
```

some well known protocols:
- HTTP
- FTP
- SMTP
- HLS
- MPEG-DASH
-  etc ...

now lets take another look at our example
you go to a website, it serves a web app with HTTP/HTTPS. you click watch streaming this time, and you start watching a video using a UDP based protocol.

both streaming and web service are from the same IP.\
but how 
and there are some standard port numbering, like 
- HTTP: 80
- FTP(file transfer protocol): 21
- SMTP (for mail): 25
- etc ...
what does it mean is you use a port and transfer protocol  for your service but you've better use this standard. our web browser knows if you say go to http://youtube.com it should use port 80 or port 443 for https://youtube.com, witch is equivalent to http://youtube.com:80 and https://youtube.com:443, respectively.

## Conclusion
this was a brief introduction about network an how it works. i'll write about each topic and solutions of each in more details later. but now for more information you can use [Cloudflare learning center](https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/) or wikipedia. however they aren't the source of this text.
 you can read about DNS if you want to understand how we talk to IP a server but using domain names like www.google.com.

thanks.