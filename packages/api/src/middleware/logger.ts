import { RequestHandler } from "express";
export const middlewareLogger: RequestHandler = (req, _res, next) => {
  console.info(`Getting url`, req.url);
  next();
};
