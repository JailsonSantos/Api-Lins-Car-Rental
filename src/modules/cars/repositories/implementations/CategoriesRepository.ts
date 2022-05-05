import { Category } from '../../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';


// Padrão de projeto (Singleton) = cria e usa apenas uma instância de classe global

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  // Verifica se já foi criado uma instancia, se não tiver ele criar,
  // se não ele apenas retorna a existetente!
  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  // Cria uma Categoria
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push(category);
  }

  // Lista todas as categorias
  list(): Category[] {
    return this.categories;
  }

  // Verifica se uma categoria já existe
  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository }