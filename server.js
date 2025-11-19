const express = require("express");
const app = express();

app.use(express.json());

// POST API
app.post("/api/transform", function (request, response) {
  const sentence = request.body.sentence;

  // Check if sentence exists
  if (!sentence) {
    return response.status(400).json({ error: "Please send a sentence" });
  }

  // Convert sentence into words
  const words = sentence.split(" ");

  // Count words
  const wordCount = words.length;

  // Unique words (simple method)
  let uniqueWords = [];
  for (let i = 0; i < words.length; i++) {
    const small = words[i].toLowerCase();
    if (uniqueWords.indexOf(small) === -1) {
      uniqueWords.push(small);
    }
  }

  // Reverse sentence (simple loop)
  let reversedSentence = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i];
    if (i > 0) {
      reversedSentence += " ";
    }
  }

  // Send response
  response.json({
    word_count: wordCount,
    unique_words: uniqueWords,
    reversed_sentence: reversedSentence
  });
});

// Server start
app.listen(5000, function () {
  console.log("Server is running on port 5000");
});
