import express from "express";
import { nanoid } from "nanoid";
const app = express();
const PORT = 3000;

// Temporary database
const urlDB = {};

// Home page with form
app.get("/", (req, res) => {
  res.send(`
    <h2>URL Shortener</h2>
    <form action="/shorten" method="POST">
      <input name="longUrl" placeholder="Enter URL" required />
      <button type="submit">Shorten</button>
    </form>
  `);
});

app.use(express.urlencoded({ extended: true }));
// Create short URL
app.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  const shortId = nanoid(15);

  urlDB[shortId] = longUrl;

  const shortUrl = `http://localhost:${PORT}/${shortId}`;

  res.send(`
    <p>Short URL:</p>
    <a href="${shortUrl}">${shortUrl}</a>
  `);
});

// Redirect to original URL
app.get("/:id", (req, res) => {
  const longUrl = urlDB[req.params.id];

  if (!longUrl) {
    return res.status(404).send("URL not found");
  }

  res.redirect(longUrl);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
