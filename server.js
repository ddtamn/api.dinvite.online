import express from "express";
import db from "./config/Databse.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = 5000;
const app = express();

try {
  await db.authenticate();
  console.log("databse running");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("http://localhost:5000");
});
