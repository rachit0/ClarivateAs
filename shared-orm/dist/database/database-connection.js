"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
product_1.Product.belongsTo(category_1.Category, { foreignKey: 'categoryId', as: 'category' });
category_1.Category.hasMany(product_1.Product, { foreignKey: 'categoryId', as: 'products' });
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            yield exports.sequelize.sync({ force: true }); // Creates tables (for local testing)
            console.log('Database connected and synced');
        }
        catch (error) {
            console.error('Database connection failed', error);
        }
    });
}
