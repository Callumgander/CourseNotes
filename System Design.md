# System Design Fundamentals

## Client-server model

What is the client?
- A machine or process that requests data or a service from a server

What is the server?
- A machine or process that provides data or a service for a client, usually by listening for incoming network calls
- Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database

## Network Protocols

What is a protocol?
- an agreed upon set of rules for an interaction between two parties

What is IP?
- Stands for Internet Protocol. This network protocol outlines how almost all machine-to-machine communications should happen in the world. Other protocols like TCP, UDP and HTTP are built on top of IP

What is an IP Packet?
- Sometimes more broadly referred to as just a (network) packet, an IP packet is effectively the smallest unit used to describe data being sent over IP, aside from bytes. An IP packet consists of:
- An IP header, which contains the source and destination IP addresses as well as other information related to the network, between 20 and 60 bytes
- A payload, which is just the data being sent over the network, about 2^16 bytes at most

What is TCP?
- Transmission Control Protocol, a network protocol built on top of the Internet Protocol (IP). Allows for ordered, reliable data delivery between machines over the public internet by creating a connection
- TCP is usually implemented in the kernel, which exposes sockets to applications that they can use to stream data through an open connection

What is a TCP handshake?
- a special TCP interaction where one computer sends packets to another computer, requesting connection, then the client re-responses saying we have a connection

What is HTTP?
- HyperText Transfer Protocol, very common network protocol implemented on top of TCP. Clients make HTTP requests, and servers respond with a response

What is a typical request schema for HTTP?
- host: string (e.g. algoexpert.io)
- port: integer (e.g. 80 or 443)
- method: string (e.g. GET, PUT, POST, etc.)
- path: string (e.g. '/payment')
- headers: pair list (e.g. "content-type" => "application/json")
- body: opaque sequence of bytes

What is a typical response schema for HTTP?
- status code: integer (e.g. 200, 401)
- headers: pair list (e.g. "content-length" => 1238)
- body: opaque sequence of bytes

What is the curl command used for?
- curl is used in command lines or scripts to transfer data. It is also used in cars, TV sets, routers, printers, audio equipment, mobile phones, etc., and is the internet transfer backbone for thousands of software applications affecting billions of humans daily
- supports tons of different transfer protocols: HTTP, HTTPS, FTP, etc.

## Storage

What is a database?
- Databases are programs that either use disk or memory to do 2 core things: record data and query data. In general, they are themselves servers that are long lived and interact with the rest of your application through network calls, with protocols on top of TCP or even HTTP

What is a storage on Disk?
- Usually refers to either HDD (hard-disk drive) or SSD(solid-state drive). Data written to disk will persist through power failures and general machine crashes. Disk is also referred to disk will persist through power failures and general machine crashes. Disk is also referred to as non-volatile storage 
- SSD is far faster than HDD but also far more expensive from a financial point of view. Because of that, HDD will typically be used for data that's rarely accessed or updated, but that's stored for a long time, and SSD will be used for data that's frequently accessed and updated

What is storage in Memory? 
- Short for Random Access Memory (RAM). Data stored in memory will be lost when the process that has written that data dies

What is persistent storage?
- usually refers to disk, but in geeneral it is any form of storoage that persists if the process in charge of managing it dies

## Latency and Throughput

What is Latency?
- The time it takes for a certain operation to complete in a system. Most often this measure is a time duration, like milliseconds or seconds

What is Throughput?
- The number of operations that a system can handle properly per time unit. For instance, the throughput of a server can often be measured in requests per second (RPS or QPS)

## Avaliability

What is a process?
- a program that is currently running on a machine. You should always assume that any process may get terminated at any time in a sufficiently large system

What is a node/instance/host?
- these three terms refer to the same thing most of the time: a virtual or physical machine on which the developer runs processes. Sometimes the word server also refers to this same concept

What is Availability?
- The odds of a particular server or service being up and running at any point in time, usually measured in percentages

What are Nines?
- Typically reefers to percentages of uptime. For example, 5 nines of availability means an uptime of 99.999% of the time

What is High Availability?
- Used to describe systems that have particularly high levels of availability, typically 5 nines of more

What is Redundancy?
- The process of replicating parts of a system in an effort to make it more reliable

What is a SLA?
- Short for "service-level agreement", an SLA is a collection of guarantees given to a customer by a service provider. SLAs typically make guarantees on a system's availability, amongst other things. SLAs are made up of one or multiple SLOs

What is SLO?
- Short for "service-level objective", an SLO is a guaranteee given to a customer by a service provider. SLOs typically make guarantees on a system's availability, amongst other things. SLOs constitute an SLA

## Caching

What is a cache?
- A piece of hardware or software that stores data, typically meant to retrieve that data faster than otherwise
- Caches are often used to store responses to network requests as well as results of computationally-long operations
- Note that data in a cache can become stale if the main source of truth for that data (i.e., the main database behind the cache) gets updated and the cache doesn't

What is a cache hit?
- when requested data is found in a cache

What is a cache miss?
- When requested data could have been found in a cache but isn't. This is typically used to refer to a negative consequence of a system failure or of a poor design choice

What is a Cache Eviction Policy?
- The policy by which values get evicted or removed from a cache. Popular cache eviction policies include LRU (least-recently used), FIFO (first in first out), and LFU (least-frequently used)

What is a Content Delivery Network?
- A CDN is a third-party service that acts like a cache for your servers. Sometimes, web applications can be slow for users in particular region if your servers are located only in another region. A CDN has servers all around the world, meaning that the latency to a CDN's servers will almost always be far better than the latency to your servers. A CDN's servers are often referred to as PoPs (Points of Presence). Two of the most popular CDNs are Cloudflare and Google Cloud CDN

## Proxies

What is a Forward Proxy?
- A server that sits between a client and servers and acts on behalf of the client, typically used to mask the client's identity (IP address). Note that forward proxies are often referred to as just proxies

What is a Reverse Proxy?
- A server that sits between clients and servers and acts on behalf of thee servers, typically used for logging, load balancing, or caching

## Load Balancers

What is a Load Balancer?
- a type of reverse that distributes traffic across servers. Load balancers can be found in many parts of a system, from the DNS layer all the way to the database layer

What is the Server-Selection Strategy?
- How a load balancer chooses servers when distributing traffic amongst multiple servers. Commnly used strategies include round-robin, random selection, performance-based selection (choosing the server with the best performance metrics, like the fastest response time or the least amount of traffic), and IP-based routing

What is a Hot Spot?
- When distributing a workload across a set of servers, that workload might be spread unevenly. This can happen if your sharding key or your hashing function are suboptimal, or if your workload is naturally skewed: some servers will receive a lot more traffic than others, thus creating a "hot spot"

