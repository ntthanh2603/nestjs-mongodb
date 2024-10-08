import { Controller, Get, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Public, ResponseMessage, User } from "src/decorator/customize";
import { IUser } from "./users.interface";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Get user by Id
  @Public()
  @Get(":id")
  findOneById(@Param("id") id: string) {
    return this.usersService.findOneById(id);
  }

  // Update user
  @Patch()
  @ResponseMessage("User updated")
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  // Delete user with user
  @Delete(":id")
  @ResponseMessage("User deleted")
  remove(@Param("id") id: string, @User() user: IUser) {
    console.log(user);
    return this.usersService.remove(id, user);
  }
}
