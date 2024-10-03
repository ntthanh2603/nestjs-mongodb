import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    getHashPassword: (password: string) => any;
    create(createUserDto: CreateUserDto): Promise<mongoose.Document<unknown, {}, User> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }>;
    findOne(id: string): "not found users" | mongoose.Query<mongoose.Document<unknown, {}, User> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }, mongoose.Document<unknown, {}, User> & User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }, {}, User, "findOne", {}>;
    update(updateUserDto: UpdateUserDto): Promise<mongoose.UpdateWriteOpResult>;
}
