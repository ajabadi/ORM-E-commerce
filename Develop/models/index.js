// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// A Product belongs to a single Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// A Category can have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// A Product can belong to many Tags
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// A Tag can belong to many Products
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
