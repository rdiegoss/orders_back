/**
 * User.js
 *
 * @description :: Model for user 
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },
    name: {
      type: 'string'
    }
  },

  add: (obj) => {
   return Users.create(obj);
  },

  getAll: () => {
    return Users.find();
  }
};

