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

Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });

export async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true }); // Creates tables (for local testing)
    console.log('Database connected and synced');
  } catch (error) {
    console.error('Database connection failed', error);
  }
}

export { Product, Category };