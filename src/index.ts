import { readNumberOfNewlinesAsyc } from './app/my_first_async_io';
import * as process from 'process';

export class Startup {
  public static main(argv: string[]): void {
    readNumberOfNewlinesAsyc(argv[2], (data: number) => {console.log(data)});
  }
}

Startup.main(process.argv);
