export interface ICreateUserDTO {
  name: string,
  username: string,
  email: string,
  password: string,
  driverLicense:string,
  avatar?: string
  id?: string
}