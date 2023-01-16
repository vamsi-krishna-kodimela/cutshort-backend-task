import { Router } from "express";
import {
  completeTask,
  createTask,
  deleteTask,
  updateTask,
} from "./task.controller";

const taskRoutes = Router();
taskRoutes.route("/").post(createTask);
taskRoutes.route("/:id").delete(deleteTask);
taskRoutes.route("/:id").put(updateTask);
taskRoutes.route("/:id/complete").post(completeTask);
export default taskRoutes;
