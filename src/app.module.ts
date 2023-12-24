import {Module} from '@nestjs/common';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {ModulesModule} from './modules/modules.module';
import {DatabaseModule} from './database/database.module';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import ormConfig from "./config/orm.config";
import ormConfigProd from "./config/orm.config.prod";

@Module({
    imports: [
        CoreModule,
        SharedModule,
        ModulesModule,
        DatabaseModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [ormConfig]
        }),
        TypeOrmModule.forRootAsync({
            useFactory: process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
