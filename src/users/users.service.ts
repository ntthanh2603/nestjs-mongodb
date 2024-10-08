import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto, RegisterUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import mongoose from "mongoose";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { SoftDeleteModel } from "soft-delete-plugin-mongoose";
import { IUser } from "./users.interface";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>
  ) {}

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  // async create(cretedUserDto: CreateUserDto, user: IUser) {
  //   const { name, email, password, age, gender, address, role } = cretedUserDto;

  //   const isExist = await this.userModel.findOne({ email });
  //   if (isExist) {
  //     throw new BadRequestException(`Email: ${email} already exists`);
  //   }

  //   const hashPassword = this.getHashPassword(password);
  //   let newRegister = await this.userModel.create({
  //     name,
  //     email,
  //     password: hashPassword,
  //     age,
  //     gender,
  //     address,
  //     role,
  //     createdBy: {
  //       _id: user._id,
  //       email: user.email,
  //     },
  //   });

  //   return newRegister;
  // }

  async register(user: RegisterUserDto) {
    const { name, email, password, age, gender, address } = user;

    const isExist = await this.userModel.findOne({ email });
    if (isExist) {
      throw new BadRequestException(`Email: ${email} already exists`);
    }

    const hashPassword = this.getHashPassword(password);
    let newRegister = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role: "USER",
    });

    return newRegister;
  }

  findOneById(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) return `not found users`;

    return this.userModel.findOne({ _id: id });
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { _id: updateUserDto._id },
      { ...updateUserDto }
    );
  }

  // Delete user
  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) return `not found users`;

    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      }
    );
    return this.userModel.softDelete({ _id: id });
  }

  findOneByUserEmail(userEmail: string) {
    return this.userModel.findOne({ email: userEmail });
  }
}
