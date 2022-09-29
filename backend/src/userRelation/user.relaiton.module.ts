import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../database/typeorm-ex-module';
import { UserRelation } from '../Entitys/user.relaiton.entity';
import { UserRelationRepository } from '../repository/user.relation.repository';
import { UserRelationService } from './user.relaiton.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRelation]),
    TypeOrmExModule.forCustomRepository([UserRelationRepository]),
  ],
  controllers: [],
  providers: [
    UserRelationService,
  ],
})
export class UserRelationModule {}
