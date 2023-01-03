const db = require("../database/models");
const User = db.User;

const controller = {
  listAll: async function (req, res) {
    const users = await User.findAll();
    res.json(users);
  },
  listDetailed: async function (req, res){
    const { id } = req.params
    const user = await User.findOne({where: {id} })
    res.json(user)
  }
};

module.exports = controller;
