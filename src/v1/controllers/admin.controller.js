import { Router } from 'express';
import adminService from '../services/admin.service';

const adminRouter = Router();

adminRouter.post('/', async (request, response) => {
  const {
    body: {
      name,
      email,
      password,
    },
  } = request;

  const newAdmin = await adminService.create(
    name,
    email,
    password,
  );

  response.json(newAdmin);
});

adminRouter.get('/', async (request, response) => {
  const admins = await adminService.read();

  response.json(admins);
});

adminRouter.get('/:id', async (request, response) => {
  const {
    params: {
      id,
    },
  } = request;

  const readAdmin = await adminService.readOne(
    id,
  );

  response.json(readAdmin);
});

export default adminRouter;
