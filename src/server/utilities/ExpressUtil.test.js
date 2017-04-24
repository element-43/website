import { randomPort } from './ExpressUtil';

describe('utilities/express', () => {
    describe('randomPort()', function() {
        it('should provide a port that is between 49152–65535', function() {
            const port = randomPort();

            expect(port).to.be.at.least(49152);
            expect(port).to.be.at.most(65535);
        });
    });
});