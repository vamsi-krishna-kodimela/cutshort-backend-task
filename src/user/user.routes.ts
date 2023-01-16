import { Router } from "express";
import { registerUser } from "./user.controller";

const userRoutes = Router();
userRoutes.route("/").post(registerUser);
export default userRoutes;
