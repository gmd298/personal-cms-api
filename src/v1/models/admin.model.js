/* eslint-disable no-param-reassign */

import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  isPrimary: Boolean,
  password: String,
  role: {
    type: String,
    enum: [
      'editor',
      'super',
    ],
    required: true,
    default: 'editor',
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (_, result) => {
      delete result.password;
    },
  },
});

export default mongoose.model('Admin', adminSchema);
