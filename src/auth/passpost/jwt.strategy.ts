import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import ms from "ms";
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_ACCESS_TOKEN'),
    });
  }

  // async validate(payload: any) {
  //   return {
  //     _id: payload._id,
  //     email: payload.email,
  //     name: "test",
  //   };
  // }

  async validate(payload: any) {
    const user = await this.usersService.findOneByUserEmail(payload.username);
    
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      _id: user._id,
      email: user.email,
    };
  }
}
