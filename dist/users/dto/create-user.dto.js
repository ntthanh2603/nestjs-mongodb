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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const help_enum_1 = require("../../helper/help.enum");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name not empty" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Email is not in correct format" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email not empty" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Password not empty" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Age not empty" }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Gender not empty" }),
    (0, class_validator_1.IsEnum)(help_enum_1.Gender, {
        message: "Invalid gender: 0 (Male), 1 (Female), 2 (Other)",
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Address not empty" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Role not empty" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
class RegisterUserDto {
}
exports.RegisterUserDto = RegisterUserDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name not empty" }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Email is not in correct format" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email not empty" }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Password not empty" }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Age not empty" }),
    __metadata("design:type", Number)
], RegisterUserDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Gender not empty" }),
    (0, class_validator_1.IsEnum)(help_enum_1.Gender, {
        message: "Invalid gender: 0 (Male), 1 (Female), 2 (Other)",
    }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Address not empty" }),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "address", void 0);
//# sourceMappingURL=create-user.dto.js.map