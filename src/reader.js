// import everything

const fs = require("fs");

let project = JSON.parse(fs.readFileSync('./project.json'));

let projectName = project.name;
let entry = project.entry;

let file = fs.readFileSync(`./project/${projectName}/${entry}.pscript`).toString();

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
  let lines = tempFile.split("\n");
  for(let i = 0; i < lines.length; i++) {
    fileStrings = lines[i];
    let check = fileStrings.split(" ");
    switch(check[0]){
      case "init":
        if(!check[1]) throw("Missing variable name;");
        if(check[2] !== ":") throw("Missing symbol: ':';");
        if(check[3] !== "(") throw("Missing symbol: '(';");
        if(!check[4]) throw("No value provided;");
        if(check[5] !== ")") throw("Missing symbol: ')';");
        if(check[6] !== "[") throw("Missing symbol: '[';");
        if(check[7] !== "global" && check[7] !== "local" && check[8] !== "private" && check[9] !== "constant") throw("Invalid tag provided;");
        if(check[8] !== "]") throw("Missing symbol: ']';");
        if(check[9] !== "|\r") throw("Missing symbol: '|';");
        name = check[1];
        value = check[4];
        tag = check[7];
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
        if(check[9] !== "|\r") throw("Missing symbol: '|';");
        name = check[1];
        state = check[4];
        tag = check[7];
        if(scope == "global"){
          if(globalScope.functions[name]) throw(`Function: '${name}', is already defined.`);
          globalScope.functions[name] = {
            "type": "func",
            "name": name,
            "state": state,
            "tag": tag,
          };
        } else {
          if(!globalScope.functions[scope]) throw(`Current scope does not exist. ${name}`);
          globalScope.functions[scope].runners.push({
            "type": "func",
            "name": name,
            "state": state,
            "tag": tag,
          });
        }
        break;
      case "construct":
        if(!check[1]) throw("Missing variable name;");
        if(check[2] !== ":") throw("Missing symbol: ':';");
        if(check[3] !== "(") throw("Missing symbol: '(';");
        if(!check[4]) throw("Missing construct type;");
        if(check[5] !== ")") throw("Missing symbol: ')';");
        if(check[6] !== "[") throw("Missing symbol: '[';");
        if(check[7] !== "global" && check[7] !== "local" && check[8] !== "private" && check[9] !== "constant") throw("Invalid tag provided;");
        if(check[8] !== "]") throw("Missing symbol: ']';");
        if(check[9] !== "|\r") throw("Missing symbol: '|';");
        name = check[1];
        type = check[4];
        tag = check[7];
        if(scope == "global"){
          globalScope.runners.push({
            "type": "construct",
            "name": name,
            "state": type,
            "tag": tag,
          });
        } else {
          if(!globalScope.functions[scope]) throw(`Current scope does not exist. ${name}`);
          globalScope.functions[scope].runners.push({
            "type": "construct",
            "name": name,
            "state": type,
            "tag": tag,
          });
        }
        break;
      case "index":
        if(!check[1]) throw("Missing variable name;");
        if(check[2] !== ":") throw("Missing symbol: ':';");
        if(check[3] !== "(") throw("Missing symbol: '(';");
        if(!check[4]) throw("Missing index location;");
        if(check[5] !== ")") throw("Missing symbol: ')';");
        if(check[6] !== "[") throw("Missing symbol: '[';");
        if(!check[7]) throw("No return provided;");
        if(check[8] !== "]") throw("Missing symbol: ']';");
        if(check[9] !== "|\r") throw("Missing symbol: '|';");
        name = check[1];
        type = check[4];
        tag = check[7];
        if(scope == "global"){
          if(globalScope.functions[name]) throw(`Function: '${name}', is already defined.`);
          globalScope.functions[name] = {
            "type": "construct",
            "name": name,
            "state": type,
            "tag": tag,
          };
        }  else {
          if(!globalScope.functions[scope]) throw(`Current scope does not exist. ${name}`);
          globalScope.functions[scope].runners.push({
            "type": "construct",
            "name": name,
            "state": type,
            "tag": tag,
          });
        }
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

compiler(file);

console.dir(globalScope);
