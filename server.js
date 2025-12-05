const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

// app.use(cors({
//   origin: [
//     "http://localhost:3000",   // Next.js dev
//     "capacitor://localhost",   // Android/iOS app
//     // "capacitor://localhost:3000",
//     "http://localhost",        // कभी-कभी यह भी काम आता है
//     "ionic://localhost",       // कभी-कभी Ionic apps के लिए
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));


app.use(cors({
  origin: true, // jo bhi origin aaye, allow kar do
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(cors({
  origin: (origin, callback) => {
    // development ke liye simple logic
    console.log("Origin:", origin);
    callback(null, true);
  }
}));



app.get("/api/message", (req, res) => {
  res.json({ message: "Express backend se response aa gaya! okay" });
});
app.get("/api/hello", (req, res) => {
  res.json({ message: "hello from server!" });
});

app.post("/api/echo", (req, res) => {
  res.json({ youSent: req.body });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Express server running on port " + PORT);
});

