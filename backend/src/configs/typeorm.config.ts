import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "42-postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "test",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
};
