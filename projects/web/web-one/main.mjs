import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const message = `Hello from host: ${os.hostname()}`;
  console.log(message);
  res.send(message);
});

app.listen(PORT, () => console.log(`web-one listening on -p: ${PORT}}`));
