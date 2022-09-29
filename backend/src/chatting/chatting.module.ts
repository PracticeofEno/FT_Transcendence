import { HttpModule } from "@nestjs/axios";
import { Module, Global } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { AuthService } from "../auth/auth.service";
import { ChannelModule } from "../channel/channels.module";
import { ChannelsService } from "../channel/channels.service";
import { CMModule } from "../channel_message/CM.module";
import { ChannelMessageService } from "../channel_message/CM.service";
import { CommandModule } from "../command/command.module";
// import { CommandService } from "../command/command.service";
import { TypeOrmExModule } from "../database/typeorm-ex-module";
import { DMModule } from "../dm/dm.module";
import { DMService } from "../dm/dm.service";
import { Channel } from "../Entitys/channel.entity";
import { ChannelMessage } from "../Entitys/channel.message.entity";
import { ChannelParticipant } from "../Entitys/channel.participant.entity";
import { DM } from "../Entitys/direct.message.entity";
import { User } from "../Entitys/user.entity";
import { ParticipantsModule } from "../participants/participants.module";
import { ParticipantsService } from "../participants/participants.service";
import { ChannelMessageRepository } from "../repository/channel.message.repository";
import { ChannelRepository } from "../repository/channel.repository";
import { DMRepository } from "../repository/DM.repository";
import { ChannelParticipantRepository } from "../repository/participant.repository";
import { UserRepository } from "../repository/user.repository";
import { UsersModule } from "../users/users.module";
import { UsersService } from "../users/users.service";
import { ChattingGateway } from "./chatting.gateway";
import { LoginUserGateway } from "./current.login.gateway";
import { GameGateway } from "../game/game.gateway";
import { MatchHistorysService } from "../match_history/history.service";
import { MatchHistoryRepository } from "../repository/match.history.repository";
import { MatchHistory } from "../Entitys/match.history.entity";

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Channel, User, ChannelParticipant, ChannelMessage, DM, MatchHistory]),
    TypeOrmExModule.forCustomRepository([ChannelRepository, UserRepository, ChannelParticipantRepository, ChannelMessageRepository, DMRepository, MatchHistoryRepository]),
    AuthModule,
    ChannelModule,
    UsersModule,
    HttpModule,
    ParticipantsModule,
    CMModule,
    CommandModule,
    DMModule,
  ],
  providers: [ChattingGateway, AuthService, ChannelsService, UsersService, ParticipantsService, LoginUserGateway, ChannelMessageService, DMService, GameGateway, MatchHistorysService],
  exports: [ChattingGateway, LoginUserGateway, GameGateway],
})
export class ChattingModule {}
