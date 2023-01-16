import { Request, Response } from "express";
import Task from "./task.schema";

const createTask = async (req: Request, res: Response) => {
  const { title, description }: any = { ...req.body };
  if (!title) {
    res.status(400).send("Title is required.");
    return;
  }
  try {
    const task = await Task.create({
      title: title,
      description: description,
    });
    res.json(task);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const deleteTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(taskId);
    res.json(task);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const completeTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(taskId, { isCompleted: true });
    res.json(task);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const updateTask = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const { title, description }: any = { ...req.body };
  if (!title) {
    if (!title) {
      res.status(400).send("Title is required.");
      return;
    }
  }
  try {
    const task = await Task.findByIdAndUpdate(taskId, { title, description });
    res.json(task);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export { createTask, deleteTask, completeTask, updateTask };
