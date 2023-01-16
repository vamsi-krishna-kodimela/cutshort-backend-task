import { Router } from "express";
import { userRoutes } from "../user";
import { loginUser } from "../user/user.controller";

const router = Router();

router.use("/user", userRoutes);
router.route("/login").post(loginUser);

export default router;
