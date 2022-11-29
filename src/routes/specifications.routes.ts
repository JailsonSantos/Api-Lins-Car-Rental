import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const specificationsRoutes = Router();
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };