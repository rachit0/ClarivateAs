import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product';
import { Category } from '../models/category';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Rachit72!',
  database: 'MyStore',
  models: [Product, Category], 
});

// Define associations immediately after registration
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
console.log('Product associations after setup:', Product.associations);
console.log('Category associations after setup:', Category.associations);

export async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    console.log('Product associations:', Product.associations);
    console.log('Category associations:', Category.associations);
  } catch (error) {
    console.error('Database connection failed', error);
  }
}

export { Product, Category, };