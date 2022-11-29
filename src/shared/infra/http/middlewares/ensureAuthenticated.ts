import { verify } from "jsonwebtoken"
import { AppError } from "@shared/errors/AppError";
import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "faf9a35949a2a163ef13edab0d0d56da") as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id,
    }

    next();

  } catch (error) {
    throw new AppError("Invalid token!", 401)
  }
}