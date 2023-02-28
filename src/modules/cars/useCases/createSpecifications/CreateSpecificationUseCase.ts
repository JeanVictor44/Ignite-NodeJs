import { injectable, inject} from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

// O Service não deve conhecer o Banco de dados a ser acessado ou como será acessado
// Por isso ele recebe o repositorio, mas ele conhece apenas o contrato desse repositório através 

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ){}
    
    async execute({name,description}: IRequest){
    
      const specificationAlreadyExists = await this.specificationRepository.findByName(name)
      
      if(specificationAlreadyExists){
        throw new Error("Specification already exists")
      }
      
      this.specificationRepository.create({name, description})
    }
}


export { CreateSpecificationUseCase }