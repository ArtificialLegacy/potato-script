// import everything

const fs = require("fs");

let project = JSON.parse(fs.readFileSync('../project.json'));

let projectName = project.project;
let entry = project.entry;

let file = fs.readFileSync(`../project/${projectName}/${entry}.pscript`);

// setup reader template

let globalScope = {
  "events": {
    
    },
  "functions": {
    
  },
  "variables": {
    
  },
  "runners": [
    
  ],
};

let fileScope = {
  
};

let functionTemplate = {
  "name": "",
  "state": "",
  "tag": "",
  "variables": {
    
  },
  "runners": [
  
  ],
};

// compile project

function compiler(tempFile){
  for(let i = 0; i < tempFile.length; i++) {
    ln = i;
    fileStrings = tempFile[i];
    let check = fileStrings.split(" ");
    switch(check[0]){
      case "init":
        break;
      case "func":
        break;
      case "construct":
        break;
      case "index":
        break;
      case "serve":
        break;
      case "math":
        break;
      case "edit":
        break;
      case "complex":
        break;
      case "end":
        break;
      case "detect":
        break;
      case "super":
        break;
      case "merge":
        break;
      case "run":
        break;
      case "insert":
        break;
      case "script":
        break;
      case "get":
        break;
      case "return":
        break;
      case "exit":
        break;
      case "rem":
        break;
      case "print":
        break;
      case "clear":
        break;
      case "parse":
        break;
      case "save":
        break;
      case "emit":
        break;
      case "loop":
        break;
      case "~~":
        break;
      default:
        break;
    }
  }
}
