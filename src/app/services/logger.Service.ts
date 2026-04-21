export class LoggerSeervice {
  log(message: unknown): void {
    console.log('From LoggerService');
    console.log({message})
  }
}
