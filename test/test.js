var assert = require('assert');

var CredircardInfo = require('../index.js');

describe('Creditcards', function() {
    describe('Brands', function() {
        it('should return visa', function() {
            assert.equal("visa", CredircardInfo('4024007175430676').getBrand());
        });
    });
});
