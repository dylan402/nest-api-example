import { Injectable } from '@nestjs/common';
import { CreateExampleDto, UpdateExampleDto } from './dto';
import { ExampleRepository } from './example.repository';

@Injectable()
export class ExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  create(createExampleDto: CreateExampleDto) {
    return 'This action adds a new example';
  }

  findAll() {
    return `This action returns all example`;
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

  update(id: number, updateExampleDto: UpdateExampleDto) {
    return `This action updates a #${id} example`;
  }

  remove(id: number) {
    return `This action removes a #${id} example`;
  }
}
