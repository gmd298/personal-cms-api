import Admin from '../models/admin.model';

const create = async (name, email, password) => {
  const admin = await Admin.create({ name, email, password });
  return admin;
};

const read = async () => {
  const admins = await Admin.find({});
  return admins;
};

const readOne = async (id) => {
  const admins = await Admin.findById(id);
  return admins;
};

const update = async (id, name, email) => {
  const params = {};

  if (name) {
    params.name = name;
  }

  if (email) {
    params.email = email;
  }

  const admin = await Admin.findByIdAndUpdate(id, params, { new: true });
  return admin;
};

const destroy = async (id) => {
  const admin = await Admin.findByIdAndDelete(id);
  return admin;
};

export default {
  create,
  read,
  readOne,
  update,
  destroy,
};
