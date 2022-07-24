import Admin from '../models/admin.model';

const create = async (name, email, password) => {
  const admin = await Admin.create({ name, email, password });
  return admin;
};

export default {
  create,
};
