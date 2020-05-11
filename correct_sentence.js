//slice & toUpperCase

function correctSentence(text) {
    
    return text[0].toUpperCase() + text.slice(1) + (text.slice(-1) == '.' ? '' : '.');
}

//toUpperCase, concat, substring, replace

function correctSentence(text) {
    return text.charAt(0).toUpperCase().concat(text.substring(1), '.').replace('..', '.');
}