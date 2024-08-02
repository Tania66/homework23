import {
  listTodo,
  addTodo,
  removeTodo,
  refreshTodo,
} from "../services/todoServices.js";
export async function getAllTodo(req, res, next) {
  try {
    const todos = await listTodo();
    res.status(200).send(todos);
  } catch (error) {
    next(error);
  }
}

export async function createTodo(req, res, next) {
  try {
    const newTodo = await addTodo({ ...req.body });
    res.status(201).send(newTodo);
  } catch (error) {
    next(error);
  }
}

export async function deleteTodo(req, res, next) {
  const { id } = req.params;
  try {
    const result = await removeTodo(id);
    if (result === null) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
}

export async function updateTodo(req, res, next) {
  const { id } = req.params;
  const { text, checked } = req.body;

  try {
    const resultUpdate = await refreshTodo(id, { text, checked });

    if (resultUpdate === null) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.send(resultUpdate);
  } catch (error) {
    next(error);
  }
}
