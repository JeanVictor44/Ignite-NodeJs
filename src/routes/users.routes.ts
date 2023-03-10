import { Router } from "express";
import multer from "multer";
import { upload } from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router()

const uploadAvatar = multer(upload('./tmp/avatar')) 

const updateUserAvatarController = new UpdateUserAvatarController()
const createUserController = new CreateUserController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.patch(
  "/avatar", 
  ensureAuthenticated,
  uploadAvatar.single("avatar"), 
  updateUserAvatarController.handle
)

export { usersRoutes }