// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// product belongsTo 
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})
// categories have many products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
})
// products belongToMany Tags 
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
})
// tags belongToMany Products 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};