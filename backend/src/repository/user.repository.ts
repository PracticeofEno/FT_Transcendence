import { NotFoundException, HttpException } from "@nestjs/common";
import { CustomRepository } from "../database/typeorm-ex.decorator";
import { UserStatusType } from "../util";
import { Repository } from "typeorm";
import { User } from "../Entitys/user.entity";

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async checkUser(id2: string): Promise<Boolean> {
    const found = await this.findOne({
      where: {
        id: id2,
      },
    });
    if (found) {
      return true;
    }
    return false;
  }

  async getUserById(id2: string): Promise<User> {
    const found = await this.findOne({
      where: {
        id: id2,
      },
    });
    if (!found) {
      throw new NotFoundException(`this is getuserById repository`);
    }
    return found;
  }

  async getUserByNickname(nickname2: string): Promise<User | undefined> {
    const found = await this.findOne({
      where: {
        nickname: nickname2,
      },
    });
    return found;
  }

  async createUser(userid: string): Promise<User> {
    let user;
    const found = await this.findOne({
      where: {
        id: userid,
      },
    });
    if (!found) {
      user = new User();
      user.id = userid;
      user.nickname = "";
      user.win = 0;
      user.email = "";
      user.lose = 0;
      user.admin = false;
      user.avatarPath = "/api/users/avatar/profile" + Math.floor(Math.random() * 4);
      user.lating = 1000;
      user.twoFactorAuthenticationSecret = "";
      user.isTwoFactorAuthenticationEnabled = false;
      user.ladder_win = 0;
      user.ladder_lose = 0;
      user.status = 0;
      console.log("create user");
      await this.save(user);
    } else {
      throw new HttpException("Exist id", 409);
    }
    return user;
  }

  async updateNickname(nick: string, userid: string): Promise<User> {
    let user;
    user = await this.getUserById(userid);
    user.nickname = nick;
    this.update(userid, user);
    console.log("save complete");
    return user;
  }

  async getOwnerChannel(userid: string): Promise<User> {
    let haha = await this.findOne({
      where: {
        id: userid,
      },
      relations: ["channels"],
    });
    return haha;
  }

  async updateStatus(user: User, type: UserStatusType): Promise<User> {
    user.status = type;
    this.update(user.id, user);
    return user;
  }

  async getCurrentLoginUser(): Promise<User[]> {
    let current_login_user = await this.find({
      order: { id: "ASC" },
    });
    return current_login_user;
  }

  async changeDefaultAvatar(user: User, number: number): Promise<User> {
    number = number % 4;
    user.avatarPath = "/api/users/avatar/profile" + number;
    this.update(user.id, user);
    return user;
  }

  async updateAvatarPath(user: User, path: string): Promise<User> {
    user.avatarPath = path;
    this.update(user.id, user);
    return user;
  }

  async getRankinglist(): Promise<User[]> {
    let list = await this.find({
      order: { lating: "desc" },
      take: 50,
    });
    return list;
  }

  async updateLadderGameRecord(user: User): Promise<User> {
    this.update(user.id, user);
    return user;
  }

  async updateNormalGameRecord(user: User): Promise<User> {
    this.update(user.id, user);
    return user;
  }

  async checkEmail(email : string) : Promise<User> {
    let data = await this.findOne({
      where: {
        email: email
      },
    });
    return data;
  }
}
