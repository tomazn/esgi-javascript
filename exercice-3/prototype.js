function isEmpty(str){
    if(!str || typeof str != "string" || str == ""){
        return true;
    }
    return false;
}

function ucFirst(str){
    if(isEmpty(str)){
        return "Chaine vide"
    }
    const c = str[0].toUpperCase();
    str = str.substring(1);
    str = c + str;
    return str;
}

function capitalize(str, separator){
    if(isEmpty(str)){
        return "Chaine vide"
    }
    let words = str.split(" ");
    let upperWords = [];
    for(let word of words){
        upperWords.push(ucFirst(word))
    }
    return upperWords.join(separator);
}

function camelCase(str){
    if(isEmpty(str)){
        return "Chaine vide"
    }
    return capitalize(str, "");
}

function snake_case(str){
    if(isEmpty(str)){
        return "Chaine vide"
    }
    let words = str.split(" ");
    return words.join("_");
}

function prop_access(obj, attr){
    if(obj && attr){
        let attributs = attr.split(".");
        let path = "";
        let index = 0;
        let sizeOfAttributs = attributs.length;
        //Loop into attribute + keep the path of the object
        for(var i=0;i<sizeOfAttributs;i++){
            if(obj[path + attributs[i]]){
                path += attributs[i] + ".";
                index++;
            }else{
                return path + attributs[i] + " not exist";
            }
        }
        if(index == sizeOfAttributs){
            //Remove the last dot
            path = path.substring(0, path.length - 1)
            return obj[path];
        }
    }
}

function verlan(str){
    if(isEmpty(str)){
        return "Chaine vide"
    }
    let words = str.split(" ");
    let wordsReverseArray = [];
    for(let word of words){
        let wordSplited = word.split("");
        let wordReverse = wordSplited.reverse();
        wordsReverseArray.push(wordReverse.join(""));
    }
    var result = wordsReverseArray.join(" ")
    return result;
}

function leet(str){
    if(isEmpty(str)){
        return "Chaine vide"
    }
    let letters = str.split("");
    for(var i=0;i<letters.length;i++){
        switch(letters[i].toLowerCase()){
            case "a":
            letters[i] = "4";
            break;
            case "e":
            letters[i] = "3";
            break;
            case "i":
            letters[i] = "1";
            break;
            case "o":
            letters[i] = "0";
            break;
            case "u":
            letters[i] = "(_)";
            break;
            case "y":
            letters[i] = "7";
            break;
        }
    }
    return letters.join("");
}

function yoda(str){
    if(isEmpty(str)){
        return "Chaine vide"
    }
    let words = str.split(" ");
    words = words.reverse();
    return words.join(" ");
}

String.prototype.ucFirst = function(){
    return ucFirst(this.toString());
}

String.prototype.capitalize = function(){
    return capitalize(this.toString(), " ");
}

String.prototype.camelCase = function(){
    return camelCase(this.toString());
}

String.prototype.snake_case = function(){
    return snake_case(this.toString());
}

String.prototype.verlan = function(){
    return verlan(this.toString());
}

String.prototype.leet = function(){
    return leet(this.toString());
}

String.prototype.yoda = function(){
    return yoda(this.toString());
}

console.log("hello world".ucFirst());
console.log("hello world".capitalize());
console.log("hello world".camelCase());
console.log("hello world".snake_case());
console.log("hello world".verlan());
console.log("hello world".leet());
console.log("hello world".yoda());