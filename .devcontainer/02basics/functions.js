
function sayMyname(){
console.log("Z");
console.log("A");
console.log("I");
console.log("N");
}

//sayMyname()


//function sumofTwoNumbers(num1, num2){
//    console.log(num1+num2);
//}

//function sumofTwoNumbers(num1, num2){
    //let result = num1 + num2
    //return result
    //after result nothing will print
    
//    return num1 + num2

//}
//const result = sumofTwoNumbers(5, 4)

//console.log("Result: ", result);


//function LoginUserMessage(username = "ahmed"){
    //if(!username){
//    if(username===undefined){
//       console.log("please enter a username");
//        return
//    }
//    return`${username} just logged in`
//}

//const user = LoginUserMessage("Zain")
//const user = LoginUserMessage()
//console.log(user);


//shopping cart
//...num1 -->rest aprator -->return array
function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 900));

const user = {
    username: "zain",
    price : 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleobject(user)

//another way

handleobject({
    username:"zain",
    price: 599
})

const mynewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]

}
console.log(returnSecondvalue(mynewArray));
