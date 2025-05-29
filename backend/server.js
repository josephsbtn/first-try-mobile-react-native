const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connect = () => {
  const app = express();
  try {
    app.use(cors());
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ limit: "10mb", extended: true }));
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    app.use();
  }
};

connect();
