import { prisma } from "../prisma/prisma-client";
import { createUserDTO } from "../DTOs/CreateUserDTO";
import { User } from "@prisma/client";

export class CreateUserService {
  async execute ( {email, password }: createUserDTO ): Promise <User> {
    //Verificar se produto já existe
    const emailAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (emailAlreadyExists) {
      //Erro
    }

    const createUser = prisma.user.create({
      data: {
        email,
        password
      },
    })

    return createUser;
  }
}