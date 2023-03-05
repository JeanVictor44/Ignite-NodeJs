import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response){
    const { id: userId } = request.user
    const avatarFile = null
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)
    
    await updateUserAvatarUseCase.execute({userId, avatarFile})
    return response.status(204).send()
  }
}

export { UpdateUserAvatarController }