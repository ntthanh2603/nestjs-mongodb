import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Public, ResponseMessage, User } from "src/decorator/customize";
import { IUser } from "./users.interface";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Get all user
  @Get("/all")
  @ResponseMessage("Fetch user with paginate")
  getAllUser(
    @Query("page") currentPage: string,
    @Query("limit") limit: string,
    @Query() qs: string
  ) {
    return this.usersService.getAllUser(+currentPage, +limit, qs);
  }

  // Find user by Id
  @Public()
  @Get(":id")
  @ResponseMessage("User by Id")
  findOneById(@Param("id") id: string) {
    return this.usersService.findUserById(id);
  }

  // Update user
  @Patch()
  @ResponseMessage("User updated")
  update(@Body() updateUserDto: UpdateUserDto, @User() user: IUser) {
    return this.usersService.update(updateUserDto, user);
  }

  // Delete user with user
  @Delete(":id")
  @ResponseMessage("User deleted")
  remove(@Param("id") id: string, @User() user: IUser) {
    return this.usersService.remove(id, user);
  }
}
