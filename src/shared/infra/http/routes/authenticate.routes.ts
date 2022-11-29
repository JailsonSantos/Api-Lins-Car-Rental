import { Router } from "express";
import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticateUserUserController.handle);

export { authenticateRoutes }