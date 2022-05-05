
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };