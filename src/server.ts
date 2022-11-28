import 'reflect-metadata';
import express from "express";
import { router } from "./routes";
import "./shared/container";

// Documentação da API
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

// Bando de dados
import './database';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log('Sever is running!'));