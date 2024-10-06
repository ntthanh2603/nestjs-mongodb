import mongoose, { HydratedDocument } from "mongoose";
export type CompanyDocument = HydratedDocument<Company>;
export declare class Company {
    name: string;
    address: string;
    description: string;
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
export declare const CompanySchema: mongoose.Schema<Company, mongoose.Model<Company, any, any, any, mongoose.Document<unknown, any, Company> & Company & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Company, mongoose.Document<unknown, {}, mongoose.FlatRecord<Company>> & mongoose.FlatRecord<Company> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
