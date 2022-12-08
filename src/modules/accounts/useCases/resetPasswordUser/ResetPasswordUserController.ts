import { container } from "tsyringe";
import { Request, Response } from "express";
import { ResetPasswordUserUseCase } from "./ResetPasswordUserUserCase";

class ResetPasswordUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { token } = request.query;
    const { password } = request.body;

    const resetPasswordUserUseCase = container.resolve(ResetPasswordUserUseCase)

    await resetPasswordUserUseCase.execute({ token: String(token), password });

    return response.send();
  }
}

export { ResetPasswordUserController }