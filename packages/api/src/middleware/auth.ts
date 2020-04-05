import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const middlewareAuth: RequestHandler = (req, res, next) => {
  const bearer = req.headers.authorization;
  const throwError = (error: string, code = 401) => {
    res.status(code);
    return res.json({
      error,
    });
  };

  if (!bearer) return throwError("No JWT supplied");
  const reg = /^Bearer\s(.*)$/;
  if (!/^Bearer\s.*$/.test(bearer)) {
    return throwError("Incorrect JWT format");
  }
  const token = reg.exec(bearer)![1];

  try {
    res.locals.user = jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return throwError("Invalid JWT", 401);
  }

  next();
};
