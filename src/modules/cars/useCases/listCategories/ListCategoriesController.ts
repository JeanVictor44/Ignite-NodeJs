import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";

export class LisCategoriesController {

  async handle(request: Request, response: Response): Promise<Response>{
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    const all = await listCategoriesUseCase.execute()
    return response.json(all)
  }
}