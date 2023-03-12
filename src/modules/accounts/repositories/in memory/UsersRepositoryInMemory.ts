import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { v4 as uuid } from "uuid";
class UsersRepositoryInMemory implements IUsersRepository{
  private users: User[]
  constructor(){
    this.users = []
  }

  async create({ name, username, email, password, driverLicense }: ICreateUserDTO): Promise<void> {
    const user = new User()

    Object.assign(user, {
      name, 
      username, 
      email, 
      password, 
      driverLicense,
      createdAt: new Date(),
      id: uuid(),
    })
    this.users.push(user)
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id)
  }

}

export { UsersRepositoryInMemory }