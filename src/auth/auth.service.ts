import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(userEmail: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUserEmail(userEmail);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password);
            if (isValid == true) {
                return user;
            }
        }
        return null;
      }
}
