import multer from 'multer';
import { Router } from 'express';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

// Create category
categoriesRoutes.post("/", createCategoryController.handle);

// List Categories
categoriesRoutes.get("/", listCategoriesController.handle);

// Import file SV
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes };