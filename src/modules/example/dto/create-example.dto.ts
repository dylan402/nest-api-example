import { ApiProperty } from '@nestjs/swagger';

export class CreateExampleDto {
  @ApiProperty({ required: true })
  name: string;
}
