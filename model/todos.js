import { Schema, model } from "mongoose";

const todosSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Set text for todo"],
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Todos = model("todos", todosSchema);
