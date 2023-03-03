import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
export interface IUsersRepository {
  create({name,username,email,password,driverLicense}: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
}