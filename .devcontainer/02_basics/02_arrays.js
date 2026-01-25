const marvel_heros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]
//problem array inside array that we not require
//marvel_heros.push(dcHeros)
//console.log(marvel_heros);

//merge both array
//const allHeros = marvel_heros.concat(dcHeros)
//console.log((allHeros));


//spread

//const allHeros = [...marvel_heros,...dcHeros]
//console.log(allHeros);


//merging array inside array
const interstingArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


const newArray = interstingArray.flat(Infinity)
console.log(newArray);

//this is not array
console.log(Array.isArray("zain"))


//converting to Array
console.log(Array.from({name : "zain"})) //interseting
//return empty array


let score1 = 100
let score2 = 200
let score3 =  300

console.log(Array.of(score1,score2,score3));

