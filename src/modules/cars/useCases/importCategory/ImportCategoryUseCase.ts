import fs from 'node:fs'
import {parse} from 'csv-parse'

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void{
    const stream = fs.createReadStream(file.path)
    
    const parseFile = parse({
      quote: false,       
    }) 

    // conseguimos pegar os pedaços do arquivo e manda-los para o destino que quisermos
    stream.pipe(parseFile)

    parseFile.on('data', async (line) => {

      console.log(line)
    })

  }
}
export { ImportCategoryUseCase }