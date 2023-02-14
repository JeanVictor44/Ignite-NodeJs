import { Request, Response } from "express";
import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";

export class LisCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase){}
  handle(request: Request, response: Response): Response{
    const all = this.listCategoriesUseCase.execute()
    return response.json(all)
  }
}