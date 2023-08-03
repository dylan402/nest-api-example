import { Injectable } from '@nestjs/common';
import { CreateSubExampleDto } from './dto/create-sub-example.dto';
import { UpdateSubExampleDto } from './dto/update-sub-example.dto';

@Injectable()
export class SubExampleService {
  create(createSubExampleDto: CreateSubExampleDto) {
    return 'This action adds a new subExample';
  }

  findAll() {
    return `This action returns all subExample`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subExample`;
  }

  update(id: number, updateSubExampleDto: UpdateSubExampleDto) {
    return `This action updates a #${id} subExample`;
  }

  remove(id: number) {
    return `This action removes a #${id} subExample`;
  }
}
