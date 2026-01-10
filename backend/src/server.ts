import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import { connectDB } from "./config/db";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("🚀 Backend rodando na porta 3333");
});
