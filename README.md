````markdown
# 📰 NewsGO – Realtime News Fetcher using NewsData.io API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> 🔗 **Project Link:** [https://github.com/Govardhan-018/NewsGO/tree/main](https://github.com/Govardhan-018/NewsGO/tree/main)

---

## 🚀 About the Project

**NewsGO** is a simple yet powerful Node.js-based backend service that fetches real-time news from the [NewsData.io](https://newsdata.io/) API. It supports search by keyword, language, country, and category — perfect for integrating into dashboards, mobile apps, or personal research tools.

---

## ✨ Features

- 🔍 Search for news articles by keyword
- 🌐 Filter news by country (`in`, `us`, etc.)
- 🗣️ Multi-language support (e.g., Kannada, Hindi, English)
- 🧠 Filter by category (Technology, Sports, Health, etc.)
- 📆 Filter by date (from / to)
- 🔐 Environment variable-based API key management
- 📦 Clean and RESTful API endpoints

---

## 🛠️ Built With

- **Node.js**
- **Express.js**
- **Axios**
- **Dotenv**
- [NewsData.io API](https://newsdata.io/)

---

## 📦 Installation

```bash
git clone https://github.com/Govardhan-018/NewsGO.git
cd NewsGO
npm install
````

---

## ⚙️ Configuration

Create a `.env` file in the root directory and add your API key:

```
API_KEY=your_newsdata_api_key_here
PORT=5000
```

---

## ▶️ Usage

Start the server:

```bash
npm start
```

Then access the API via:

```
http://localhost:5000/news?country=in&language=en&category=technology&q=agriculture
```

---

## 🧪 Sample Query Parameters

| Parameter   | Description               | Example       |
| ----------- | ------------------------- | ------------- |
| `country`   | Country code (ISO-2)      | `in`          |
| `language`  | Language code (ISO-639-1) | `kn`, `en`    |
| `category`  | News category             | `technology`  |
| `q`         | Keyword for search        | `agriculture` |
| `from_date` | Start date (`yyyy-mm-dd`) | `2024-06-01`  |
| `to_date`   | End date (`yyyy-mm-dd`)   | `2024-06-30`  |

---

## 📁 Folder Structure

```
NewsGO/
├── backend
│      └── node_modules/
│      └── index.js
│      └── package.json
├── frontend/
│    └── index1.js
│    └── index2.js
│    └── home.html
│    └── style.css
├── .gitignore
├── index.html
└── README.md
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

Made with 💡 by **Govardhan Hegde**
🔗 [GitHub: Govardhan-018](https://github.com/Govardhan-018)

---

