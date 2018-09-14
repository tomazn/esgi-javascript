function type_check_v1(input,type){
    if(typeof input == "object"){
        if(Array.isArray(input) && (type =="array" || type =="object")){
            return true;
        }
    }
    return typeof input === type;
}

function type_check_v2(input, conf){
    function isEquivalent(a, b) {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        if (aProps.length != bProps.length) {
            return false;
        }
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    }

    
    let result = true;
    if(conf.type){
        result = result && type_check_v1(input, conf.type);
    }
    if(conf.value){
        if(typeof input == "object"){
            if(isEquivalent(input, conf.value)){
                result = result && true;
            }else{
                result = result && false;
            }
        }else{
            result = result && input == conf.value;
        }
    }
    if(conf.enum){
        if(conf.enum.indexOf(input) > -1){
            result = result && true;
        }else{
            result = result &&false;
        }
    }
    return result;
}

function type_check(arg, conf){
    let result = true;
    if(!type_check_v1(arg, "object")){
        return type_check_v2(arg, conf);
    }else if(conf.properties){
        Object.keys(conf.properties).forEach(function(key) {
            if(conf.properties[key].properties){
                //Case of properties nested
                result = result && type_check(arg[key], conf.properties[key]);
            }else{
                result = result && type_check_v2(arg[key],conf.properties[key]);
            }  
          });
    }
    return result;
}

console.log(type_check_v1(1,"number"));
console.log(type_check_v1(false,"boolean"));
console.log(type_check_v1("str","string"));
console.log(type_check_v1({},"object"));

console.log("------ type_check_v2 -------");
console.log(type_check_v2(1, {type: "number"}));
console.log(type_check_v2("foo", {type: "string", value:"foo"}));
console.log(type_check_v2("bar", {type: "string", value:"foo"}));
console.log(type_check_v2(3, {enum: ["foo","bar",3]}));

console.log("------ type_check -------");

let config = {
    type: "object",
    properties : {
        prop1: { type: "number"},
        prop2: { type: "string", enum: ["val1", "val2"]},
        prop3: { type: "object", properties: { prop31: "number"}},
        prop4: { type: "array", value: ["boolean"]}
    }
}

let arg = {
    prop1: 1,
    prop2: "val2",
    prop3: {
        prop31: 12
    },
    prop4:["boolean"]
}

console.log(type_check(arg,config));