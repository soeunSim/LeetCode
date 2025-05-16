/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let Box = "";
    for(let i= 0; i<command.length; i++) {
        if(command[i] === "(") {
           if(command[i + 1] === "a") {
            Box += "al";
           } else if(command[i + 1] === ")") {
            Box += "o";
           }
        } else if(command[i] === "G") {
            Box += "G";
        }
    }
    return Box;
};