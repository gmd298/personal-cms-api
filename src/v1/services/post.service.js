import Post from '../models/post.model';
import Admin from '../models/admin.model';

const create = async (title, subtitle, content, adminId) => {
  const post = await Post.create({
    title,
    subtitle,
    content,
    admin: adminId,
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

const read = async () => {
  const posts = await Post.find({});
  return posts;
};

const readOne = async (id) => {
  const post = await Post.findById(id).populate('admin');

  return post;
};

export default {
  create,
  read,
  readOne,
};
