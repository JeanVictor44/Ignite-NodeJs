import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { LisCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new LisCategoriesController(listCategoriesUseCase)

export { listCategoriesController}