const repeatString = function(word, times) {
    let strings = '';
    if (times > 0){
        for (let num = 0; num <= times; num++){
            strings += word;
        }
        return strings;
    }else{
        return ERROR;
    }
}

module.exports = repeatString;