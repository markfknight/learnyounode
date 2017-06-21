import * as fs from 'fs';
import * as util from 'util';

export function readNumberOfNewlinesAsyc(filePath: string, cb: (data: number) => void): void {
    fs.readFile(filePath, (err, data) => {
            if (err) { throw err; }
            cb(data.toString().split('\n').length - 1);
        });
}
