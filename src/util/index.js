/* eslint-disable import/prefer-default-export */

export const parseBool = (value) => {
  switch (value) {
    case 'true':
      return true;
    default:
      return false;
  }
};
