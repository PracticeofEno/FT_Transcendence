import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRelationRepository } from '../repository/user.relation.repository';
import { User } from '../Entitys/user.entity';
import { UserRelationType } from '../util';
import { UserRelation } from '../Entitys/user.relaiton.entity';

@Injectable()
export class UserRelationService {
  constructor(
    @InjectRepository(UserRelationRepository)
    private userRelationRepository: UserRelationRepository,
  ) {}


  async setFriend(from: User, to: User) : Promise<UserRelation> {
    return await this.userRelationRepository.setRelaiton(from, to, UserRelationType.FRIEND);
  }

  async setBlock(from: User, to: User) : Promise<UserRelation>{
    return await this.userRelationRepository.setRelaiton(from, to, UserRelationType.BLOCK);
  }

  async deleteRelation(from : User, to : User) {
    await this.userRelationRepository.deleteRelation(from, to);
  }

  async getFrinedsByUser(user: User) {
    return await this.userRelationRepository.getFrinedsByUser(user);
  }

  async getBlocksByUser(user: User) {
    return await this.userRelationRepository.getBlocksByUser(user);
  }
}
