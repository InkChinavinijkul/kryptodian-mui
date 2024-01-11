import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // function that executes upon HTTP request or something
  // when this page loads you get so and so
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  getData() {
    return this.appService.getData();
  }

  @Get('test')
  // you'd have to go through ../some-path/test
  // to request stuff from this page
  getTest(): string {
    // create an AppService object as seen in the file
    // then call one of the functions in it
    return this.appService.getLel('testy');
  }
}
