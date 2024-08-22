import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user";

const router = express.Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
