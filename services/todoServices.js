import { Todos } from "../model/todos.js";

export async function listTodo() {
  return Todos.find();
}

export async function addTodo(data) {
  return Todos.create(data);
}

export async function removeTodo(id) {
  return Todos.findByIdAndDelete(id);
}

export async function refreshTodo(id, data) {
  return Todos.findByIdAndUpdate(id, data, { new: true });
}
