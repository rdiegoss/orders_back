/**
 * UserController
 *
 * @description :: Add and get all Users
 */

module.exports = {
  addUser: (req, res) => {
    let obj = {
      name: req.param('name')
    };

    let x = (user) => { return res.json(user) }
    return Users.add(obj).then(x);
  },

	getAllUsers: (req, res) => {
    let x = (usr) => { return res.json(usr) }
    return Users.getAll().then(x);
  }
};

