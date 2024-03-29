/* eslint-disable arrow-body-style */
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

import { router } from './routes';

import './database';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(4000, () => console.log('server is running'));
