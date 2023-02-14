import { Category } from "../models/Category"

// DTO => Data transfer object
// Interface criada para que a camada de rotas não conheça
// todos os atributos da camada de categorias
// Apenas quem deve conhecer e manipula a camada de categorias é o repository
interface IcreateCategory {
  name: string;
  description: string
}

class CategoriesRepositories {
  private categories: Category[];

  constructor(){
    this.categories = [];
  }

  create({description, name}: IcreateCategory): void {
    const category = new Category()
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }
  list(): Category[]{
    return this.categories
  }
  findByName(name: string): Category{
    const category = this.categories.find(category => category.name === name)
    return category
  }
}

export { CategoriesRepositories }