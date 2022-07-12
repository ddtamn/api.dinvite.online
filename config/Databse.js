import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DATABASE_NAME,
  "root",
  process.env.DATABASE_PASSWORD_SECRET,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

export default db;
