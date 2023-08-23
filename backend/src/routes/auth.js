import express from "express";
const router = express.Router();
import authControllers from "../app/controllers/authControllers.js";
import middlewareControllers from "../app/controllers/middlewareConstrolles.js";

router.get("/", authControllers.index);
router.post("/login", authControllers.handleLogin);
router.post("/signup", authControllers.signup);
router.post(
  "/logout",
  middlewareControllers.verifyToken,
  authControllers.logOut
);
router.post("/refresh", authControllers.refreshToken);

export default router;
