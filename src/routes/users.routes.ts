import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router()

const updateUserAvatarController = new UpdateUserAvatarController()
const createUserController = new CreateUserController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.patch("/avatar", updateUserAvatarController.handle)

export { usersRoutes }