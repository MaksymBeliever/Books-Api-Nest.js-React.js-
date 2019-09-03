import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user.service';
import { Injectable } from '@nestjs/common';
import { AuthUser } from 'src/models/auth/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    ) {}

  async validateUser(user: string, pass: string): Promise<AuthUser> {
    const validetedUser = await this.usersService.findOneByUsername(user);
    if (validetedUser && validetedUser.password === pass) {
      const { password, ...result } = validetedUser;
      return result;
    }
    return null;
  }

   getToken(user: AuthUser): string {
        const payload: any = {};
        payload.username = user.username;
        payload.password = user.password ;

        const accessToken: string = this.jwtService.sign(payload);
        return accessToken;
      }

}
