const express = require("express");

const app = express();

const { PORT = 3000 } = process.env;

app.get("/api/test", (req, res) => {
  return res.send("Hello there 2!");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`server is listening on port ${PORT}`);
});
