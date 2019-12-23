import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  findByUsername(
    username: string,
    select?: string[],
  ): Promise<UserEntity | undefined> {
    return this.repository.findOne({
      where: { username },
      select: UserEntity.filterSelect(select),
      relations: ['authorities'],
    });
  }
}
