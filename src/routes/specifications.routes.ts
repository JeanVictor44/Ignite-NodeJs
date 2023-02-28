import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationController";

export const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
specificationsRoutes.post('/', createSpecificationController.handle) 