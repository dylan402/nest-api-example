import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubExampleService } from './sub-example.service';
import { CreateSubExampleDto } from './dto/create-sub-example.dto';
import { UpdateSubExampleDto } from './dto/update-sub-example.dto';

@Controller('sub-example')
export class SubExampleController {
  constructor(private readonly subExampleService: SubExampleService) {}

  @Post()
  create(@Body() createSubExampleDto: CreateSubExampleDto) {
    return this.subExampleService.create(createSubExampleDto);
  }

  @Get()
  findAll() {
    return this.subExampleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subExampleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubExampleDto: UpdateSubExampleDto) {
    return this.subExampleService.update(+id, updateSubExampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subExampleService.remove(+id);
  }
}
