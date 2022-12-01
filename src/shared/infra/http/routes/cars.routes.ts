import multer from "multer";
import { Router } from "express";
import uploadConfig from '@config/upload';
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarConroller";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificatonController";

const carsRoutes = Router();

const uploadCarImages = multer(uploadConfig.upload("./tmp/cars"));

let createCarController = new CreateCarController();
let uploadCarImagesController = new UploadCarImagesController();
let listAvailableCarsController = new ListAvailableCarsController();
let createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);

carsRoutes.post('/specifications/:id', ensureAuthenticated, ensureAdmin, createCarSpecificationController.handle);

carsRoutes.post('/images/:id', ensureAuthenticated, ensureAdmin, uploadCarImages.array("newCarImages"), uploadCarImagesController.handle);

export { carsRoutes }