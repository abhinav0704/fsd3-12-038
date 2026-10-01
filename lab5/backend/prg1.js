import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.end("Hello Express!");
});

// ✅ This must be the last line, outside of routes
app.listen(4444, () => {
  console.log("Prg1 is running at server 4444");
});

