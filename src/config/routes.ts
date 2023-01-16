import { Router } from "express";
import { taskRoutes } from "../task";
import { userRoutes } from "../user";
import { loginUser } from "../user/user.controller";

const router = Router();

router.use("/user", userRoutes);
router.route("/login").post(loginUser);
router.use("/todo", taskRoutes);

export default router;
