import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Authority {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;
}
