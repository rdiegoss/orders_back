/**
 * OrderController
 *
 * @description :: Add, update and get Orders 
 */

module.exports = {

  addOrder: (req, res) => {
    let obj = {
      product_id: req.param('product_id'),
      user_id: req.param('user_id'),
      quantity: req.param('quantity')
    };
    let x = (order) => { return res.json(order) }
    return Orders.add(obj).then(x);
  },

  updateOrder: (req, res) => {
    let id = req.param('id')
    let obj = {
      user_id: req.param('user_id'),
      product_id: req.param('product_id'),
      quantity: req.param('quantity')
    };

    if (!id) {
      return res.ok('Missing parameter ID');
    }
    let x = (order) => { return res.json(order) }
    return Orders.updat(id, obj).then(x);
  },

  removeOrder: (req, res) => {
    let id = req.param('id');
    if (!id) {
      return res.ok('Missing parameter ID');
    }
    let x = (order) => { return res.json(order) }
    return Orders.remove(id).then(x);
  },

  getAllOrders: (req, res) => {
    let x = (order) => { 
      return res.json(order) 
    }
     return Orders.getAll().then(x);
    }
  };

