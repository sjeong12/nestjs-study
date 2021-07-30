import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn() //@PrimaryGeneratedColumn
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