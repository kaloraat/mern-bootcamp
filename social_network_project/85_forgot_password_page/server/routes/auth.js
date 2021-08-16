import express from "express";

const router = express.Router();

// controllers
import {
  register,
  login,
  currentUser,
  forgotPassword,
} from "../controllers/auth";
// middlewares
import { requireSignin } from "../middlewares";

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);

module.exports = router;
