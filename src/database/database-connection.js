const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'MyStore',
});

const Product = require('../models/product')(sequelize);
const Category = require('../models/category')(sequelize);

Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed', error);
  }
}

module.exports = { sequelize, Product, Category, initializeDatabase };