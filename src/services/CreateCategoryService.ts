import { Category } from "../models/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository"
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
const categoriesRepositories = new CategoriesRepository()

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({name,description}: IRequest){
    
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)
    if(categoryAlreadyExists){
      throw new Error("Category already exists")
    }
    
    this.categoriesRepository.create({name, description})
  }
}

export {CreateCategoryService}