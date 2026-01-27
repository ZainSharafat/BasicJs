const user = {
    username : "zain",
    price : 999,
    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
        
    }
}

//user.welcomeMassage()
//user.username = "arslan"
//user.welcomeMassage()

//console.log(this);
       
function chaai(){
    let username = "zain"
    console.log(this.username);
    
}

//chaai()


const chai = () => {
    let username = "zain"
    console.log(this.username); 

}
//chai()

//const addTwo = (num1,num2) => {
    // return num1 + num2
//}
//console.log(addTwo(5,9));

//const addthree = (num1, num2, num3) => (num1 + num2 + num3)
//console.log(addthree())

//const myArray = [2,4,5,7]

//IIFE
(function name(){
    console.log(`DB CONNECTED`);
    
})();

(()=>{
    console.log(`DB connected`);
    
})()