"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.Product = exports.sequelize = void 0;
exports.initializeDatabase = initializeDatabase;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_1 = require("../models/product");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return product_1.Product; } });
const category_1 = require("../models/category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return category_1.Category; } });
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Rachit72!',
    database: 'MyStore',
    models: [product_1.Product, category_1.Category],
});
// Define associations immediately after registration
product_1.Product.belongsTo(category_1.Category, { foreignKey: 'categoryId', as: 'category' });
category_1.Category.hasMany(product_1.Product, { foreignKey: 'categoryId', as: 'products' });
console.log('Product associations after setup:', product_1.Product.associations);
console.log('Category associations after setup:', category_1.Category.associations);
async function initializeDatabase() {
    try {
        await exports.sequelize.authenticate();
        console.log('Database connected');
        console.log('Product associations:', product_1.Product.associations);
        console.log('Category associations:', category_1.Category.associations);
    }
    catch (error) {
        console.error('Database connection failed', error);
    }
}
