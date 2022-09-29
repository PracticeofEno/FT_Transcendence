import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { ChannelModule } from '../channel/channels.module';
import { ChannelsService } from '../channel/channels.service';
import { CMModule } from '../channel_message/CM.module';
import { ChannelMessageService } from '../channel_message/CM.service';
import { TypeOrmExModule } from '../database/typeorm-ex-module';
import { Channel } from '../Entitys/channel.entity';
import { ChannelMessage } from '../Entitys/channel.message.entity';
import { ChannelParticipant } from '../Entitys/channel.participant.entity';
import { User } from '../Entitys/user.entity';
import { ParticipantsModule } from '../participants/participants.module';
import { ParticipantsService } from '../participants/participants.service';
import { ChannelMessageRepository } from '../repository/channel.message.repository';
import { ChannelRepository } from '../repository/channel.repository';
import { ChannelParticipantRepository } from '../repository/participant.repository';
import { UserRepository } from '../repository/user.repository';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmExModule.forCustomRepository([UserRepository]),
    UsersModule,
  ],
  providers: [
    UsersService
  ],
})
export class CommandModule {}
