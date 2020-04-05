import { Router } from "express";
export const conversationRouter = Router();
import { Conversation } from "../models/Conversation";
import { Message } from "../models/Message";

// CRUD of the User in REST API
// Get list of users

conversationRouter.get("/", async (_req, res, _next) => {
  const conversions = await Conversation.findAll();
  res.json(conversions);
});

// Get ONE conversation
conversationRouter.get("/:conversationID", async (req, res) => {
  const { conversationID } = req.params;
  const conversation = await Conversation.findByPk(conversationID);
  res.json(conversation);
});
// new message
conversationRouter.get("/:conversationID/messages", async (req, res, _next) => {
  const { conversationID } = req.params;
  const conversion = await Conversation.findByPk(conversationID);
  const messages = await conversion?.$get("messages");
  res.json(messages);
});

// Create a user
conversationRouter.post("/", async (req, res, _next) => {
  try {
    const conversation = new Conversation(req.body);
    await conversation.save();

    res.json(conversation);
  } catch (e) {
    _next(e);
  }
});
// Update a user
conversationRouter.put("/:conversationID", async (req, res, next) => {
  try {
    await Conversation.update(req.body, {
      where: { id: req.params.conversationID },
      returning: true,
    });
    const conversation = await Conversation.findByPk(req.params.conversationID);
    res.json(conversation);
  } catch (e) {
    next(e);
  }

  next();
});
// Update a user
conversationRouter.delete("/:conversationID", (req, res, next) => {
  try {
    Conversation.destroy({
      where: { id: req.params.conversationID },
    });
    res.json({
      message: "Successfully delete conversation",
    });
  } catch (e) {
    next(e);
  }
});
