const name = "zain"
const repoCount = 50
console.log(`My name is ${name} and this is my repo ${repoCount} `);


const gameName = new String ("zain")

console.log(gameName[1])
//console.log(gameName.__proto_.String);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf("n"));

const newString = gameName.substring(0, 3)
console.log(newString);

//slice negative value

const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const secString = "   zain   "
const newdoc = secString.trim
console.log(secString);


const url = "https://zain.com/zain%20awan"
const newthing = url.replace("%20", "-")
console.log(newthing);


const check = url.includes("zain")
console.log(check);

const newMethod = url.split
console.log(newMethod);








