import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export default ():TypeOrmModuleOptions => ({
    type: 'mysql',
    host:  process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    //TODO remove hardcoded values:)
    username: 'root',
    password: 'example',
    entities: [],
    synchronize: true,
})