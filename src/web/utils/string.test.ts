// Module.
import { getRandomString } from './string';

describe('src/web/utils/string', () => {
    describe('getRandomString()', () => {
        it('should return a random string of length 5 by default', () => {
            expect(getRandomString().length).toBe(5);
        });

        it('should return a string of the length specified', () => {
            const length: number = 15;

            expect(getRandomString(length).length).toBe(15);
        });
    });
});
