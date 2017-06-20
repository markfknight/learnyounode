import { linesInFile } from './app/my_first_io';
import * as process from 'process';

export class Startup {
  public static main(argv: string[]): void {
    console.log(linesInFile(argv[2]));
  }
}

Startup.main(process.argv);
