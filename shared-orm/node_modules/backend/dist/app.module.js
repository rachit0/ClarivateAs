"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const products_module_1 = require("./products/products.module");
const shared_orm_1 = require("shared-orm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: shared_orm_1.sequelize.options.host,
                port: shared_orm_1.sequelize.options.port,
                username: shared_orm_1.sequelize.options.username,
                password: shared_orm_1.sequelize.options.password,
                database: shared_orm_1.sequelize.options.database,
                autoLoadModels: false,
                synchronize: false,
            }),
            products_module_1.ProductsModule,
        ],
        providers: [
            {
                provide: 'SEQUELIZE',
                useValue: shared_orm_1.sequelize,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map