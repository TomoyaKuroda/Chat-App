import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "chat",
  dialect: "sqlite",
  username: "root",
  password: "",
  storage: "chat.db",
  models: [__dirname + "/models"], // or [Player, Team],
  logging: false
});
