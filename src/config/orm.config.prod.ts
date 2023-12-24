import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export default ():TypeOrmModuleOptions => ({
    type: 'mysql',
    host:  process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [],
    synchronize: false,
})