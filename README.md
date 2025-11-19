# 🌐 Echor Tech — Transform API

A clean and beginner-friendly **Node.js Express API** built for the Echor Tech assignment.  
This API takes a sentence and returns:

- ✅ Total word count  
- ✅ Unique words list  
- ✅ Reversed sentence  

---

## 📌 Endpoint

### POST `/api/transform`

---

## 📥 Input

```json
{
  "sentence": "I love working with JavaScript and Node.js"
}
📥 Output
json
Copy code
{
  "word_count": 7,
  "unique_words": [
    "i",
    "love",
    "working",
    "with",
    "javascript",
    "and",
    "node.js"
  ],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}
▶ How to Run Locally
bash
Copy code
npm install
node server.js
Server runs at:

arduino
Copy code
http://localhost:5000
