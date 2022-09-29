import { CustomRepository } from '../database/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { DM } from '../Entitys/direct.message.entity';
import { User } from '../Entitys/user.entity';
import { ChannelMessage } from '../Entitys/channel.message.entity';
import { Channel } from '../Entitys/channel.entity';

@CustomRepository(ChannelMessage)
export class ChannelMessageRepository extends Repository<ChannelMessage> {

    async getDescLimit50ByChannel(channel: Channel) : Promise<ChannelMessage[] | undefined>{
        let data = await this.find({
            where: {
                channel: { id : channel.id}
            },
            order: { id: "ASC" },
            take: 5
        });
        return data;
    }

    async addMessage(user :User, channel :Channel, message: String) : Promise<ChannelMessage>{
        let cm = new ChannelMessage();
        cm.sender = user;
        cm.channel = channel;
        cm.message = message;
        cm = await this.save(cm);
        console.log(cm);
        return cm;
    }
}
