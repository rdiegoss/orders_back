/**
 * ProductController
 *
 * @description :: Add and get all Products
 */

module.exports = {
  addProduct: (req, res) => {
    let obj = {
      name: req.param('name'),
      price: req.param('price')
    };
    let x = (product) => { return res.json(product) }
    return Products.add(obj).then(x);
  },

  getAllProducts: (req, res) => {
    let x = (prodct) => { return res.json(prodct) }
    return Products.getAll().then(x);
   }
};

