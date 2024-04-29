/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/* eslint-disable prettier/prettier */
@Entity({ name: 'todos'})
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
