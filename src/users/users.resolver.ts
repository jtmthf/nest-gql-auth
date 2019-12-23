import { Resolver, Query, Args, Info } from '@nestjs/graphql';
import { User } from './models/user.object';
import { UsersService } from './users.service';
import { Fields } from '../common/decorators';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { nullable: true })
  async user(
    @Args({ name: 'username', type: () => String }) username: string,
    @Fields() fields: string[],
  ): Promise<User | undefined> {
    return this.usersService.findByUsername(username, fields);
  }
}
