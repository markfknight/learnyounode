import { readNumberOfNewlinesAsyc } from './app/my_first_async_io';
import * as process from 'process';

export class Startup {
  public static main(argv: string[]): void {
<<<<<<< HEAD
    readNumberOfNewlinesAsyc(argv[2], (data: number) => {console.log(data)});
=======
    console.log(linesInFile(argv[2]));
>>>>>>> 09d2314c2c47be71a89b0e0d80edd3f9a8821125
  }
}

Startup.main(process.argv);
