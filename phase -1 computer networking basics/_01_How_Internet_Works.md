📒 Episode 1 – Internet Basics (Detailed Notes + Interview Prep).
-----------------------------------------------------------------------------------------
1. History of Web (Web 1.0 → Web 3.0)
🔹 Web 1.0 (1990s – early 2000s)
 * Sirf static HTML pages hote the.
 * User sirf content dekh sakta tha, interact nahi kar sakta.

Example: Early news sites, Yahoo directory.

Characteristics:

* Read-only web.
* Limited content updates.
* No user accounts or logins.
-----------------------------------------------------------------------------------------
🔹 Web 2.0 (2004 – Present)

 * Internet zyada interactive ho gaya.
 * Users ab content create/share kar sakte hain.

Example: Facebook, YouTube, Wikipedia.

Characteristics:

* Read-write web.
* Dynamic content.
* Social media, blogs, e-commerce.
-----------------------------------------------------------------------------------------
🔹 Web 3.0 (Emerging Future)

* Decentralized web → Blockchain & peer-to-peer network.
* Data ownership users ke pass hota hai (no single company control).
* AI + ML ka use to make smart decisions

Example: Decentralized apps (dApps), Crypto wallets, Ethereum.

Characteristics:

* Read-write-execute web.
* Decentralization, security, transparency.
=========================================================================================
2. How Computers Communicate ===>>

* Communication ke liye Protocols (set of rules) use hote hain.
* Internet ka foundation = TCP/IP Protocol Suite

TCP (Transmission Control Protocol)

* Data ko chhote packets me todta hai.
* Packets me header info hoti hai (source, destination, order).
* Receiver side pe packets correct order me assemble hote hain.
-----------------------------------------------------------------------------------------
IP (Internet Protocol)

* Har device ka ek unique IP address hota hai (like phone number).
* IP ka kaam hai data ko correct destination tak bhejna.

💡 Example:
Tumhare ghar ka address (IP) + courier packet ke andar items properly arranged (TCP).
=========================================================================================
3. How Data Travels in the Internet

* Tum apne browser me youtube.com likhte ho.
* Browser DNS se uska IP address leta hai.
* Data packets me todkar network pe bheja jata hai.
* Packets routers & switches ke through travel karte hain.
-----------------------------------------------------------------------------------------
* Router: packet ko best path deta hai.
* Switch: ek hi network me devices ko connect karta hai.
* Server packets receive karta hai → dobara assemble karta hai → response bhejta hai.
* Browser us response ko HTML, CSS, JS ke form me render karta hai.
=========================================================================================
4. Domain Name, IP & MAC Address
🔹 IP Address

* Internet Protocol address.
* Har device/server ka unique number.

Types:

* IPv4: 192.168.0.1 (32-bit, limited ~4 billion).
* IPv6: 2400:cb00:2048:1::c629:d7a2 (128-bit, trillions of devices).
-----------------------------------------------------------------------------------------
🔹 Domain Name

* Human-friendly name jo IP ko represent karta hai.
* Example: google.com → 142.250.183.206
* Managed by DNS (Domain Name System).
-----------------------------------------------------------------------------------------
🔹 MAC Address

* Media Access Control address.
* Har device ka permanent hardware ID (network card pe likha hota hai).
* Format: 00:1B:44:11:3A:B7
* Local network me device identify karne ke liye use hota hai.
-----------------------------------------------------------------------------------------
💡 Analogy:

* Domain: Contact name ("Mom").
* IP: Phone number.
* MAC: SIM card ka unique serial number.
=========================================================================================
5. ISP & DNS
🔹 ISP (Internet Service Provider)

* Company jo tumhe internet access deti hai.
* Example: Jio, Airtel, BSNL.
* ISP tumhe ek IP address assign karta hai.
-----------------------------------------------------------------------------------------
🔹 DNS (Domain Name System)

* DNS = “Phonebook of the Internet”.
* Domain ko uske actual IP me convert karta hai.

* Flow:

* Browser: “Mujhe facebook.com ka IP chahiye.”
* DNS: “Ye lo IP: 157.240.22.35.”
* ISP tumhe us server se connect kara deta hai.
* Server response bhejta hai → tumhe Facebook open hota dikhta hai.
=========================================================================================
🎯 Interview-Oriented Q&A
-----------------------------------------------------------------------------------------
Q1. What is the difference between Web 1.0, Web 2.0, and Web 3.0?

Answer:

* Web 1.0: Static, read-only web pages with no user interaction.
* Web 2.0: Interactive and dynamic web where users can create and share content (social  media, blogs).
* Web 3.0: Decentralized and intelligent web, powered by blockchain and AI, where users own their data.
-----------------------------------------------------------------------------------------
Q2. How does data travel across the Internet?

Answer:
Data is broken into small units called packets. These packets travel through routers and switches, taking the best available path. At the destination, the TCP/IP protocol reassembles them in the correct order and delivers them to the application.
-----------------------------------------------------------------------------------------
Q3. What is the difference between an IP address and a Domain Name?
Answer:

* An IP address is a unique numerical identifier assigned to every device on the Internet.
* A Domain Name is a human-readable label (e.g., google.com) mapped to an IP address.
* The DNS (Domain Name System) translates domain names into IP addresses.
-----------------------------------------------------------------------------------------
Q4. What is a MAC Address?

Answer:
A MAC (Media Access Control) address is a unique hardware identifier embedded in the network card of a device. Unlike IP addresses, MAC addresses are permanent and are mainly used for identification within a local network.
-----------------------------------------------------------------------------------------
Q5. What is the role of an ISP?

Answer:
An ISP (Internet Service Provider) is a company that provides Internet access to users. It assigns an IP address to your device and connects you to the global Internet. Examples include Jio, Airtel, and Comcast.
-----------------------------------------------------------------------------------------
Q6. What is DNS and why is it important?

Answer:
DNS (Domain Name System) is like the phonebook of the Internet. It converts human-friendly domain names (like amazon.com) into IP addresses that computers understand. Without DNS, users would need to remember long numerical IP addresses.
-----------------------------------------------------------------------------------------
Q7. What is the difference between IPv4 and IPv6?

Answer:

* IPv4: 32-bit addressing, allows ~4.3 billion unique addresses (e.g., 192.168.1.1).
* IPv6: 128-bit addressing, allows trillions of unique addresses (e.g., 2400:cb00:2048:1::c629:d7a2).
* IPv6 was introduced to solve the shortage of IPv4 addresses.
========================================================================================
