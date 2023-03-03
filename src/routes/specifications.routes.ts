import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationController";

export const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post('/', createSpecificationController.handle)  