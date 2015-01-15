/**
 * Created by Navaneeth on 1/15/2015.
 */
(function() {
    "use strict";
    angular.module('helpers', []);
    angular.module('main', ['helpers']);
    var app = angular.module('HelloWorld', ['main']);
})();