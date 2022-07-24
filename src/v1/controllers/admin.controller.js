import { Router } from 'express';
import adminService from '../services/admin.service';

const adminRouter = Router();

/**
 * example body:
 *  {
 *    name: "John Doe",
 *    email: "john@example.com",
 *    password: "hello1234",
 *  }
 *
 * example response:
 *  {
 *    name: "John Doe",
 *    email: "john@example.com",
 *    id: 1234,
 *    createdAt: 1234,
 *    updatedAt: 1234,
 *  }
 */

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

export default adminRouter;
