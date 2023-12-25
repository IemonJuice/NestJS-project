import { Module } from '@nestjs/common';

import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.config.prod';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    SharedModule,
    ModulesModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
