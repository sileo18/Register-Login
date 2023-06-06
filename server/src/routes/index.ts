import { Router } from "express";
import { userRoutes } from "./User.routes";

const routes = Router()

routes.use("/register", userRoutes)

export { routes };
