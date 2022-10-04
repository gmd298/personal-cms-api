import mongoose from 'mongoose';
import Chance from 'chance';
import adminService from '../../src/v1/services/admin.service';
import postService from '../../src/v1/services/post.service';
import { dbUrl } from '../../src/config';
import logger from '../../src/config/logger';

const chance = new Chance();

const run = async () => {
  logger.info('connecting to mongoose...');
  await mongoose.connect(dbUrl);
  logger.success('successfully connected to mongo');

  logger.info('clearing database...');
  // await Promise.all(mongoose.connection.collections.array.map((collection)
  // => collection.drop()));
  const { collections } = mongoose.connection;
  await Promise.all(
    Object.values(collections).map((c) => c.deleteMany()),
  );
  logger.info('starting seed...');

  logger.info('creating admins...');
  const admin = await adminService.create('Griffin', 'gmd298@gmail.com', 'password');

  logger.info('creating posts');
  await Promise.all([0, 0, 0, 0, 0].map(() => postService.create(
    chance.sentence(),
    chance.sentence(),
    [{ contentType: 'text', url: chance.url(), text: chance.paragraph() }],
    admin.id,
  )));

  logger.success('seeded database :)');
};

run();
