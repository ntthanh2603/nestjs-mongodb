import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { IUser } from "./users.interface";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUser(currentPage: string, limit: string, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
            _id: string;
        }> & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
            _id: string;
        }> & {
            __v?: number;
        })[];
    }>;
    findOneById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & Required<{
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
    update(updateUserDto: UpdateUserDto, user: IUser): Promise<{
        result: import("mongoose").UpdateWriteOpResult;
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
}
