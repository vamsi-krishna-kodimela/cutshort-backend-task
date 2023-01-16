import { Router } from "express";
import {
  completeTask,
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "./task.controller";

const taskRoutes = Router();
taskRoutes.route("/").post(createTask);
taskRoutes.route("/:id/complete").post(completeTask);
taskRoutes.route("/").get(getAllTasks);
taskRoutes.route("/:id").get(getTaskById);
taskRoutes.route("/:id").delete(deleteTask);
taskRoutes.route("/:id").put(updateTask);
export default taskRoutes;
