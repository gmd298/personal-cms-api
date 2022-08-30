import jwt from 'jsonwebtoken';
import { jwtSecret } from '../../config';

const auth = (request, response, next) => {
  const {
    headers: {
      token,
    },
  } = request;

  if (!token) {
    return response.status(401).json('no token provided');
  }

  try {
    const { admin } = jwt.verify(token, jwtSecret);

    request.admin = admin;

    return next();
  } catch (error) {
    return response.status(401).json('token verification failed');
  }
};

export default auth;
