📒 Episode 3 – Internet Protocols (Detailed Notes)
-----------------------------------------------------------------------------------------
1. What is TCP Protocol and Why is it Widely Used?

TCP (Transmission Control Protocol) is a connection-oriented protocol.

* It ensures:
* Reliable data transfer (no data loss).
* Error checking and correction.
* Packets delivered in correct order.
-----------------------------------------------------------------------------------------
Widely used in:

* Web browsing (HTTP/HTTPS).
* Email (SMTP, IMAP, POP3).
* File transfers (FTP).
-----------------------------------------------------------------------------------------
How Connection is Established Using TCP (3-Way Handshake)

TCP uses a 3-step process to establish a connection between client and server:

* SYN: Client → Server (request to start connection).
* SYN-ACK: Server → Client (acknowledges and agrees).
* ACK: Client → Server (final confirmation).

💡 After this, data transfer begins.
Analogy: Like making a phone call → Dial, Receiver picks up, You say “Hello”.
-----------------------------------------------------------------------------------------
3. What is UDP and Why it is Used for Fast Communication?

UDP (User Datagram Protocol) is a connectionless protocol.

Characteristics:

* No handshake, no guarantee of delivery.
* Faster but less reliable than TCP.

Widely used in:

* Online gaming 🎮
* Live streaming 🎥
* Video calls 📞
* DNS lookups
-----------------------------------------------------------------------------------------
4. How UDP Works (Connection Establishment)

* UDP does not establish a formal connection.
* Client just sends data packets (called datagrams) directly.
* If a packet is lost, it is simply ignored (no retransmission).
-----------------------------------------------------------------------------------------
5. Difference between TCP and UDP

Feature	    |  TCP (Transmission Control Protocol)	 | UDP (User Datagram Protocol)
Connection	|  Connection-oriented (3-way handshake) | Connectionless (no handshake)
Reliability	|  Reliable, ensures delivery	         | Unreliable, no guarantee
Speed	    |  Slower (due to checks, retransmits)	 | Faster (less overhead)
Order	    |  Maintains order of packets	         | No order maintained
Use Cases	|  Web, Email, File Transfer             | Gaming, Streaming, VoIP

-----------------------------------------------------------------------------------------
=========================================================================================
🎯 Interview Q&A:
-----------------------------------------------------------------------------------------
Q1. What is TCP and why is it widely used?

Answer:
TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures reliable data transfer, error checking, and correct packet order. It is widely used in web browsing, emails, and file transfers because it guarantees data delivery.
-----------------------------------------------------------------------------------------
Q2. How does TCP establish a connection?

Answer:
TCP uses a 3-way handshake:

1. Client sends a SYN request.
2. Server responds with SYN-ACK.
3. Client sends ACK.
After this handshake, data transfer starts.
-----------------------------------------------------------------------------------------
Q3. What is UDP and why is it used?

Answer:
UDP (User Datagram Protocol) is a connectionless protocol that is faster but less reliable than TCP. It is used in applications where speed is more important than reliability, such as gaming, video calls, and streaming.
-----------------------------------------------------------------------------------------
Q4. How does UDP establish a connection?

Answer:
UDP does not establish a connection. It directly sends datagrams without handshake or confirmation.
-----------------------------------------------------------------------------------------
Q5. What is the difference between TCP and UDP?

Answer:

* TCP is reliable, connection-oriented, and slower.
* UDP is unreliable, connectionless, but much faster.
* TCP is used for web browsing and file transfer, while UDP is used for real-time   communication like gaming and streaming.
-----------------------------------------------------------------------------------------
⚡ Pro Tip:
Interviewers often ask: “Which one will you use for a video call – TCP or UDP, and why?”

👉 Answer: UDP, because speed and real-time delivery are more important than 100% reliability.
-----------------------------------------------------------------------------------------