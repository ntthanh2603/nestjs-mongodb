import mongoose, { HydratedDocument } from "mongoose";
export type UserDocument = HydratedDocument<User>;
export declare class User {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: number;
    address: string;
    Company: {
        _id: mongoose.Schema.Types.ObjectId;
        name: string;
    };
    role: string;
    refreshToken: string;
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    UpdatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        name: string;
    };
    deletebBy: {
        _id: mongoose.Schema.Types.ObjectId;
        name: string;
    };
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
