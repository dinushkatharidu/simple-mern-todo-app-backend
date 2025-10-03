import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

// CORS setup: allow your Netlify frontend domain
app.use(cors({
  origin: "https://simple-mern-todo-app-frontend.netlify.app"
}));

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});