"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_2 = __importDefault(require("mongoose"));
const bcryptjs_1 = require("bcryptjs");
const api_query_params_1 = __importDefault(require("api-query-params"));
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.getHashPassword = (password) => {
            const salt = (0, bcryptjs_1.genSaltSync)(10);
            const hash = (0, bcryptjs_1.hashSync)(password, salt);
            return hash;
        };
        this.updateUserToken = (refreshToken, _id) => {
            return this.userModel.updateOne({ _id }, { refreshToken });
        };
        this.findUserByToken = async (refreshToken) => {
            return await this.userModel.findOne({ refreshToken });
        };
    }
    isValidPassword(password, hash) {
        return (0, bcryptjs_1.compareSync)(password, hash);
    }
    async register(user) {
        const { name, email, password, age, gender, address } = user;
        const isExist = await this.userModel.findOne({ email });
        if (isExist) {
            throw new common_1.BadRequestException(`Email: ${email} already exists`);
        }
        const hashPassword = this.getHashPassword(password);
        let newRegister = await this.userModel.create({
            name,
            email,
            password: hashPassword,
            age,
            gender,
            address,
            role: "USER",
        });
        return newRegister;
    }
    findUserById(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException("User not found");
        return this.userModel.findOne({ _id: id }).select("-password");
    }
    async update(updateUserDto, user) {
        let result = await this.userModel.updateOne({ _id: updateUserDto._id }, {
            ...updateUserDto,
            updatedBy: {
                _id: user._id,
                email: user.email,
            },
        });
        return {
            result,
            updatedBy: {
                _id: user._id,
                email: user.email,
            },
        };
    }
    async remove(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException("Not found id user");
        await this.userModel.updateOne({ _id: id }, {
            deletedBy: {
                _id: user._id,
                email: user.email,
            },
        });
        let result = await this.userModel.softDelete({ _id: id });
        return {
            result,
            deletedBy: {
                _id: user._id,
                email: user.email,
            },
        };
    }
    findOneByUserEmail(userEmail) {
        return this.userModel.findOne({ email: userEmail });
    }
    async getAllUser(current, pageSize, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+current - 1) * +pageSize;
        let defaultLimit = +pageSize ? +pageSize : 10;
        const totalItems = (await this.userModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.userModel
            .find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select("-password")
            .populate(population)
            .exec();
        return {
            meta: {
                current: current,
                pageSize: pageSize,
                pages: totalPages,
                total: totalItems,
            },
            result,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map