import { container } from 'tsyringe'
import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

// Where everything will execute
class CreateCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

    await createCategoryUseCase.execute({ name, description })

    return response.status(201).send();
  }
}

export { CreateCategoryController }