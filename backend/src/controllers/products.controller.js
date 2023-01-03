const db = require('../database/models');
const Product = db.Product;

const controller = {
  listAll: async function (req, res) {
    const products = await Product.findAll();
    res.json(products);
  },
  listDetailed: async function (req, res){
    const { id } = req.params
    const product = await Product.findOne({where: {id} })
    res.json(product)
  }
};

module.exports = controller;
