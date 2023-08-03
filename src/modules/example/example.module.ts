import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ExampleController } from './example.controller';
import { ExampleRepository } from './example.repository';
import { ExampleService } from './example.service';
import { SubExampleModule } from './sub-example/sub-example.module';

@Module({
  imports: [SubExampleModule, RouterModule.register([{ path: 'example', module: SubExampleModule }])],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleRepository],
})
export class ExampleModule {}
