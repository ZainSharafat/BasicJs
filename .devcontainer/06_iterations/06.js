//const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item)=>{

//     //console.log(item);
//     return item
    
// })

// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNUms = myNums.filter((num)=>{
//     return num>4 //in case of scope return keyword will be used

// }) //call back


//another method
//const newNUms = []

// myNums.forEach(num => {
//     if (num > 4){
//         newNUms.push(num)
//     }
// });
//console.log(newNUms);


// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10)

// console.log(newNums);


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => num * 10) //array passed to next method
                         .map((num)=> num + 1)
                         .filter((num)=>num>=40)

                         console.log(newNums);
                         