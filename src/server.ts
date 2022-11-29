import 'reflect-metadata';
import express, {
  Request,
  Response,
  NextFunction
} from "express";
import "./shared/container";
import "express-async-errors";
import { router } from "./routes";

// Documentação da API
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

// Bando de dados
import './database';
import { AppError } from './errors/AppError';

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

app.listen(3333, () => console.log('Sever is running!'));