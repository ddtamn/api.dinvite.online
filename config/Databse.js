import { Sequelize } from "sequelize";

const db = new Sequelize("dinvite-database", "root", "meylianachelsea12345", {
  host: "34.128.85.30",
  dialect: "mysql",
});

export default db;
