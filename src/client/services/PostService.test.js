import _ from 'lodash';
import httpCodes from 'http-codes';

// Module.
import PostService from './PostService';

describe('post service', () => {
    beforeEach(function() {
        this.service = new PostService();
        this.response = {
            data: {},
            status: httpCodes.OK,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        this.httpGetStub = stub(this.service, 'httpGet');
    });

    afterEach(function() {
        this.service = _.noop();
        this.response = _.noop();

        this.httpGetStub.restore();
    });

    // describe('getPost()', function() {
    //     it('should not include categories if none were specified', function(done) {
    //         this.httpGetStub.resolves(this.response);
    //
    //         this.service
    //             .getPosts()
    //             .then(() => {
    //                 assert.calledWith(this.axiosGetStub, testUrl);
    //
    //                 done();
    //             });
    //     });
    // });
});
