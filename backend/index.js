const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from HobbyCrash backend!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(port, () => {
  console.log(`HobbyCrash backend listening on http://localhost:${port}`);
});
