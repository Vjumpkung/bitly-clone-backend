import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ collection: 'url' })
export class urlSchema {
  @ApiProperty({ type: String, description: 'ObjectId' })
  @Prop({ required: true })
  url: string;

  @ApiProperty({ type: String, description: 'shorturl' })
  @Prop({ required: true })
  shorturl: string;

  @ApiProperty({ type: Date })
  @Prop({ required: true })
  created_at: Date;
}

export const UrlSchema = SchemaFactory.createForClass(urlSchema);
