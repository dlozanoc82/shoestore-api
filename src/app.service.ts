import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY')
    private apiKey: string,
    @Inject('TASKS')
    private tasks: any[], // Assuming tasks is an array of any type
  ) {}
  getHello(): string {
    console.log(this.tasks);
    return `Hello World! ${this.apiKey}`;
  }
}
