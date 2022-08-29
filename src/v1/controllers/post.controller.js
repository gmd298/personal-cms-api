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

postRouter.get('/', async (request, response) => {
  const posts = await postService.read();
  response.json(posts);
});

postRouter.get('/:id', async (request, response) => {
  const {
    params: {
      id,
    },
  } = request;

  const readPost = await postService.readOne(
    id,
  );

  response.json(readPost);
});

export default postRouter;
