import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authority } from './authority.entity';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    @InjectRepository(Authority)
    private readonly repository: Repository<Authority>,
  ) {}

  onModuleInit() {
    return this.repository
      .createQueryBuilder()
      .insert()
      .values([{ name: 'user' }, { name: 'admin' }])
      .onConflict('DO NOTHING')
      .execute();
  }
}
