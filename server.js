const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:3000",   // Next.js dev
    "capacitor://localhost",   // Android/iOS app
    "capacitor://localhost:3000",
    "http://localhost",        // कभी-कभी यह भी काम आता है
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/api/message", (req, res) => {
  res.json({ message: "Express backend se response aa gaya! okay" });
});

app.post("/api/echo", (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(3001, () => {
  console.log("Express server running on port 3001");
});
