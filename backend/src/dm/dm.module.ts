import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../database/typeorm-ex-module';
import { DM } from '../Entitys/direct.message.entity';
import { User } from '../Entitys/user.entity';
import { DMRepository } from '../repository/DM.repository';
import { UserRepository } from '../repository/user.repository';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { DMService } from './dm.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DM]),
    TypeOrmExModule.forCustomRepository([DMRepository]),
  ],
  providers: [
    DMService
  ],
})
export class DMModule {}
