import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController{
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase){}
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params

    await this.deleteCategoryUseCase.execute(id)

    return response.sendStatus(204)

  }
}

export { DeleteCategoryController }