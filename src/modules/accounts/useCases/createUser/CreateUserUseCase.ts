import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcrypt";
@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}
  
  async execute({name,driverLicense,email,password,username}: ICreateUserDTO): Promise<void>{
    const passwordHash = await hash(password, 8);
    
    await this.usersRepository.create({
      name,
      driverLicense,
      email,
      password: passwordHash,
      username
    })

  }
}