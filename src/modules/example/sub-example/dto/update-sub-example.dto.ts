import { PartialType } from '@nestjs/swagger';
import { CreateSubExampleDto } from './create-sub-example.dto';

export class UpdateSubExampleDto extends PartialType(CreateSubExampleDto) {}
