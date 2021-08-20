// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsToMany } = require('./Product');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
  foreignKey: "category_id"
});

// Categories have many Products
Category.hasMany(Product, {
  // Define the third table needed to store the foreign keys
  foreignKey: "category_id",
  onDelete: "CASCADE"
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag
  }
})



// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
