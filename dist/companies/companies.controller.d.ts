import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { IUser } from 'src/users/users.interface';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    create(createCompanyDto: CreateCompanyDto, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/company.schemas").Company> & import("./schemas/company.schemas").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/company.schemas").Company> & import("./schemas/company.schemas").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): string;
    findOne(id: string): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/company.schemas").Company> & import("./schemas/company.schemas").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/company.schemas").Company> & import("./schemas/company.schemas").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/company.schemas").Company> & import("./schemas/company.schemas").Company & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, "updateOne", {}>;
    update(id: string, updateCompanyDto: UpdateCompanyDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): string;
}
