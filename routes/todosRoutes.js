import express from "express";
import {
  getAllTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todosControllers.js";
const todosRoutes = express.Router();

todosRoutes.get("/", getAllTodo);

todosRoutes.post("/", createTodo);

todosRoutes.delete("/:id", deleteTodo);

todosRoutes.put("/:id", updateTodo);

export default todosRoutes;
