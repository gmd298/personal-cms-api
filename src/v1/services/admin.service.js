import Admin from '../models/admin.model';

const create = async (name, email, password) => {
  const admin = await Admin.create({ name, email, password });
  return admin;
};

const read = async () => {
  const admins = await Admin.find({});
  return admins;
};

export default {
  create,
  read,
};
