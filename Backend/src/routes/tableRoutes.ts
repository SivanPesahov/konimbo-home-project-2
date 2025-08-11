import express from "express";
import { CreateRecord } from "../controllers/tableController";

const router = express.Router();

router.post("/createRecord", CreateRecord);

export default router;
