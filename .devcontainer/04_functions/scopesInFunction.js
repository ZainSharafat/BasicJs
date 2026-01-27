//global scope
let a = 300
//block scope
if (true) {
    let a = 10
    const b = 20
    var c = 30 
    //console.log("inner value :", a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const unername = "zain"
    function two(){
      //  const website = "youtube"
        console.log(unername);
        
    }
    //console.log(website);
     two()
}

//one

if (true) {
    const username = "zain"
    if (username === "zain") {
        const website = "youtube"
        console.log(username + website);
        
    }
   // console.log(website);
    
}
//console.log(username);




//exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeee


function addone(num){
    
}
