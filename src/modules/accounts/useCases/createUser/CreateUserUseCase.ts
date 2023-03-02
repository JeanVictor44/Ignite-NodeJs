import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}
  
  async execute({name,driverLicense,email,password,username}: ICreateUserDTO): Promise<void>{
    await this.usersRepository.create({
      name,
      driverLicense,
      email,
      password,
      username
    })

  }
}