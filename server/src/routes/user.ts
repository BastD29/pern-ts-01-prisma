import express from "express";
import { createUser, getUsers } from "../controllers/user";

const router = express.Router();

router.post("/create", createUser);
router.get("/", getUsers);

export default router;
