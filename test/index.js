import { expect } from 'chai';
import jsdom from 'mocha-jsdom';

describe('test', function () {
    const TEST = true

    jsdom()

    before(function () {
        jsdom.rerequire('../src/index')
    })

    it('should be true', function () {
        expect(TEST).to.be.true
    })
})