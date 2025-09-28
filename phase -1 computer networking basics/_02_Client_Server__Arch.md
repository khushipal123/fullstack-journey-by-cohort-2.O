==========================================================================================
📒 Episode 2 – Client-Server Architecture (Detailed Notes)
------------------------------------------------------------------------------------------
1. What is Client-Server Model?

* A Client requests data or services. Example: Your browser.
* A Server provides data or services. Example: The computer where your website is hosted.
* Communication happens over the Internet using protocols like HTTP/HTTPS.

Analogy: Customer (client) orders food → Restaurant (server) provides food.
------------------------------------------------------------------------------------------
2. Difference between Client (Browser) and Server

Client (Browser):

* Runs on user’s device.
* Sends request to the server.
* Displays data (HTML, CSS, JS).
------------------------------------------------------------------------------------------
Server:

* A computer that stores website files and databases.
* Listens for client requests.
* Processes and sends back responses.
------------------------------------------------------------------------------------------
3. How HTTP Request & Response Cycle Works

* Client (browser) sends an HTTP request to server.
* Server receives it, processes it (fetching files/data).
* Server sends an HTTP response (HTML/CSS/JS or JSON).
* Browser renders the response for the user.
💡 Example:

* Request: GET /index.html
* Response: 200 OK + HTML content.
------------------------------------------------------------------------------------------
4. What happens when you visit a website?

* You type example.com in the browser.
* DNS converts domain name into IP address.
* Browser sends HTTP/HTTPS request to that IP (server).
* Server finds requested page/file and sends response.
* Browser renders HTML → applies CSS → runs JS → shows complete page.
------------------------------------------------------------------------------------------
5. Difference between Frontend & Backend

Frontend (Client-Side):
* Visible part of the website (UI).
* Built using HTML, CSS, JavaScript, React, etc.
------------------------------------------------------------------------------------------
Backend (Server-Side):
* Behind-the-scenes logic and database.
* Built using Node.js, Express, Python, Java, PHP, etc.

💡 Analogy:
Frontend = Restaurant Menu + Decor
Backend = Kitchen + Chef + Ingredients
------------------------------------------------------------------------------------------
6. Static vs Dynamic Websites

Static Website:
* Same content for all users.
* Built with HTML, CSS only.
* Example: Personal portfolio site.
------------------------------------------------------------------------------------------
Dynamic Website:
* Content changes based on user or database.
* Requires backend + database.
* Example: Facebook, Amazon.
------------------------------------------------------------------------------------------
What is Web Hosting & How it Works

* Web Hosting: Service that stores your website’s files on a server connected to the Internet.
* When users type your domain, the hosting server delivers your files to their browser.

* Types of Hosting:

* Shared Hosting (cheap, multiple sites on one server).
* VPS Hosting (virtual private server).
* Cloud Hosting (scalable, like AWS, GCP).
=========================================================================================
🎯 Interview Q&A (English)
------------------------------------------------------------------------------------------
Q1. What is the Client-Server Model?

Answer:
The client-server model is a communication system where a client (browser) requests data or services, and a server provides the requested data. Example: Browser requests a webpage, server responds with HTML/CSS/JS files.
------------------------------------------------------------------------------------------
Q2. What is the difference between a Client and a Server?

Answer:
* A Client is the user-side application (like a browser) that requests data.
* A Server is a machine that processes these requests and sends back data.
------------------------------------------------------------------------------------------
Q3. Explain the HTTP Request-Response Cycle.

Answer:
* The browser sends an HTTP request to the server.
* The server processes it and prepares a response.
* The server sends the HTTP response (status code + data).
* The browser renders the response for the user.
------------------------------------------------------------------------------------------

Q4. What happens when you type a URL in the browser?

Answer:
* The domain is converted into an IP by DNS.
* Browser sends an HTTP/HTTPS request to that IP.
* The server processes the request and returns a response.
* Browser renders the content (HTML, CSS, JS).
------------------------------------------------------------------------------------------
Q5. What is the difference between Frontend and Backend?

Answer:
* Frontend: The part of the website the user sees and interacts with (HTML, CSS, JS).
* Backend: The server-side logic and database that process requests and deliver data.
------------------------------------------------------------------------------------------
Q6. What is the difference between Static and Dynamic Websites?

Answer:
* Static websites serve the same content to all users.
* Dynamic websites serve different content depending on user interactions or database  queries.
------------------------------------------------------------------------------------------
Q7. What is Web Hosting?

Answer:
Web hosting is a service where website files are stored on a server connected to the Internet, making them accessible to users worldwide when they type the domain name.
------------------------------------------------------------------------------------------