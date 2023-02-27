import { Request, Response } from "express";
import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";

export class LisCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase){}
  
  async handle(request: Request, response: Response): Promise<Response>{
    const all = await this.listCategoriesUseCase.execute()
    return response.json(all)
  }
}