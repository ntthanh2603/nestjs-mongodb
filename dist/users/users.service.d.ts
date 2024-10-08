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
    findUserById(id: string): mongoose.Query<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, User> & User & Required<{
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
    update(updateUserDto: UpdateUserDto, user: IUser): Promise<{
        result: mongoose.UpdateWriteOpResult;
        updatedBy: {
            _id: string;
            email: string;
        };
    }>;
    remove(id: string, user: IUser): Promise<{
        result: {
            deleted: number;
        };
        deletedBy: {
            _id: string;
            email: string;
        };
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
