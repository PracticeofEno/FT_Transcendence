import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelMessageService } from '../channel_message/CM.service';
import { TypeOrmExModule } from '../database/typeorm-ex-module';
import { Channel } from '../Entitys/channel.entity';
import { ChannelMessage } from '../Entitys/channel.message.entity';
import { ChannelParticipant } from '../Entitys/channel.participant.entity';
import { User } from '../Entitys/user.entity';
import { ParticipantsModule } from '../participants/participants.module';
import { ParticipantsService } from '../participants/participants.service';
import { ChannelMessageRepository } from '../repository/channel.message.repository';
import { ChannelParticipantRepository } from '../repository/participant.repository';
import { UserRepository } from '../repository/user.repository';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { ChannelRepository } from '../repository/channel.repository';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Channel, User,ChannelParticipant, ChannelMessage]),
    TypeOrmExModule.forCustomRepository([ChannelRepository, UserRepository, ChannelParticipantRepository, ChannelMessageRepository]),
    UsersModule,
    ParticipantsModule,
  ],
  controllers: [ChannelsController],
  providers: [
    ChannelsService,
    UsersService,
    ParticipantsService,
    ChannelMessageService
  ],
})
export class ChannelModule {}
