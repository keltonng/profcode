import { Router } from "express";
import { login } from "./controllers/auth.controller";
import { listModules } from "./controllers/content.controller";
import { authMiddleware } from "./middlewares/auth";

const routes = Router();

routes.post("/login", login);
routes.get("/modules", authMiddleware, listModules);

export default routes;
