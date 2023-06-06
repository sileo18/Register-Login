import { CreateUserService } from "./CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {
  async handle (req: Request, res: Response) {
    const {email, password} = req.body

    const createUser = new CreateUserService()

    const resultCreate = await createUser.execute({email, password})

    return res.status(201).json(resultCreate)
  }
}