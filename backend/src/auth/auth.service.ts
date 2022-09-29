import { HttpService } from "@nestjs/axios";
import { Injectable, Response, Body, HttpStatus, HttpException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { firstValueFrom } from "rxjs";
import { UsersService } from "../users/users.service";
import { jwtConstants } from "./jwt/constants";

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService, private jwtService: JwtService) {}

  //해당 access_code로부터 리소스아이디를 가져옴, 에러나면 -1
  async getResourceOwnerId(code: string): Promise<string> {
    try {
      const resp = await firstValueFrom(
        this.httpService.post(
          "https://api.intra.42.fr/oauth/token",
          {
            grant_type: "authorization_code",
            client_id: "5c3d2a6bf104844ea4f78c93f23d1e1450574b0a9fc25f09192235fd29667651",
            client_secret: "b3f335d840c746f08e0cca53bf4b18ef0c307983103ba6a0ad6d0b1af44692c4",
            code: code,
            redirect_uri: "http://localhost:8080/auth/",
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
      );

      if (resp.status == 200) {
        const ret = await firstValueFrom(
          this.httpService.get("https://api.intra.42.fr/oauth/token/info", {
            headers: {
              Authorization: "Bearer " + resp.data.access_token,
            },
          })
        );
        if (ret.status == 200) return ret.data.resource_owner_id;
        else return "-1";
      } else {
        return "-1";
      }
    } catch (error) {
      return "-1";
    }
  }

  async sign(payload: Object) {
    const jwt = await this.jwtService.sign(payload);
    return jwt;
  }

  async jwtVerify(token: string): Promise<Object> {
    try {
      const ret = await this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });
      return ret;
    } catch (e) {
      new HttpException("Token Expired Error", 409);
    }
  }
}
