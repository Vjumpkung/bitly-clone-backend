import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import {
  UrlGetDto as CreateShortUrlDto,
  UrlGetDto,
} from './dto/url.create.dto';
import { UrlService } from './url.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateShortUrlResponseDto } from './dto/url.create.response.dto';

@Controller('url')
export class UrlController {
  // inject urlservice
  constructor(private readonly UrlService: UrlService) {}

  @Post('/')
  @ApiBody({ type: CreateShortUrlDto })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    type: CreateShortUrlResponseDto,
    status: HttpStatus.CREATED,
    description: 'The short url has been successfully created.',
  })
  async createUrl(@Body() createShortUrlDto: CreateShortUrlDto) {
    return this.UrlService.createShortUrl(createShortUrlDto.url);
  }

  @Get('/:shorturl')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: UrlGetDto,
    status: HttpStatus.OK,
    description: 'The url has been successfully retrieved.',
  })
  async getUrl(@Param('shorturl') shorturl: string) {
    return await this.UrlService.getUrl(shorturl);
  }
}
