const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.listen(port, () => {
  console.log(`TSM listening on port ${port}`);
});
