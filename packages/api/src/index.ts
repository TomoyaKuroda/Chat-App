import express from "express";
import cors from "cors";
import { middlewareLogger } from "./middleware/logger";
import { usersRouter } from "./routes/users";
import { conversationRouter } from "./routes/conversation";
import { sequelize } from "./database";
import bodyParser from "body-parser";
import { messageRouter } from "./routes/messages";
import { middlewareAuth } from "./middleware/auth";
import { authRouter } from "./routes/auth";

const PORT = 9999;

const run = async () => {
  const app = express();
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.info(`successfully connected`);
  } catch (e) {
    console.info(`Could not connect to database`);
  }

  app.use(bodyParser.json());
  app.use(middlewareLogger);
  app.use(cors());
  app.use("/auth", authRouter);
  app.use(`/users`, middlewareAuth, usersRouter);
  app.use("/conversations", middlewareAuth, conversationRouter);
  app.use("/messages", middlewareAuth, messageRouter);

  app.listen(PORT);
  console.info(`API running on ${PORT}`);
};

run();
