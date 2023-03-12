import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { v4 as uuid} from 'uuid'

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  private categories: Category[]
  
  constructor(){
    this.categories = []
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category=> category.name == name)
    return category;
  }

  async list(): Promise<Category[]> {
    return this.categories
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    this.categories.push({
      name,
      description,
      createdAt: new Date(),
      id:uuid()
    })
  }

  async delete(id: string): Promise<void> {
    this.categories = this.categories.filter(category  => category.id !== id)
  }

  async findById(id: string): Promise<Category> {
    const category = this.categories.find(category => category.id === id )
    return category
  }
  
}
export { CategoriesRepositoryInMemory }