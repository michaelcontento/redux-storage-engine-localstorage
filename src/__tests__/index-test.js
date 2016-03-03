import createEngine from '../';

describe('engine', () => {
    beforeEach(() => {
        global.localStorage = {
            getItem: sinon.stub().returns(null),
            setItem: sinon.stub()
        };
    });

    afterEach(() => {
        delete global.localStorage;
    });

    describe('load', () => {
        it('should load via getItem', async () => {
            localStorage.getItem.returns('{"a":1}');

            const engine = createEngine('key');
            const result = await engine.load();

            localStorage.getItem.should.have.been.called;
            result.should.deep.equal({ a: 1 });
        });

        it('should load with the given key', async () => {
            const engine = createEngine('key');
            await engine.load();

            localStorage.getItem.should.have.been.calledWith('key');
        });

        it('should fallback to empty dict', async () => {
            const engine = createEngine('key');
            const result = await engine.load();

            localStorage.getItem.should.have.been.called;
            result.should.be.a.dict;
            result.should.be.empty;
        });

        it('should reject when localStorage is not present', () => {
            delete global.localStorage;

            const engine = createEngine('key');
            return engine.load()
                .should.eventually.be.rejectedWith('localStorage is not defined');
        });
    });

    describe('save', () => {
        it('should asve via setItem', async () => {
            const engine = createEngine('key');
            await engine.save({});

            localStorage.setItem
                .should.have.been.called;
        });

        it('should load with the given key', async () => {
            const engine = createEngine('key');
            await engine.save({});

            localStorage.setItem
                .should.have.been.calledWith('key');
        });

        it('should save the passed state as json', async () => {
            const engine = createEngine('key');
            await engine.save({ a: 1 });

            localStorage.setItem
                .should.have.been.calledWith(sinon.match.any, '{"a":1}');
        });

        it('should reject when localStorage is not present', () => {
            delete global.localStorage;

            const engine = createEngine('key');
            return engine.save({})
                .should.eventually.be.rejectedWith('localStorage is not defined');
        });
    });
});
