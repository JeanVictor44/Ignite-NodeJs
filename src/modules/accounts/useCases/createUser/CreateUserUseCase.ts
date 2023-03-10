import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}
  
  async execute({name,driverLicense,email,password,username}: ICreateUserDTO): Promise<void>{
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    
    if(userAlreadyExists){
      throw new AppError("User already exists")
    }
    
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