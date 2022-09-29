import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../database/typeorm-ex-module';
import { MatchHistory } from '../Entitys/match.history.entity';
import { User } from '../Entitys/user.entity';
import { MatchHistoryRepository } from '../repository/match.history.repository';
import { ChannelParticipantRepository } from '../repository/participant.repository';
import { UserRepository } from '../repository/user.repository';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { MatchHistorysController } from './history.controller';
import { MatchHistorysService } from './history.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MatchHistory, User]),
    TypeOrmExModule.forCustomRepository([MatchHistoryRepository, UserRepository]),
  ],
  controllers: [MatchHistorysController],
  providers: [
    MatchHistorysService,
    UsersService,
  ],
})
export class MatchHistoryModule {}
