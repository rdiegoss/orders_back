/**
 * Product.js
 *
 * @description :: Model for Product
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
    },
    price: {
      type: 'float'
    }
  },

  add: (obj) => {
   return Products.create(obj);
  },

  findById: (id) => {
    return Products.findOne(id);
  },

  getAll: () => {
    return Products.find();
  }

};

