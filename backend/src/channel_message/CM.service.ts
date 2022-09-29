import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Channel } from '../Entitys/channel.entity';
import { ChannelMessage } from '../Entitys/channel.message.entity';
import { User } from '../Entitys/user.entity';
import { ChannelMessageRepository } from '../repository/channel.message.repository';

@Injectable()
export class ChannelMessageService {
  constructor(
    @InjectRepository(ChannelMessageRepository)
    private CMRepository: ChannelMessageRepository,
  ) {}

  async getMessageLimit50(channel :Channel) : Promise<ChannelMessage[] | undefined> {
    return await this.CMRepository.getDescLimit50ByChannel(channel);
  }

  async addMessage(user :User, channel :Channel, message :String) : Promise<ChannelMessage>{
    return await this.CMRepository.addMessage(user, channel, message);
  }

}
