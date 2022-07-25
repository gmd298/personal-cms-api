import { Router } from 'express';
import adminRouter from './controllers/admin.controller';
import postRouter from './controllers/post.controller';

const v1Router = Router();

v1Router.use('/admins', adminRouter);
v1Router.use('/posts', postRouter);

export default v1Router;
