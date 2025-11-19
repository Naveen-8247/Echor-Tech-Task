# 🌐 Echor Tech — Transform API

A clean and beginner-friendly **Node.js Express API** built for the Echor Tech assignment.  
This API takes a sentence and returns:

- ✅ Total word count  
- ✅ Unique words list  
- ✅ Reversed sentence  

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

* **Node.js** (version 18 or higher recommended)
* **npm** (comes bundled with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd [YOUR_REPO_NAME]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the server:**
    ```bash
    node server.js
    ```
    The server will run at: `http://localhost:5000`

---

## 📌 Endpoint

### `POST /api/transform`

* **Description:** Processes the input sentence to calculate word statistics and reverse the sentence.
* **Method:** `POST`
* **URL:** `/api/transform`
* **Content-Type:** `application/json`

---

## 📥 Request Body (Input)

| Key | Type | Description |
| :--- | :--- | :--- |
| `sentence` | `string` | The text sentence to be transformed. |

```json
{
  "sentence": "I love working with JavaScript and Node.js"
}
📤 Response Body (Output)
Key	Type	Description
word_count	number	The total number of words in the sentence.
unique_words	string[]	A list of unique words (case-insensitive and cleaned of punctuation).
reversed_sentence	string	The sentence with the word order reversed.

Export to Sheets

JSON

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
💻 Example Usage (using curl)
Bash

curl -X POST \
  http://localhost:5000/api/transform \
  -H 'Content-Type: application/json' \
  -d '{"sentence": "Hello world, how are you?"}'
🛠️ Built With
Node.js — JavaScript runtime environment

Express — Web framework for Node.js

