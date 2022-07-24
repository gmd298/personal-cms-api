import { Router } from 'express';
import adminRouter from './controllers/admin.controller';

const v1Router = Router();

v1Router.use('/admins', adminRouter);

export default v1Router;
