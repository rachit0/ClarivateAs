import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';
import { sequelize } from 'shared-orm';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: sequelize.options.host,
      port: sequelize.options.port,
      username: sequelize.options.username,
      password: sequelize.options.password,
      database: sequelize.options.database,
      autoLoadModels: false,
      synchronize: false,
    }),
    ProductsModule,
  ],
  providers: [
    {
      provide: 'SEQUELIZE',
      useValue: sequelize,
    },
  ],
})
export class AppModule {}
