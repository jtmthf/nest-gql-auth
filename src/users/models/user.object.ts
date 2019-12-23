import { Field, Int, ObjectType } from 'type-graphql';
import { UserEntity } from '../user.entity';

@ObjectType()
export class User {
  @Field(type => Int)
  id!: number;

  @Field()
  username!: string;

  constructor(obj: Partial<User>) {
    Object.assign(this, obj);
  }

  static from(entity: UserEntity) {
    return new User(entity);
  }
}
