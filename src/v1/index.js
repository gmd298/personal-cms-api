import { Router } from 'express';

const v1Router = Router();

v1Router.get('/', (request, response) => {
  response.send('Important message');
});

export default v1Router;
