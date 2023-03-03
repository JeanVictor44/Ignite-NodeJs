import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository{
  private repository: Repository<User>
  constructor(){
    this.repository = AppDataSource.getRepository(User)
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id
      }
    })
    return user
  }
  async create({ name, username, email, password, driverLicense }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      username,
      driverLicense
    })
                                
    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email
      }
    })
    
    return user
  }

}