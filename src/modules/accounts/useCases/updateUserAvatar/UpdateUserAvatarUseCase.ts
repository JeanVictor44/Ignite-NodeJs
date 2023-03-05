import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// Adicionar coluna avatar na tabela de users
// Criar a configuração de upload no multer
// Refatorar enitidade user com coluna avatar
// Gerar outra migration e rodar
// Criar regra de negócio do upload
// Criar controller

interface IRequest {
  userId: string,
  avatarFile: string
}

@injectable()
class UpdateUserAvatarUseCase{
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}
  async execute({userId, avatarFile}: IRequest): Promise<void>{
    const user = await this.usersRepository.findById(userId)
    user.avatar = avatarFile

    await this.usersRepository.create(user)
  }
}
export { UpdateUserAvatarUseCase}