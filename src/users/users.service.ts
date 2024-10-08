import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto, RegisterUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import mongoose from "mongoose";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { SoftDeleteModel } from "soft-delete-plugin-mongoose";
import { use } from "passport";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>) {}

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  async create(createUserDto: CreateUserDto) {
    const hashPassword = this.getHashPassword(createUserDto.password);

    let user = await this.userModel.create({
      email: createUserDto.email,
      password: hashPassword,
      name: createUserDto.name,
    });
    return user;
  }

  async register(user: RegisterUserDto) {
    const {name, email, password, age, gender, address } = user;

    const isExist = await this.userModel.findOne({email});
    if (isExist){
      throw new BadRequestException( `Email: ${email} already exists`);
    }

    const hashPassword = this.getHashPassword(password);
    let newRegister = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role: "USER"
    })
    
    return newRegister;
  }


  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) return `not found users`;

    return this.userModel.findOne({ _id: id });
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { _id: updateUserDto._id },
      { ...updateUserDto },
    );
  }

  remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) return `not found users`;

    return this.userModel.softDelete({ _id: id });
  }

  findOneByUserEmail(userEmail: string) {
    return this.userModel.findOne({ email: userEmail });
  }
}
