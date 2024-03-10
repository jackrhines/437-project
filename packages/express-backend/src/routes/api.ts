import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profiles";

const router = express.Router();

// all routes under this router require authentication
router.use(authenticateUser);

// router.use("/entourages", entourageRouter);
router.use("/profiles", profileRouter);
// router.use("/tours", tourRouter);
// router.use("/directions", directionsRouter);

export default router;