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

console.log("ucFirst : " + ucFirst("hello world"));
console.log("capitalize : " + capitalize("hello world", " "));
console.log("camelCase : " + camelCase("hello world"));
console.log("snake_case : " + snake_case("hello world"));

/**
 * PROP_ACCESS
 */

console.log("---------- PROP_ACCESS ----------");


var voiture = {
    "marque" : "audi",
    "details" : {},
    "details.couleur" : "rouge",
    "details.couleur.revetement" : "brillant"
}

/*
var voiture = {
    "marque" : "audi",
    "details" : {
        "couleur" : "rouge",
        "type" : {
            "revetement" : "brillant"
        }
    }
}
*/
console.log("prop_access lvl1: " + prop_access(voiture, "marque"));
console.log("prop_access lvl2: " + prop_access(voiture, "details.couleur"));
console.log("prop_access lvl3: " + prop_access(voiture, "details.couleur.revetement"));
console.log("prop_access error lvl1: " + prop_access(voiture, "prix"));
console.log("prop_access error lvl2: " + prop_access(voiture, "details.prix"));
console.log("prop_access error lvl3: " + prop_access(voiture, "details.couleur.prix"));

console.log("---------- !PROP_ACCESS ----------");

console.log("verlan : " + verlan("hello world"));
console.log("leet : " + leet("anaconda"));
console.log("yoda : " + yoda("hello world"));