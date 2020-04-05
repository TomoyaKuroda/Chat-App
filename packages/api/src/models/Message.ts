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
export class Message extends Model<Message> {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  })
  id: string;

  @AllowNull(false)
  @Column
  content: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Conversation)
  @Column
  conversationId: string;
}
