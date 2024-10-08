import { CreateUserDto } from "./create-user.dto";
import { Gender } from "src/helper/help.enum";
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    name?: string;
    email?: string;
    age?: number;
    gender?: Gender;
    address?: string;
    role?: string;
}
export {};
