import mongoose, { HydratedDocument } from "mongoose";
import { Gender } from "src/helper/help.enum";
export type UserDocument = HydratedDocument<User>;
export declare class User {
    _id: string;
    name: string;
    email: string;
    password: string;
    age: number;
    gender: Gender;
    address: string;
    Company: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    role: string;
    refreshToken: string;
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    UpdatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    deletebBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & Required<{
    _id: string;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & Required<{
    _id: string;
}> & {
    __v?: number;
}>;
