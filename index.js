/* eslint no-console: 'off' */
var elementParser = require('./parser/api_schema');
var fs = require('fs');
var path = require('path');
var util = require('util');

var app = {};
module.exports = {

  init(_app) {
    app = _app;
    // console.log(_app);

    //
    // Hooks
    //
    app.addHook('parser-find-elements', parserFindElements);
    // app.parsers.apiparamjson = {
    //   parse: apiParamJson,
    //   path: 'local',
    //   method: 'insert'
    // };
    // app.parsers.apisuccessjson = {
    //   parse: apiSuccessJson,
    //   path: 'local',
    //   method: 'insert'
    // };
  }
};

// function apiParamJson(content) {
//   return {
//     'paramjson': content
//   };
// }

// function apiSuccessJson(content) {
//   return {
//     'successjson': content
//   };
// }

function createNewElement(elements, element, filename, type) {
  var values = elementParser.parse(element.content, element.source);
  var jsonFilePath = path.join(path.dirname(filename), values.path);
  elements.pop();
  if (!fs.existsSync(jsonFilePath)) {
    return elements;
  }
  var data = fs.readFileSync(jsonFilePath, 'utf8').toString();
  var newElement = {
    source: util.format('@%s {json} %s\n%s', type, values.element, data),
    name: type.toLocaleLowerCase(),
    sourceName: type,
    content: util.format('{json} %s\n%s', values.element, data)
  };
  elements.push(newElement);
  return elements;
}

function parserFindElements(elements, element, block, filename) {
  if (element.name === 'apiparamjson') {
    return createNewElement(elements, element, filename, 'apiParamExample');
  } else if (element.name === 'apisuccessjson') {
    return createNewElement(elements, element, filename, 'apiSuccessExample');
  }
  return elements;
}
