import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Authority } from '../auth/authority.entity';

const USER_ENTITY_KEYS: Array<keyof UserEntity> = [
  'id',
  'username',
  'email',
  'passwordHash',
];
const USER_ENTITY_RELATIONS = ['authorities'];

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 16, unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ name: 'password_hash' })
  passwordHash!: string;

  @ManyToMany(() => Authority)
  @JoinTable()
  authorities!: Authority[];

  static filterSelect(fields?: string[]): Array<keyof UserEntity> | undefined {
    if (!fields) {
      return;
    }
    return fields.filter((field): field is keyof UserEntity =>
      USER_ENTITY_KEYS.includes(field as any),
    );
  }

  static filterRelations(relations?: string[]): string[] | undefined {
    if (!relations) {
      return undefined;
    }
    return relations.filter(relation =>
      USER_ENTITY_RELATIONS.includes(relation),
    );
  }
}
