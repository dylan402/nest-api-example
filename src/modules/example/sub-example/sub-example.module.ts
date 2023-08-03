import { Module } from '@nestjs/common';
import { SubExampleService } from './sub-example.service';
import { SubExampleController } from './sub-example.controller';

@Module({
  controllers: [SubExampleController],
  providers: [SubExampleService],
})
export class SubExampleModule {}
