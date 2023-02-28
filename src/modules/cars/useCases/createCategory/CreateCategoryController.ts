import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from 'tsyringe'
export class CreateCategoryController {
  
  handle(request: Request, response: Response): Response{
    const { name, description } = request.body  
    
    // Tsringe faz a ejeção do CreateCategoryUseCase
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    createCategoryUseCase.execute({name, description})
    
    return response.status(201).json()
  }
}