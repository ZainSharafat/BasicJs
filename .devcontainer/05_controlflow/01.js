const isUserLoggedIn = true

//const temperature = 41

//if (temperature===40) {
//    console.log("less than 50");
    
//} else {
//console.log("temperature is greater than 50");
//}

//const score = 200

//if(score>100){
//    const power = "fly"
//    console.log(`user power : ${power}`);
//    console.log("user power :",power);
    
//}
//console.log("user power :",power);

//shorthand notion

//if (balance > 500) console.log("test");//implescent scope//immature code

//const balance = 1000
//if (balance < 500) {
    //console.log("less than 500");
    
//}else if(balance <750){
   // console.log("less than 750");
    
//}else if (balance <900) {
   // console.log("less than 900");
    
//}else{
   // console.log("less than 1100");
    
//}

const userLoggedIn = true
const debitCard = true
const isUserLoggedInfromGoogle = false
const isUserLoggedInfromemail = true
//all statement must be true
if (userLoggedIn && debitCard) {
    console.log("allow to buy anything");
    
}
//one statement must be true
if (isUserLoggedInfromGoogle || isUserLoggedInfromemail) {
    console.log("User Logged In");
    
}

//Nullish Coalescing Operator (??): null, undefined
//check safety

let val1;
//val1 = 5 ?? 10
//al1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
//console.log(val1);


//terniray operator

//condtion ? true : false

const icTeaPrice = 100
icTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


