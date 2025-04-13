import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './environments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      envFilePath: enviroments[process.env.NODE_ENV || 'dev'] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required().default(5432),
      }),
    }),
    HttpModule,
    UsersModule,
    ProductsModule,
    CategoriesModule,
    BrandsModule,
    CustomerModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (httpService: HttpService) => {
        const request = httpService.get(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const tasks = await lastValueFrom(request);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
