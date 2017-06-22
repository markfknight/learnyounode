import * as fs from 'fs';
import { linesInFile } from './my_first_io';

const fileName = `${__dirname}/my_first_io_test_file.txt`;

beforeAll(() => {
    fs.writeFileSync(
        fileName ,
        'This is a test file.\nWith one newline.' ,
        (err) => {
            if (err) { throw err };
            console.log('my_first_io test file created!');
        })
});

afterAll(() => fs.unlinkSync(fileName));

test('Reads one newline', () => {
    expect(linesInFile(fileName)).toBe(1);
});
