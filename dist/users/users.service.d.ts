import { RegisterUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "./schemas/user.schema";
import mongoose from "mongoose";
import { SoftDeleteModel } from "soft-delete-plugin-mongoose";
import { IUser } from "./users.interface";
export declare class UsersService {
    private userModel;
    constructor(userModel: SoftDeleteModel<UserDocument>);
    getHashPassword: (password: string) => any;
    isValidPassword(password: string, hash: string): any;
    register(user: RegisterUserDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }>;
    findOneById(id: string): "not found users" | mongoose.Query<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, {}, mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, "findOne", {}>;
    update(updateUserDto: UpdateUserDto): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<"not found users" | {
        deleted: number;
    }>;
    findOneByUserEmail(userEmail: string): mongoose.Query<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, {}, mongoose.Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, "findOne", {}>;
}
