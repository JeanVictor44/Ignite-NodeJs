import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepositoy = new CategoriesRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoy)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }