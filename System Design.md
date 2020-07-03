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
- 