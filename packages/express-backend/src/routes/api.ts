import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profiles";
import artRouter from "./art";

const router = express.Router();

// all routes under this router require authentication
router.use(authenticateUser);

router.use("/profiles", profileRouter);
router.use("/art", artRouter);

export default router;