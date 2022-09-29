import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../database/typeorm-ex-module';
import { ChannelParticipant } from '../Entitys/channel.participant.entity';
import { ParticipantsService } from '../participants/participants.service';
import { ChannelParticipantRepository } from '../repository/participant.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChannelParticipant]),
    TypeOrmExModule.forCustomRepository([ChannelParticipantRepository]),
  ],
  controllers: [],
  providers: [
    ParticipantsService,
  ],
})
export class ParticipantsModule {}
