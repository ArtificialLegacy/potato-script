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
  "runners": [
    
  ],
};

let localScope = {

};

let localScopeTemplate = {
  "functions": {
  
  },
  "runners": [
    
  ],
};

// compile project

function compiler(){
  for(let i = 0; i < file.length; i++) {
    ln = i;
    fileStrings = file[i];
    let check = "";
    for(let r = 0; r < 100; r++){
      check = check + fileStrings[r];
      switch(check){
        case "init":
          break;
        case "func":
          break;
        case "construct":
          break;
        case "index":
          break;
        case "math":
          break;
        case "complex":
          break;
        case "end":
          break;
        case "detect":
          break;
        default:
          break;
      }
    }
  }
}
