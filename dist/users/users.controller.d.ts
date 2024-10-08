import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { IUser } from "./users.interface";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOneById(id: string): "not found users" | import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
        _id: string;
    }> & {
        __v?: number;
    }, "findOne", {}>;
    update(updateUserDto: UpdateUserDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<"not found users" | {
        deleted: number;
    }>;
}
