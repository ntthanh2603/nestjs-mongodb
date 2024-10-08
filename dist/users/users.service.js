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
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.getHashPassword = (password) => {
            const salt = (0, bcryptjs_1.genSaltSync)(10);
            const hash = (0, bcryptjs_1.hashSync)(password, salt);
            return hash;
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
    findOneById(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return `not found users`;
        return this.userModel.findOne({ _id: id });
    }
    async update(updateUserDto) {
        return await this.userModel.updateOne({ _id: updateUserDto._id }, { ...updateUserDto });
    }
    async remove(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return `not found users`;
        await this.userModel.updateOne({ _id: id }, {
            deletedBy: {
                _id: user._id,
                email: user.email,
            },
        });
        return this.userModel.softDelete({ _id: id });
    }
    findOneByUserEmail(userEmail) {
        return this.userModel.findOne({ email: userEmail });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map