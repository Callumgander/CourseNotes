# Intro to Cybersecurity

## Networking

### Network Communication Model

What are the three components of networking?

- medium, addressing and content

#### Addressing

What do you use to uniquely identify a device on a network? 
- an IP address

How many IP standards are in use? 
- 2, IPv4 and IPv6

#### Addressing and Networks

What is an IPv4 address?
- a 32-bit address 123.123.123.20, e.g. 192.168.112.20
- 2^32 = 4,294,967,296 IP addresses, less than the number of people on the planet today

What pink squares are reserved? 
- 0, 10, and 127
Are blue squares reserved? 
- Partially, for example, not all of the 192 block is reserved but some is
What is the green row set aside for? 
- IP Multicast
What is the orange row set aside for?
- originally, it was set aside for "future use" but was effectively lsot due to being blocked as invalid

Extra Resources
- additional resources
- https://tools.ietf.org/html/rfc1918
- https://tools.ietf.org/html/rfc6890
- https://en.wikipedia.org/wiki/IPv4_address_exhaustion
- 192.168.112.11/24 ipaddress/size of the network, so on a /24 network there are 256 unique host addresses

What is classless interdomain routing? 
- the format where you add the size of the network, called the subnet mask, onto the IP address, e.g. 192.168.112.11/24 

How is a subnet mask useful? 
- to figure out what network a device is on, you can use the IP address, write it in binary, then write the subnet mask in binary. Take the logical AND operator find the netblock address

Are routers used for devices on the same network? 
- no

Resources
- convert ip to binary https://www.browserling.com/tools/ip-to-bin
- convert binary to ip https://www.browserling.com/tools/bin-to-ip
- https://en.wikipedia.org/wiki/Subnetwork
- https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing
- https://tools.ietf.org/html/rfc1878
- https://tools.ietf.org/html/rfc5942
- https://www.rfc-editor.org/rfc/rfc1519.txt

## OSI Model

What do we call the set of procedures used to standardize communication across a network?

- Protocols

What is the OSI model?

- Open Systems Interconnection
- It's a conceptual mode for a network system to handle communication; it's not a concrete example of how network communication happens
- Allows interoperability between different manufacturers, devices, etc.

How many layers are there in the OSI model?

- 7

What are the 7 layers of the OSI model?

- from 7 to 1: Application, Presentation, Session, Transport, Network, Data Link, Physical

What protocol is associated with Layer 7?
- HTTP

What protocols is associated with Layer 6?
- SSL and TLS

What protocol is associated with Layer 5?
- socket

What protocols is associated with Layer 4?
- TCP and UDP

What protocols is associated with Layer 3?
- IP and ICMP

What protocol is associated with Layer 2?
- ARP

What protocols is associated with Layer 1?

- 1000BASE-T, DSL, DOCSIS, 802.11a/b/g/n

How do layers relate to each other in the OSI model?

- Sibling Dependence, a layer is only concerned with the layers above and below it
- A single layer does not need to know the whole path that data takes through the OSI model. Each layer in the OSI model is an abstraction layer

What is encapsulation?

- the process of data moving down the OSI model
- When the data moves from a higher layer to a lower layer, the data is wrapped in new information called a "header" and a "footer"

What is decapsulation?

- The process of data moving up the OSI model

## Switching

What is a network switch?

- A device that connects devices on a network by using packet switching to receive and forward data to the destination device

What does a network switch use to forward data at the data link layer (layer 2)?

- MAC Addresses

## Routing

What do routers do?

- routers faciliate the movement of network traffic between different logical and physical networks
- their core function is deciding where to forward packets to

Honestly, parts of this course are great, but from switching onwards it's just short 1-2 minute videos where they literally cramp as much information in as possible in the most boring, unintuitive way. No point even taking notes for this section because I fully don't understand what they're saying. Will use other resources to learn these topics (switching, frame structure, switching at scale, virtual LANS, routing, wireshark)

## Domain Name System

What is a FQDN?

- A Fully Qualified Domain Name (FQDN) consists of three parts - the hostname, domain, and top-level domain (TLD), [host name].[domain].[tld]
- e.g. for www.udacity.com, www is the hostname, udacity is the domain, and com is the top-level domain

