/* eslint-disable no-param-reassign */

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  content: [{
    contentType: {
      type: String,
      enum: [
        'text',
        'image',
        'external',
      ],
    },
    url: String,
    text: String,
  }],
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (_, result) => {
      delete result.password;
    },
  },
});

export default mongoose.model('Post', postSchema);
