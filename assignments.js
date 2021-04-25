//ASSIGNMENT-1

function calcCircumfrence(radius){
    return Math.PI * (radius + radius);
}
console.log("The calcCircumfrence is " + calcCircumfrence(1));
function calcArea(radius){
    return Math.PI * (radius*radius);
}
console.log("The Area is " + calcArea(1));

//ASSIGNMENT-2

function weeddays(day){
    switch (day){
        case 1:
    console.log('Sunday is the day: 1');
    break;
    case 2:
        console.log('monday is the day: 2');
        break;
        case 3:
            console.log('tuesday is the day: 3');
            break;
            case 4:
                console.log('wednesday is the day: 4');
                break;
                case 5:
                    console.log('thursday is the day: 5');
                    break;
                    case 6:
                        console.log('friday is the day: 6');
                        break;
                        case 7:
                            console.log('saturday is the day: 7');
                            break;
    }
}weeddays(5);


//ASSIGNMENT-3

function firstWord(first){
    first = alert( first.split(" ", [1]));
    return first;
}   
 firstWord("hello amani");


//ASSIGNMENT-4
let type1 = type =>{
    if(typeof type === 'number'){
        console.log (type * type * type);
    }else if(typeof type === "string"){
console.log("ARRR!");
    }else {
        console.log(type);
    }
}
console.log(type1(2)); 


//ASSIGNMENT-5

function key (check){
    if(check === true){
        return true;
    }else{
        return false;
    }
}
console.log(key(true));

function person(check){
    if (check==="Mohammad"){
        return true;
    }else{
return false;
}  
}console.log(person("Mohammad"));

function security (keyVar, nameVar){
    if(keyVar && nameVar ===true ){
        return "welcome"
    }else{
        return "You can't access";
    }
}
const result = security(key(true), person('noor'))
alert (result);