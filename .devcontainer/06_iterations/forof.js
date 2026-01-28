const arr = [1,2,3,4,5]

for (const num of arr) {
//    console.log(num);
    
}

const greetings = "hello world"

for (const greet of greetings) {
//    console.log(`Each char is ${greet}`);
    
}

const map = new Map() //object
map.set('USA', "United states of America")
map.set('Pak', "Pakistan")
map.set('UAE', "United Arab Emirates")
map.set('USA', "United states of America")// does not print duplicate value

//console.log(map);

//destructure
for (const [key,value] of map) {
    console.log(key,value);
    
}

const myObj = {
    "Game1" : "NFS",
    "Game2" : "spiderman"
}

// for (const [key,value] of myObj) {
//     console.log(key,value);
    
// }


const myCoding = [
    {
        //multiple objects
        languageName : "javascript",
        langauageFileName :"Java"
    },
    {
        //multiple objects
        languageName : "javascript1",
        langauageFileName :"Java"
    },
    {
        //multiple objects
        languageName : "javascript2",
        langauageFileName :"Java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})