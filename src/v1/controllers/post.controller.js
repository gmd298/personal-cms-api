import { Router } from 'express';
import auth from '../middleware/auth';
import postService from '../services/post.service';

const postRouter = Router();

postRouter.post('/', auth, async (request, response) => {
  const {
    admin: {
      id: adminId,
    },
    body: {
      title,
      subtitle,
      content,
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

postRouter.patch('/:id', auth, async (request, response) => {
  const {
    params: {
      id,
    },
    body: {
      title,
      subtitle,
      content,
    },
  } = request;

  const updatePost = await postService.update(
    id,
    title,
    subtitle,
    content,
  );

  response.json(updatePost);
});

postRouter.delete('/:id', auth, async (request, response) => {
  const {
    params: {
      id,
    },
  } = request;

  const deletePost = await postService.destroy(
    id,
  );
  response.json(deletePost);
});

export default postRouter;
