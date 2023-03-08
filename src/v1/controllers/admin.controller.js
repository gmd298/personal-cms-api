import { Router } from 'express';
import auth from '../middleware/auth';
import adminService from '../services/admin.service';

const adminRouter = Router();

adminRouter.post('/', auth, async (request, response) => {
  const {
    body: {
      name,
      email,
      password,
      isPrimary,
    },
  } = request;

  const newAdmin = await adminService.create(
    name,
    email,
    password,
    isPrimary,
  );

  response.json(newAdmin);
});

adminRouter.get('/', auth, async (request, response) => {
  const admins = await adminService.read();

  response.json(admins);
});

adminRouter.get('/:id', auth, async (request, response) => {
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

adminRouter.patch('/:id', auth, async (request, response) => {
  const {
    params: {
      id,
    },
    body: {
      name,
      email,
      isPrimary,
    },
  } = request;

  const updateAdmin = await adminService.update(
    id,
    name,
    email,
    isPrimary,
  );

  response.json(updateAdmin);
});

adminRouter.delete('/:id', auth, async (request, response) => {
  const {
    params: {
      id,
    },
  } = request;

  const deleteAdmin = await adminService.destroy(
    id,
  );
  response.json(deleteAdmin);
});

adminRouter.post('/login', async (request, response) => {
  const {
    body: {
      email,
      password,
    },
  } = request;

  const token = await adminService.login(email, password);

  if (token) {
    response.json(token);
  } else {
    response.status(401).json('unauthorized');
  }
});

export default adminRouter;
