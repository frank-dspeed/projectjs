
/*
var ProjectRunner = require('./lib/runner');

var runner = new ProjectRunner();

var path = process.cwd() + "/example/";

runner.loadAndRun(path);
*/

var ProjectJsCompiler = require('./lib/compiler');
var ProjectJsParser = require('./lib/parser');
var compiler = new ProjectJsCompiler();
var parser = new ProjectJsParser();

var projectRoot = process.cwd() + "/example",
    projectFile = projectRoot + "/project.json",
    buildDir = "./build";

var registry = parser.loadRegistry(projectFile);
var projectInfo = require(projectFile);
compiler.buildProject(registry, projectRoot, buildDir, projectInfo.start);

// var ProjectJsFileUtil = require('./lib/file');
// var fileUtil = new ProjectJsFileUtil();
// var map = fileUtil.mapDirectory(process.cwd() + "/example", {
//     'excludePaths': [ process.cwd() + '/example/build', process.cwd() + "/example/libs" ], 
//     'excludeFiles': [ ".DS_Store", "project.json" ]
// });
// console.log(map);
