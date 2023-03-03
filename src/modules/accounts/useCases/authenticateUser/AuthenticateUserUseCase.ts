import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string,
  password: string
}

interface IResponse {
  user: {
    name: string,
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase{
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({email, password}: IRequest): Promise<IResponse>{
    // Usuário existe?
    const user = await this.usersRepository.findByEmail(email)
    if(!user){
      throw new Error("Email or password incorrect")
    }

    const isPasswordMatch = await compare(password,user.password)

    if(!isPasswordMatch){
      throw new Error("Email or password incorrect")
    }
    
    const token = sign({}, 'ecdd4dfa8880dd68c4d3fcc1c3a33e2879a02182', { 
      subject:user.id,
      expiresIn: '1d'
    })

    return {
      user: { 
        name: user.name,
        email
      },
      token
    }
  }
}

export { AuthenticateUserUseCase }