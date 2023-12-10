import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { configuration } from './config';
import { UrlModule } from './url/url.module';
import { MongooseConfigService } from './config/mongoose.service.config';
import { UrlSchema } from './schema/url.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    UrlModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
