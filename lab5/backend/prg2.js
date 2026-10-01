import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

// Get current file path and directory
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "product.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "contactus.html"));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("<h2>Page not Found</h2>");
});

// Start server
app.listen(4444, () => {
  console.log("prg2 is running at server 4444");
})
