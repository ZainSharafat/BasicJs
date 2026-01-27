const userName = []
if (userName) {
    console.log("Got User Name");
    
}else{
    console.log("dont have username");
    
}

//false values
//(false, 0, -0, bigInt (0n), "", null, undefined, NaN )

//Truthy value
//"0" in string 0 is truthy value
//"false" in string is truthy value
//" " -->space is also trurhy value
//[] --> truthy value
//{} -->truthy value
//function (){} -->truthy value

if(userName.length === 0){
    console.log("Array is empty");
    
}

const emptobject = {}
if (Object.keys(emptobject).length===0) {
    console.log("object is empty");
    
}