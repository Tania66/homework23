import {
  listTodo,
  addTodo,
  removeTodo,
  refreshTodo,
} from "../services/todoServices.js";

export const getAllTodo = async (req, res, next) => {
  try {
    const todos = await listTodo();
    res.status(200).send(todos);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const newTodo = await addTodo({ ...req.body });
    res.status(201).send(newTodo);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = removeTodo(id);
    if (result === null) {
      return res.status(404).json({ message: "Not found task" });
    }
    res.status(200).json({ message: "Task deleted!" }).send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { checked } = req.body;
    const resultUpdate = refreshTodo(id, { checked });
    if (resultUpdate === null) {
      return res.status(404).json({ message: "Not found task" });
    }
    res.status(200).json({ message: "Task updated!" }).send(resultUpdate);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
