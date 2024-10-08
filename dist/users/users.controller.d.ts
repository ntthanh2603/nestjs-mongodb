import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, "findOne", {}> | "not found users";
    update(updateUserDto: UpdateUserDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): "not found users" | Promise<{
        deleted: number;
    }>;
}
