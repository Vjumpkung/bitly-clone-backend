import { ApiProperty } from '@nestjs/swagger';

export class CreateShortUrlResponseDto {
  @ApiProperty({ type: String, description: 'url' })
  _id: string;

  @ApiProperty({ type: String, description: 'url' })
  url: string;

  @ApiProperty({ type: String, description: 'shorturl' })
  shorturl: string;

  @ApiProperty({ type: Date })
  created_at: Date;
}
