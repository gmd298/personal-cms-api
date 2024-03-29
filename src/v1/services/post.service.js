import Post from '../models/post.model';
import Admin from '../models/admin.model';
import { parseBool } from '../../util';

const create = async (title, subtitle, content, adminId, isFeatured) => {
  const post = await Post.create({
    title,
    subtitle,
    content,
    admin: adminId,
    isFeatured,
  });

  await Admin.findByIdAndUpdate(
    adminId,
    {
      $push: {
        posts: post.id,
      },
    },
    { new: true },
  );

  return post;
};

const read = async (featured) => {
  let searchParams = {};
  if (parseBool(featured) === true) {
    searchParams = { isFeatured: true };
  }
  const posts = await Post.find(searchParams);
  return posts;
};

const readOne = async (id) => {
  const post = await Post.findById(id).populate('admin');

  return post;
};

const update = async (id, title, subtitle, content, isFeatured) => {
  const params = {};

  if (title) {
    params.title = title;
  }

  if (subtitle) {
    params.subtitle = subtitle;
  }

  if (content) {
    params.content = content;
  }

  if (isFeatured !== undefined && isFeatured !== null) {
    params.isFeatured = isFeatured;
  }

  const post = await Post.findByIdAndUpdate(id, params, { new: true });
  return post;
};

const destroy = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  return post;
};

export default {
  create,
  read,
  readOne,
  update,
  destroy,
};
