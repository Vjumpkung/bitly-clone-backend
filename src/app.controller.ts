import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
@Controller({})
export class AppController {
  @Get('/')
  @ApiResponse({ status: HttpStatus.OK, description: 'Hello World!' })
  getHello(): string {
    return 'Hello World!';
  }
}
