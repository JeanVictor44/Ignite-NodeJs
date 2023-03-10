import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository{
  private repository: Repository<Specification>

  constructor(){
    this.repository = AppDataSource.getRepository(Specification)
  }

  async create({description, name}: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    })

    await this.repository.save(specification)
  }

  async list(): Promise<Specification[]>{
    return await this.repository.find()
  }
  async findByName(name: string): Promise<Specification>{
    const category = await this.repository.findOne({
      where:{
        name
      }
    })
    return category
  }
  
}