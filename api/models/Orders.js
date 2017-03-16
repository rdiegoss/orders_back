/**
 * Order.js
 *
 * @description :: Model for Order
 */

let Users = require('./Users');
let Products = require('./Products');
let _ = require('lodash');

module.exports = {

  attributes: {
    id: {
      type: 'INTEGER',
      primaryKey: true,
      unique: true
    },
    product_id: {
      type: 'INTEGER'
    },
    user_id: {
      type: 'INTEGER'
    },
    date: {
      type: 'DATE'
    },
    quantity: {
      type: 'INTEGER'
    }
  },
  autoCreatedAt: true,
  autoUpdatedAt: true,


  add: (obj) => {
   return Orders.create(obj);
  },

  updat: (id, obj) => {
    return Orders.update({id: id}, obj);
  },

  remove: (id) => {
    return Orders.destroy(id);
  },

  getAll: () => {
    let arrayReturn = [];

      return Orders.find().then((orders) => {
       return Users.getAll().then((users) => {
         return Products.getAll().then((products) => {
           orders.forEach((value, index) => {
             let obj = {
               id: null,
               name: null,
               user_id: null,
               product_id: null,
               product: null,
               date: null,
               price: null
             };
              _.filter(users, (usr) => {
                if (usr.id == value.user_id) { obj.name = usr.name }
              }); 

              _.filter(products, (product) => {
                if (product.id == value.product_id) { 
                  obj.product = product.name;
                  obj.price = product.price * value.quantity
                } 
              })
              let date = value.createdAt;
              let month = '' + (date.getMonth() + 1);
              let day = '' + date.getDate();
              let year = date.getFullYear();

              if (month.length < 2) month = '0' + month;
              if (day.length < 2) day = '0' + day;

              date =  [year, month, day].join('-');
              obj.date = date.substring(0,10);
              obj.id = value.id;
              obj.user_id = value.user_id;
              obj.product_id = value.product_id;
              obj.quantity = value.quantity;
              arrayReturn.push(obj);
          });
          return arrayReturn;
        });
      });
      
    });
    
  }

};

