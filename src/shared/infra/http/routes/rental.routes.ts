import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalByUserController } from "@modules/rentals/useCases/listRentalByUser/ListRentalByUserController";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolitionRentalController = new DevolutionRentalController();
const listRentalByUserController = new ListRentalByUserController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalRoutes.get('/user', ensureAuthenticated, listRentalByUserController.handle);
rentalRoutes.post('/devolution/:id', ensureAuthenticated, devolitionRentalController.handle);

export { rentalRoutes }