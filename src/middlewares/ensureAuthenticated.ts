import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { AuthorizationError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){
  
  // Recuperar o token no authorization do headers
  const authHeader = request.headers.authorization
  
  // Verificar se o authHeader está vindo preenchido
  if(!authHeader){
    // 401 -> Erro de autorização
    throw new AuthorizationError("Token missing")
  }

  // Bearer tokenblablbalbalblbafkfksj
  // [0] = Bearer  
  // [1] = token
  const [, token] = authHeader.split(' ')

  try {
    // Lança uma excessão quando o token é inválido
    const { sub: userId} = verify(token, "ecdd4dfa8880dd68c4d3fcc1c3a33e2879a02182") as IPayload
    // Pode ser que estejam passando um jwt válido de outra aplicação
    // Devemos verificar se esse id existe em nossa aplicação
    const usersRepository = new UsersRepository()
    
    const user = await usersRepository.findById(userId)
    if(!user) {
      throw new AuthorizationError("User does not exists!")
    }

    next()

  }catch {
    throw new AuthorizationError("Invalid token!")
  }

   
}