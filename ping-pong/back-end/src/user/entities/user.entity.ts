import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() //PrimaryColumn
  user_idx: number;

  @Column()
  intra_id: string;

  @Column()
  nickname: string;

  @Column()
  avatar: string;

  @Column()
  status: number;

  @Column()
  second_auth: boolean;

  @Column()
  ladder_point: number;

  @Column()
  ladder_level: number;
}