import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  age: number;

  @Prop()
  gender: number;

  @Prop()
  address: string;

  @Prop({ type: Object})
  Company: {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
  }

  @Prop()
  role: string;

  @Prop()
  refreshToken: string;

  @Prop({ type: Object})
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  }

  @Prop({ type: Object})
  UpdatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
  }

  @Prop({ type: Object})
  deletebBy: {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
  }

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
