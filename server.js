const express = require('express');
const cors = require('cors'); // <--- add
const app = express();

app.use(express.json());
// Allow only next dev origin (safer) or use app.use(cors()) for open in dev
app.use(cors({ origin: 'http://localhost:3000' })); // Next dev default

app.get('/api/message', (req, res) => {
  res.json({ message: "Express backend se response aa gaya!" });
});

app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(3001, () => {
  console.log("Express server running on port 5000");
});
