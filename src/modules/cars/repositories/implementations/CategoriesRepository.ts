// Repositórios ficam responsável por fazer as ações nos bancos de dados, manipulação de dados
import { Category } from "../../entities/Category";

import { getRepository, Repository } from "typeorm";

import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // Criando uma identidade para salvar
    const category = this.repository.create({
      name,
      description
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    // Listando as categorias
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    // SELECT * FROM categories WHERE name="name" limit 1
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository }