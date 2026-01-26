//singleton (constractor)
//const Nayauser = new Object()

//non singleton
const nayapayuser = {}
nayapayuser.id = "kashi123"
nayapayuser.username = "kashi"
nayapayuser.isLoggedIn = false
//console.log(nayapayuser);


//object inside object

const regUser = {
    Email : "zain@gmail.com",
    fullName : {
        userFullName:{
            firstname : "Muhammad",
            lastname: "Zain"
        }
    }
}
//acess name
//console.log(regUser.fullName.userFullName.firstname);


const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj3 = {
    5:"e",
    6:"f"
}

//const obj3 = {obj1,obj2}

//object assign to eachother
//const obj4 = Object.assign({}, obj1, obj2) //both value send to empty {}


//--> we are using spread operator
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);


//when the value from database

//arrays of object
const users =[
    {
        id :1,
        emial: "zain@gmail.com"
    },
     {
        id :1,
        emial: "zain@gmail.com"
    },
     {
        id :1,
        emial: "zain@gmail.com"
    },
     {
        id :1,
        emial: "zain@gmail.com"
    },
]

//console.log(users[1].emial)


console.log(nayapayuser);

console.log(Object.keys(nayapayuser));
console.log(Object.values(nayapayuser));//datatype is array
console.log(Object.entries(nayapayuser)); //convert each value to array

console.log(nayapayuser.hasOwnProperty("isLoggedIn"));

