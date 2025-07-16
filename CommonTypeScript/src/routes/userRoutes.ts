import { Router } from "express";
import {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controller/userController";

const router: Router = Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
