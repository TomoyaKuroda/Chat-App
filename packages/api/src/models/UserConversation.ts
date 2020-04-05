import {
  Table,
  DataType,
  Column,
  Model,
  AllowNull,
  BelongsTo,
  ForeignKey
} from "sequelize-typescript";

import { Conversation } from "./Conversation";
import { User } from "./User";

@Table({ paranoid: true })
export class UserConversation extends Model<UserConversation> {
  @ForeignKey(() => User)
  @Column
  userId: string;

  @ForeignKey(() => Conversation)
  @Column
  conversationId: string;
}
