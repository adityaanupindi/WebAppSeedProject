/**
 * Created by Navaneeth on 1/15/2015.
 */
angular.module('helpers')
    .factory('mathHelpers', function () {
        "use strict";
        var add = function (a, b) {
               var arg1 =  parseFloat(a), arg2 =  parseFloat(b);
            arg1 = (!isNaN(arg1)) ? arg1 : 0;
            arg2 = (!isNaN(arg2)) ? arg2 : 0;
            return arg1 + arg2;
            };
        return {
            addTwoNumbers : add
        };

    });
