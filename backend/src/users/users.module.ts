import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TwoFactorAuthenticationService } from "../auth/2FA/twoFactorAuthentication.service";
import { AuthModule } from "../auth/auth.module";
import { JwtTwoFactorStrategy } from "../auth/jwt/jwt-two-factor.strategy";
import { ChattingGateway } from "../chatting/chatting.gateway";
import { ChattingModule } from "../chatting/chatting.module";
import { LoginUserGateway } from "../chatting/current.login.gateway";
import { TypeOrmExModule } from "../database/typeorm-ex-module";
import { DMModule } from "../dm/dm.module";
import { DMService } from "../dm/dm.service";
import { DM } from "../Entitys/direct.message.entity";
import { UserRelation } from "../Entitys/user.relaiton.entity";
import { DMRepository } from "../repository/DM.repository";
import { UserRelationRepository } from "../repository/user.relation.repository";
import { UserRelationModule } from "../userRelation/user.relaiton.module";
import { UserRelationService } from "../userRelation/user.relaiton.service";
import { User } from "../Entitys/user.entity";
import { UserRepository } from "../repository/user.repository";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([User, UserRelation, DM]),
		TypeOrmExModule.forCustomRepository([
			UserRepository,
			UserRelationRepository,
			DMRepository,
		]),
		MulterModule.register({
			dest: "./src/users/avatar",
		}),
		AuthModule,
		UserRelationModule,
		DMModule,
	],
	controllers: [UsersController],
	providers: [
		UsersService,
		UserRelationService,
		TwoFactorAuthenticationService,
		JwtTwoFactorStrategy,
		DMService,
	],
	exports: [UsersService],
})
export class UsersModule {}
