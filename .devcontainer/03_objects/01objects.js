//singleton
//Object.create //contsractor method -->singleton


//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name : "zain",
    age : 23,
    location : "kent",
    [mySym] : "mykey1", //symbol write in sqaure brakets
    isLoggedIn : false,
    lastLoginDays :["Monday","Saturday"]
} 
//access specific value
const check1 = Jsuser.location
console.log(check1);

//access with dot(.) //perferable way
const check = Jsuser["location"]
console.log(check);

console.log(Jsuser.mySym);// return value is string not symbol

//write in squre barket
console.log(Jsuser[mySym]);

//changing in value

Jsuser.location = "london"
console.log(Jsuser.location);

//how to lock value of object
//now value will not change
//Object.freeze(Jsuser)
//value will not change to lahore beacuse the value is freezed now
Jsuser.location = "Lahore"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user");
}


  
Jsuser.greeting2 = function(){
    console.log(`Hello Js userx, ${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())