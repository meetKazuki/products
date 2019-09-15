import Debug from 'debug';
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerDoc from '../docs/products-api.json';

dotenv.config();
const app = express();

const { NODE_ENV } = process.env;
if (NODE_ENV === 'development' || NODE_ENV === 'production') {
  app.use(logger('dev'));
}

const DEBUG = Debug('dev');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Products...'
  });
});

app.get('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    error: 'Resource does not exist',
  });
});

app.listen(PORT, () => DEBUG(`Server running on port ${PORT}`));

export default app;
