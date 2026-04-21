import { Injectable } from "@angular/core";
import { LoggerSeervice } from "./logger.Service";
@Injectable()
export class HelloService {
  constructor(
    public loggerService: LoggerSeervice
  ) {}
  sayHello() {
    this.loggerService.log('Hello tout le monde :)');
  }
}
