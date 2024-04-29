import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  //create
  async create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto);

    return await this.todoRepository.save(todo);
  }

  //find all
  findMany() {
    return this.todoRepository.find();
  }

  //find one
  async findOne(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    if (!todo) {
      return { message: 'Data not found' };
    }

    return todo;
  }

  //update
  async update(id: number, dto: CreateTodoDto) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    // check that record exist
    if (!todo) {
      return { message: 'Data not found' };
    }
    Object.assign(todo, dto);

    return await this.todoRepository.save(todo);
  }

  //delete
  async delete(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    if (!todo) {
      return { message: 'Data not found' };
    }

    return await this.todoRepository.remove(todo);
  }
}
