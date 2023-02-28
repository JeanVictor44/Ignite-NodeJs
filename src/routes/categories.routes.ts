import { Router } from 'express'
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { DeleteCategoryController } from '../modules/cars/useCases/deleteCategory/DeleteCategoryController'
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'
import { LisCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'

const categoriesRoutes = Router()

const upload = multer({
  dest: "./tmp"
})

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new LisCategoriesController()
const importCategoriesContaoller = new ImportCategoryController()
const deleteCategoryController = new DeleteCategoryController()

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get('/', listCategoriesController.handle)

categoriesRoutes.post('/import', upload.single('file'),importCategoriesContaoller.handle)

categoriesRoutes.delete('/:id', deleteCategoryController.handle)

export { categoriesRoutes }