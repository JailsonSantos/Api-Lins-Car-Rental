import { Category } from "../model/Category";

// DTO = Data Transfer Object - (um Objeto responsável em transferir dados entre uma classe e outra);
export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository }