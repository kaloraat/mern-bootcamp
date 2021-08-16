import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";
// controllers
import { createPost } from "../controllers/post";

router.post("/create-post", requireSignin, createPost);

module.exports = router;
