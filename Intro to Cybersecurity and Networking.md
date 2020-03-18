# Intro to Cybersecurity

## Networking

- What are the three components of networking? medium, addressing and content
- What do you use to uniquely identify a device on a network? an IP address
- How many IP standards are in use? 2, IPv4 and IPv6
- What is an IPv4 address? a 32-bit address 123.123.123.20, e.g. 192.168.112.20
- 2^32 = 4,294,967,296 IP addresses, less than the number of people on the planet today
- What pink squares are reserved? 0, 10, and 127
- Are blue squares reserved? Partially, for example, not all of the 192 block is reserved but some is
- What is the green row set aside for? IP Multicast
- What is the orange row set aside for? originally, it was set aside for "future use" but was effectively lsot due to being blocked as invalid
- additional resources
- https://tools.ietf.org/html/rfc1918
- https://tools.ietf.org/html/rfc6890
- https://en.wikipedia.org/wiki/IPv4_address_exhaustion
- 192.168.112.11/24 ipaddress/size of the network, so on a /24 network there are 256 unique host addresses
- What is classless interdomain routing? the format where you add the size of the network, called the subnet mask, onto the IP address, e.g. 192.168.112.11/24 
- How is a subnet mask useful? to figure out what network a device is on, you can use the IP address, write it in binary, then write the subnet mask in binary. Take the logical AND operator find the netblock address
- Are routers used for devices on the same network? no
- convert ip to binary https://www.browserling.com/tools/ip-to-bin
- convert binary to ip https://www.browserling.com/tools/bin-to-ip
- additional resources
- https://en.wikipedia.org/wiki/Subnetwork
- https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing
- https://tools.ietf.org/html/rfc1878
- https://tools.ietf.org/html/rfc5942
- https://www.rfc-editor.org/rfc/rfc1519.txt
-