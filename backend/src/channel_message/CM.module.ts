import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../database/typeorm-ex-module';
import { Channel } from '../Entitys/channel.entity';
import { ChannelMessage } from '../Entitys/channel.message.entity';
import { ChannelParticipant } from '../Entitys/channel.participant.entity';
import { User } from '../Entitys/user.entity';
import { ParticipantsService } from '../participants/participants.service';
import { ChannelMessageRepository } from '../repository/channel.message.repository';
import { ChannelParticipantRepository } from '../repository/participant.repository';
import { ChannelMessageService } from './CM.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChannelMessage, User, Channel]),
    TypeOrmExModule.forCustomRepository([ChannelMessageRepository]),
  ],
  controllers: [],
  providers: [
    ChannelMessageService,
  ],
})
export class CMModule {}
