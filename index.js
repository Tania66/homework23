import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import todosRoutes from "./routes/todosRoutes.js";
const app = express();

const password = "eoeegYBceH9H30uv";
const DB_HOST = `mongodb+srv://Vanini:${password}@cluster0.rejcbh3.mongodb.net/todosData?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("dataBase connect success"))
  .catch((error) => console.log("dataBase connect error", error));

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/todos", todosRoutes);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});
