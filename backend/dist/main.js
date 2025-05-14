"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const shared_orm_1 = require("shared-orm");
const cors = require("cors");
async function bootstrap() {
    await (0, shared_orm_1.initializeDatabase)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map