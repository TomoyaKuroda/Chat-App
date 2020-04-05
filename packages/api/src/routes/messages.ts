import { Router } from "express";
export const messageRouter = Router();
import { Message } from "../models/Message";

// new message
messageRouter.post("/", async (req, res, next) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.json(message);
  } catch (e) {
    next(e);
  }
});
