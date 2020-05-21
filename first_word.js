//my solution

function firstWord(str) {
        let spaceIndex = str.indexOf(' ');  
        return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
    };

 //best solution

 const firstWord = str => return str.split(' ')[0];