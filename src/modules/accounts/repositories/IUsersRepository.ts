
export interface ICreateUserDTO {
  name: string,
  username: string,
  email: string,
  password: string,
  driverLicense:string
}

export interface IUsersRepository {
  create({name,username,email,password,driverLicense}: ICreateUserDTO): Promise<void>
}