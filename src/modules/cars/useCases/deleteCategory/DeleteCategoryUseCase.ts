import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ){}
  async execute(id: string){
    const categoryExists = await this.categoriesRepository.findById(id)
    
    if(!categoryExists){
      throw new AppError("Category doesn't exists")
    }

    await this.categoriesRepository.delete(id)
  }
}
export { DeleteCategoryUseCase }