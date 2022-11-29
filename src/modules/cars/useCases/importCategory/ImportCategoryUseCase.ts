
import { parse as csvParser } from 'csv-parse';
import fs from 'fs'; // File system, função nativa do Nodejs
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {

    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);

      const parseFile = csvParser();

      stream.pipe(parseFile);

      parseFile.on("data", async (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description,
        })
      }).on("end", () => {
        // Não ta funcionando remover da pasta temp.
        //fs.promises.unlink(file.path) // Remove o arquivo da pasta tmp passando o caminho do arquivo
        resolve(categories)
      }).on("error", (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = await this.categoriesRepository.findByName(name);

      if (!existCategory) {
        await this.categoriesRepository.create({ name, description });
      }
    })
  }
}

export { ImportCategoryUseCase }