import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

// O Service não deve conhecer o Banco de dados a ser acessado ou como será acessado
// Por isso ele recebe o repositorio, mas ele conhece apenas o contrato desse repositório através 
class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository){}
    execute({name,description}: IRequest){
    
      const specificationAlreadyExists = this.specificationRepository.findByName(name)
      
      if(specificationAlreadyExists){
        throw new Error("Specification already exists")
      }
      
      this.specificationRepository.create({name, description})
    }
}


export { CreateSpecificationService }