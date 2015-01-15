module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        //Loads package.json file
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            seed: {
                src: ['WebApplication/scripts/**/**/*.js'],
                options: {
                    keepRunner: true,
                    specs: 'tests/specs/**/**/*.js',
                    host: "",
                    vendor: [
                        "WebApplication/lib/jquery/dist/jquery.js",
                        "WebApplication/lib/lodash/dist/lodash.js",
                        "WebApplication/lib/angular/angular.min.js",
                        "WebApplication/lib/bootstrap/dist/js/bootstrap.js",
                        "tests/lib/jasmine-jquery/lib/jasmine-jquery.js",
                        "tests/lib/angular-mocks/angular-mocks.js"
                    ],
                    //Accepts the output file name from cmd prompt or by default the name would be _specRunner.html
                    outfile: grunt.option('out') || "specRunner.html",
                    summary: true
                }
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'WebApplication/**/*.js',
                'tests/**/*.js',
                '!WebApplication/lib/**/*.js',
                '!tests/lib/**/*.js'
            ],
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                camelcase: true,
                forin: true,
                freeze: true,
                funcscope: true,
                globalstrict: true

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default',
        [
            'jshint:all',
            'jasmine'
        ]);
};