import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListRentalByUserUseCase } from "./ListRentalByUserUseCase";

class ListRentalByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listRentalsByUserUseCase = container.resolve(ListRentalByUserUseCase);
    const rentals = await listRentalsByUserUseCase.execute(id);

    return response.json(rentals);

  }

}

export { ListRentalByUserController }