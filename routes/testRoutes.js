import express from "express";
import { getTopEvents } from "../controllers/testController.js";

const router = express.Router();

router.get("/:x", getTopEvents);

export default router;
