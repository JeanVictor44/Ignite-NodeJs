import { AppDataSource } from "../../../../database/data-source";
import { Category } from "../../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { Repository } from 'typeorm'

class CategoriesRepository implements ICategoriesRepository{
  private repository: Repository<Category>

constructor(){
    this.repository = AppDataSource.getRepository(Category) 
  }
  
  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  async findById(id: string): Promise<Category>{
    const category = await this.repository.findOne({
      where: {
        id
      }
    })
    return category
  }

  async create({description, name}: ICreateCategoryDTO): Promise<void> {
    // Cria a entidade
    const category = this.repository.create({
      name,
      description
    })
    // Salva no banco de dados
    await this.repository.save(category) 
  }

  async list(): Promise<Category[]>{
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category>{
    const category = await this.repository.findOne({
      where: {
        name
      }
    })

    return category
  }
}

export { CategoriesRepository }