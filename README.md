# 💬 WhatsApp Lite – CRUD Messaging Web App

A minimal server-rendered web application built with **Node.js**, **Express.js**, and **MongoDB**. This project replicates core messaging features of WhatsApp using CRUD operations (Create, Read, Update, Delete) via RESTful routing and a clean MVC pattern. Designed for local use and educational purposes.

---

## 🚀 Features

- 📥 Create messages (sender → receiver)
- 📃 View all messages with timestamps
- ✏️ Edit/update messages
- ❌ Delete messages
- 🗃️ MongoDB as the NoSQL backend database
- 🖼️ Views rendered with **EJS** templates

---

## 🧱 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Backend     | Node.js, Express.js    |
| Database    | MongoDB (Mongoose ODM) |
| Frontend    | HTML + EJS Templates   |
| Middleware  | Method-Override, Express Parser |
| Styling     | Basic CSS (public/)    |
| Port        | `http://localhost:8080`|

---

## 🛠 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/whatsapp-lite-crud-app.git
cd whatsapp-lite-crud-app
```

### 2. Install Node Dependencies

```bash
npm install
```

### 3. Run MongoDB

Make sure MongoDB is running locally (on default port `27017`):

```bash
mongod
```

### 4. Seed Initial Chat Data *(optional)*

```bash
node seed.js
```

### 5. Start the Express Server

```bash
node app.js
```

Then open:

```
http://localhost:8080/chats
```

---

## 🗂 Directory Structure

```
whatsapp-lite-crud-app/
├── models/
│   └── chat.js           # Mongoose chat schema
├── views/
│   ├── index.ejs         # List all chats
│   ├── new.ejs           # Create a new message
│   └── edit.ejs          # Edit an existing message
├── public/               # CSS and static assets
├── app.js                # Main server file
├── seed.js               # Populate sample messages
└── README.md             # Project documentation
```

---

## ⚙️ Core MongoDB Operations (via Mongoose)

- `Chat.find()` — Get all messages  
- `Chat.findByIdAndUpdate()` — Edit message  
- `Chat.findByIdAndDelete()` — Delete message  
- `Chat.insertMany()` — Seed dummy data

All MongoDB operations are handled using the **Mongoose** ORM for schema validation and async queries.

---

## 📈 Future Improvements

- Socket.IO integration for real-time chat
- Authentication and user session management
- REST API endpoints for frontend frameworks
- Styling with TailwindCSS or Bootstrap
- Chat group/channel functionality

---

## 👨‍💻 Author

**Shubham Kalwar**  
🔗 [LinkedIn](https://www.linkedin.com/in/shubham-kalwar-b74145339)  
📬 Contact: _[add your GitHub or email here]_

---

## 📜 License

This project is licensed under the **MIT License**.
