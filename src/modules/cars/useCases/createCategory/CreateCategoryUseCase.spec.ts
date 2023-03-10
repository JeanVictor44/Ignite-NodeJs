// Agrupar testes que fazem parte do creaete Category
// testes unitários não possuem a responsabilidade de testar o nosso banco de dados
// precisamos de um repositório
import 'reflect-metadata'

import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in memory/CategoriesRepositoryInMemory"
import { AppError } from '@errors/AppError'

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create Category",() => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
  })

  it("should be able to create a new category" , async() => {
    const category = {
      name: "Category Test",
      description: "Category description test"
    }

    await createCategoryUseCase.execute(category)
    
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)
    expect(categoryCreated).toHaveProperty("id")
  })

  it("shouldn't be able to create a category with name exists", async() => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description test"
      }
  
      await createCategoryUseCase.execute(category)
      await createCategoryUseCase.execute(category)
  
    }).rejects.toBeInstanceOf(AppError)

  })
})