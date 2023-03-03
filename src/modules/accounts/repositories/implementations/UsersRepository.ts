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
}