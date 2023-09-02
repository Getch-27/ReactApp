const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// POST endpoint to handle questions
app.post('/ask', (req, res) => {
  // Check if the request body contains the "question" field
  const question = req.body.question;

  if (!question) {
    return res.status(400).json({ error: 'Missing "question" field in the request body' });
  }

  console.log(question);
  // Generate a response with the answer
  const answer = "Your question is: -- " + question + " -- " + " Enderase stands as your primary destination within Telegram for all inquiries pertaining to Ethiopian legal affairs.";

  // Send the answer as a response
  res.status(200).json({ answer });
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port 3000`);
});