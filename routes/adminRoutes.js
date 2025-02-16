import express from "express";
const router = express.Router();
import * as eventServies from "../controllers/adminController.js";

router.get("/", eventServies.getAllTeams);
router.patch("/updatetime", eventServies.updateEventTime);
router.get("/events", eventServies.getEvents);
router.get("/team/:teamcode", eventServies.getTeams);
router.post("/attendance", eventServies.markAttendance);
export default router;
