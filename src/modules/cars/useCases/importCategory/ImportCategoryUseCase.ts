import fs from 'node:fs'
import {parse} from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { inject, injectable } from 'tsyringe';

interface IImportCategory {
  name: string;
  description: string
}

@injectable()
class ImportCategoryUseCase {
  
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ){}
  
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
    
    return new Promise((resolve, reject) => {
      const categories:IImportCategory[] = []
      const stream = fs.createReadStream(file.path)
      
      const parseFile = parse({
        quote: false,       
      }) 

      // conseguimos pegar os pedaços do arquivo e manda-los para o destino que quisermos
      stream.pipe(parseFile)

      parseFile.on('data', async (line) => {
        const [name, description] = line
        categories.push({
          //Slice para corrigir os parenteses não ocasionais aparecendo
            name: name.slice(1), 
            description: description.slice(0, description.length - 1)
        })
      }).on("end", () => {
        fs.promises.unlink(file.path)
        resolve(categories)
      }).on("error", (err) => {
        reject(err)
      })
    })
    
    

  }

  async execute(file: Express.Multer.File): Promise<void>{
   const categories = await this.loadCategories(file)
   categories.map(async(category) => {
    const { name, description } = category
    const existsCategory = await this.categoriesRepository.findByName(name)
    if(!existsCategory){
      await this.categoriesRepository.create({
        name, 
        description
      })
    }
   })
  }
}
export { ImportCategoryUseCase }