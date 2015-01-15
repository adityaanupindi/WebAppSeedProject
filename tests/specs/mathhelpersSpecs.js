/**
 * Created by U6023581 on 1/15/2015.
 */
describe("Math helpers specs", function(){
    "use strict";

    var mathHelpers;
    beforeEach(module('helpers'));

    beforeEach(inject(function (_mathHelpers_) {
        mathHelpers = _mathHelpers_;
    }));

    it("Should return 0 if two numbers are undefined" , function(){
        var res = mathHelpers.addTwoNumbers();
        expect(res).toBe(0);
    });

    it("Should return 0 if two numbers are null" , function(){
        var res = mathHelpers.addTwoNumbers(null, null);
        expect(res).toBe(0);
    });

    it("Should return the other number if one of the numbers is undefined" , function(){
        var res = mathHelpers.addTwoNumbers(1);
        expect(res).toBe(1);
    });

    it("Should return the other number if one of the numbers is null" , function(){
        var res = mathHelpers.addTwoNumbers(null, 3);
        expect(res).toBe(3);
    });

    it("Should return the other number if one of the numbers is null" , function(){
        var res = mathHelpers.addTwoNumbers(null, 3);
        expect(res).toBe(3);
    });

    it("Should return the expected value if both the numbers are valid" , function(){
        var res = mathHelpers.addTwoNumbers(1, 3);
        expect(res).toBe(4);
    });

    it("Should return the Max number value if one of the numbers is max number" , function(){
        var res = mathHelpers.addTwoNumbers(Number.MAX_VALUE, 1000);
        expect(res).toBe(Number.MAX_VALUE);
    });

    it("Should return the other number if one of the numbers is Min number" , function(){
        var res = mathHelpers.addTwoNumbers(Number.MIN_VALUE, 1000);
        expect(res).toBe(1000);
    });
});