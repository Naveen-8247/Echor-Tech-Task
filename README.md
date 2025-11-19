# 🚀 Echor Tech Transform API

A simple Node.js Express API built as part of the Echor Tech task.

## 📌 Endpoint

### POST `/api/transform`

---

## 📥 Input

```json
{
  "sentence": "I love working with JavaScript and Node.js"
}

📤 Output
{
  "word_count": 7,
  "unique_words": ["i", "love", "working", "with", "javascript", "and", "node.js"],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}

▶ How to Run Locally
npm install
node server.js


Server will start at:

http://localhost:5000
