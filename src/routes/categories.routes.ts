import { Router } from 'express'
import { CategoriesRepositories } from '../repositories/CategoriesRepository'
const categoriesRoutes = Router()
const categoriesRepositories = new CategoriesRepositories()


categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body
  const categoryAlreadyExists = categoriesRepositories.findByName(name)
  if(categoryAlreadyExists){
    return response.status(400).json({error: "Category Already exists"})
  }
  
  categoriesRepositories.create({name, description})

  return response.status(201).json()
})

categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepositories.list()
    return response.json(all)
})
export { categoriesRoutes }