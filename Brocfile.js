var mergeTrees = require('broccoli-merge-trees');
var concat = require('broccoli-concat');
var uglify = require('broccoli-uglify-js');
var moveFile = require('broccoli-file-mover');
var picker = require('broccoli-static-compiler');

var workingFiles = mergeTrees(['src', 'thirdparty']);

var cattered = concat(workingFiles, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/ember-handlebars-svg.js'
});

var copied = moveFile(cattered, {
	srcFile: '/ember-handlebars-svg.js',
	destFile: '/ember-handlebars-svg.min.js',
	copy: true
});

var toUglify = picker(copied, {
	srcDir: '/',
	destDir: '/',
	files: ['**/*.min.js']
});

var uglified = uglify(toUglify);

module.exports = mergeTrees([cattered, uglified], { overwrite: true });