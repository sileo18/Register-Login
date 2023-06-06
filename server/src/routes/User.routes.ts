import { Router } from "express";
import { CreateUserController } from "../Services/CreateUserController";

const userRoutes = Router()

const CreateUserControllerInstance = new CreateUserController()

userRoutes.post("/", CreateUserControllerInstance.handle)

export { userRoutes }