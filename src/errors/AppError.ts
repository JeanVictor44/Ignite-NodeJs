export class AppError extends Error {
  public readonly statusCode: number
  
  constructor(message: string, statusCode = 400){
    super(message);
    this.statusCode = statusCode
  }
}


export class AuthorizationError extends AppError {
  constructor(message: string){
    super(message, 401)
  }
}