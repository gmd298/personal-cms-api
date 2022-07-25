import { Router } from 'express';
import postService from '../services/post.service';

const postRouter = Router();

postRouter.post('/', async (request, response) => {
  const {
    body: {
      title,
      subtitle,
      content,
      adminId,
    },
  } = request;

  const newPost = await postService.create(
    title,
    subtitle,
    content,
    adminId,
  );

  response.json(newPost);
});

export default postRouter;
