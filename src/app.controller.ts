import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint(): string {
    return 'This is a new endpoint!';
  }

  @Get('/ruta/')
  hello(): string {
    return 'cons /sas/';
  }
}
