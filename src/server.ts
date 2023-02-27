import express from 'express'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { AppDataSource } from './database/data-source'
import 'reflect-metadata'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  // Endereço da api, função para configurar o server e setup com as configurações em Json do Swagger 
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use(router)

  app.listen(3333, () => {
    console.log('Server is running on http://localhost:3333')
  })
  
})
