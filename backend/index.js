const express = require('express');
const cors = require('cors');
const figlet = require('figlet');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const fortunes = [
  "You will debug a production issue at 3 AM.",
  "Happiness is a green CI pipeline.",
  "Beware the semicolon you did not place.",
  "May your coffee be strong and your stacktrace short."
];

const hackerAliases = [
  "ghost1337", "neoX", "cyber_wraith", "zeroDay", "byte_ninja"
];

app.get('/api/command/help', (req, res) => {
  res.json({ response: ['help', 'ping', 'fortune', 'ascii <text>', 'whoami', 'clear'] });
});

app.get('/api/command/ping', (req, res) => {
  res.json({ response: [`pong (${Math.floor(Math.random() * 100)} ms)`] });
});

app.get('/api/command/fortune', (req, res) => {
  res.json({ response: [fortunes[Math.floor(Math.random() * fortunes.length)]] });
});

app.get('/api/command/ascii', (req, res) => {
  figlet.text(req.query.text || 'hello', (err, data) => {
    if (err) return res.json({ response: ['Error generating ASCII'] });
    res.json({ response: [data] });
  });
});

app.get('/api/command/whoami', (req, res) => {
  res.json({ response: [`You are: ${hackerAliases[Math.floor(Math.random() * hackerAliases.length)]}`] });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
