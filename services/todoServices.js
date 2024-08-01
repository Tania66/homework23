import { Todos } from "../model/todos.js";

export async function listTodo() {
  return Todos.find();
}

export async function addTodo(data) {
  return Todos.create(data);
}

export async function removeTodo(_id) {
  return Todos.findByIdAndDelete({ _id });
}

export async function refreshTodo(_id, data) {
  return Todos.findByIdAndUpdate({ _id }, data, { new: true });
}
