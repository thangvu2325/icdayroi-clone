import jwt from "jsonwebtoken";

import { env } from "process";
const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, env.JSON_WEB_TOKEN_HIDEN, (err, user) => {
        if (err) {
          res.status(403).json("Token is not Valid");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("You're not authenticated");
    }
  },
  verifyTokenandAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id == req.params.id || req.user.admin) {
        next();
      } else {
        res.status(403).json("You're not allowed to delete other");
      }
    });
  },
};
export default middlewareController;
