const coding = ["js","ruby","swift","cpp","java","py"]
//some loops already directly added

// coding.forEach( function (val){
//     console.log(val);
    
// }  )

// coding.forEach((item) => {
//     console.log(item);
    
// })

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //only refernce not execution like()

coding.forEach((item,index, arr)=>{ // excess of index and array as well
console.log(item,index,arr);

})