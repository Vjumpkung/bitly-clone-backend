import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerBuilder {
  private readonly documentBuilder: DocumentBuilder;

  constructor(private readonly app: INestApplication) {
    this.documentBuilder = new DocumentBuilder()
      .setTitle('bitly-clone API')
      .setDescription('The bitly-clone API')
      .setVersion('1.0');
  }

  createDocument() {
    return SwaggerModule.createDocument(this.app, this.documentBuilder.build());
  }

  setup() {
    const docs = this.createDocument();

    SwaggerModule.setup('docs', this.app, docs);
  }
}
