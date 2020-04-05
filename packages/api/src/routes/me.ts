import { Router } from "express";
import { User } from "../models/User";

export const meRouter = Router();

// Get ONE user
meRouter.get("/", async (req, res) => {
  const { id, firstName, lastName, email } = res.locals.user;
  res.json({ id, firstName, lastName, email });
});
