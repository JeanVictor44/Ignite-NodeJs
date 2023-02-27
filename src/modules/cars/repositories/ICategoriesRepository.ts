import { Category } from "../entities/Category";

// DTO => Data transfer object
// Interface criada para que a camada de rotas não conheça
// todos os atributos da camada de categorias
// Apenas quem deve conhecer e manipula a camada de categorias é o repository
export interface ICreateCategoryDTO {
  name: string;
  description: string
}
export interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
  create({name, description}: ICreateCategoryDTO): Promise<void>
  delete(id: string): Promise<void>
  findById(id: string): Promise<Category>
}