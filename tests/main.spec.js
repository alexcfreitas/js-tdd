import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main.js';

describe('Calc', () => {

    //smoke tests
    describe('Smoke tests',() => {

        it('should exist the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exist the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('should exist the method `mult`', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exist the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });
    });

    describe('Sum',() => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(sum(2,2)).to.be.equal(4);
        });
    });

    describe('Sub',() => {
        it('should return 3 when `sub(4,1)`', () => {
            expect(sub(4,1)).to.be.equal(3);
        });
        it('should return -3 when `sub(7,10)`', () => {
            expect(sub(7,10)).to.be.equal(-3);
        });
    });

    describe('Mult',() => {
        it('should return 9 when `mult(3,3)`', () => {
            expect(mult(3,3)).to.be.equal(9);
        });
    });

    describe('Div',() => {
        it('should return 2 when `div(10,5)`', () => {
            expect(div(10,5)).to.be.equal(2);
        });
        it('should return `nao e possivel divisao por zero!`', () => {
            expect(div(10,0)).to.be.equal('nao e possivel divisao por zero!');
        });
    });
});
