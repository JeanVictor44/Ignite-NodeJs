import { Category } from "../models/Category";

// DTO => Data transfer object
// Interface criada para que a camada de rotas não conheça
// todos os atributos da camada de categorias
// Apenas quem deve conhecer e manipula a camada de categorias é o repository
export interface ICreateCategoryDTO {
  name: string;
  description: string
}
export interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({name, description}: ICreateCategoryDTO): void
}