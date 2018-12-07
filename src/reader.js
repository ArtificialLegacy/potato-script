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

let scope = "global";
let ifCount = 0;

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
        if(!check[1]) throw("Missing variable name;");
        if(check[2] !== ":") throw("Missing symbol: ':';");
        if(check[3] !== "(") throw("Missing symbol: '(';");
        if(!check[4]) throw("No value provided;");
        if(check[5] !== ")") throw("Missing symbol: ')';");
        if(check[6] !== "[") throw("Missing symbol: '[';");
        if(check[7] !== "global" || check[7] !== "local" || check[8] !== "private" || check[9] !== "constant") throw("Invalid tag provided;");
        if(check[8] !== "]") throw("Missing symbol: ']';");
        if(check[9] !== "|'") throw("Missing symbol: '|';");
        let name = check[1];
        let value = check[4];
        let tag = check[7];
        if(scope == "global"){
          globalScope.runners.push({
            "type": "init",
            "name": name,
            "value": value,
            "tag": tag,
          });
        } else {
          if(!globalScope.functions[scope]) throw(`Current scope does not exist. ${name}`);
          globalScope.functions[scope].runners.push({
            "type": "init",
            "name": name,
            "value": value,
            "tag": tag,
          });
        }
        break;
      case "func":
        if(!check[1]) throw("Missing function name;");
        if(check[2] !== ":") throw("Missing symbol: ':';");
        if(check[3] !== "(") throw("Missing symbol: '(';");
        if(!check[4]) throw("No state provided;");
        if(check[5] !== ")") throw("Missing symbol: ')';");
        if(check[6] !== "[") throw("Missing symbol: '[';");
        if(check[7] !== "static" || check[7] !== "private") throw("Invalid tag provided;");
        if(check[8] !== "]") throw("Missing symbol: ']';");
        if(check[9] !== "|'") throw("Missing symbol: '|';");
        let name = check[1];
        let state = check[4];
        let tag = check[7];
        if(scope == "global"){
          if(globalScope.functions[name]) throw(`Function: '${name}', is already defined.`);
          globalScope.functions[name] = {
            "type": "func",
            "name": name,
            "state": state,
            "tag": tag,
          };
        }
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
      case "hyper":
        break;
      case "~~":
        break;
      default:
        break;
    }
  }
}
