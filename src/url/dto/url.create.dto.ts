import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';

export class UrlGetDto {
  @ApiProperty({ type: String, description: 'url' })
  @IsUrl()
  url: string;
}
