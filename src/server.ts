import express from "express";
import { router } from "./routes";

// Documentação da API
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log('Sever is running in PORT: 3333!'));