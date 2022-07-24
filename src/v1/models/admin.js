/* eslint-disable no-param-reassign */

import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  role: {
    type: String,
    enum: [
      'editor',
      'super',
    ],
    required: true,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
}, {
  timestamps: true,
  outputOptions: {
    toJSON: {
      transform: (_, result) => {
        delete result.password;
      },
    },
  },
});

export default mongoose.model('Admin', adminSchema);
