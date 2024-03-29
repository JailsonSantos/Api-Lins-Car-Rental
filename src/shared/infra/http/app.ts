import 'reflect-metadata';
import express, {
  Request,
  Response,
  NextFunction
} from "express";
import "@shared/container";
import "express-async-errors";
import { router } from "@shared/infra/http/routes";

// Documentação da API
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json';

// Bando de dados
import { AppError } from '@shared/errors/AppError';
import createConnection from '@shared/infra/typeorm';

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      Message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });

})

export { app }