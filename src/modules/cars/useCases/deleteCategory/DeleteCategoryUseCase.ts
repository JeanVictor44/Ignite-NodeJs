import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class DeleteCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){}
  async execute(id: string){
    const categoryExists = await this.categoriesRepository.findById(id)
    
    if(!categoryExists){
      throw new Error("Category doesn't exists")
    }

    await this.categoriesRepository.delete(id)
  }
}
export { DeleteCategoryUseCase }