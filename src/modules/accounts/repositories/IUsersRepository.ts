import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
export interface IUsersRepository {
  create({name,username,email,password,driverLicense}: ICreateUserDTO): Promise<void>
}