import * as fs from 'fs';

export function linesInFile(filePath: string): number {
    return fs.readFileSync(filePath).toString().split('\n').length - 1;
}
