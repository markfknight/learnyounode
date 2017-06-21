import { writeFileSync, unlinkSync } from 'fs';
import { readNumberOfNewlinesAsyc } from './my_first_async_io';

const fileName = `${__dirname}/my_first_async_io_test.txt`;

beforeAll(() => {
    writeFileSync(
        fileName,
        'This is a test file.\nWith\ntwo new lines',
        (err) => {
            if (err) { throw err; }
            console.log('my_first_async_io test file created!');
        }
    );
})

afterAll(() => unlinkSync(fileName))

test('Reads one new line - async', done => {
    function callback(data: number) {
        expect(data).toBe(2);
        done();
    }

    readNumberOfNewlinesAsyc(fileName, callback);
})
