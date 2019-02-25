const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
   // selects all
   async index(req, res){
      const {page = 1} = req.query
      const products = await Product.paginate({}, {page, limit: 10})
      return res.json(products)
   },


   // shows a single product
   async show(req,res){
      const product = await Product.findById(req.params.id)
      return res.json(product)
   },

   // inserts a product
   async store(req, res){
      const product = await Product.create(req.body)
      return res.json(product)
   },


   // receives ID and changes the selected parameters
   async update(req, res){
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
      return res.json(product)
   },

   // deletes by id
   async destroy(req, res){
      await Product.findByIdAndRemove(req.params.id)
      return res.send()
   }
}
