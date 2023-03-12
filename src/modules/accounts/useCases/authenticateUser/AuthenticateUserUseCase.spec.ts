import { AppError } from "../../../../errors/AppError"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "../../repositories/in memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let usersRepositoryInMemory: UsersRepositoryInMemory
let authenticateUserUseCase: AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase


// Para testar a autenticação precisamos de um usuário criado

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory) 
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
  })

  it("should be able to authenticate an user", async () => {
    const userInfo: ICreateUserDTO = {
      driverLicense: "00292",
      email: "userteste@gmail.com",
      password: "1234",
      name: "User Test",
      username:"user_test"
    }
    await createUserUseCase.execute(userInfo)
    
    
    const { token } = await authenticateUserUseCase.execute({email: userInfo.email, password: userInfo.password})
    
    expect(token).toBeTruthy()
  })
  
  it("should not be able to authenticate with non existent user",( )=> {
    expect(async ()=> {
      await authenticateUserUseCase.execute({
        email: "jean@email", 
        password: "123"
      })
    
    }).rejects.toBeInstanceOf(AppError)
  }) 


})