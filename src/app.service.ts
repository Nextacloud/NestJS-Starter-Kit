import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World WOWWsas! This shit is so slow!';
  }
}
