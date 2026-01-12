const accountId = 123455;
let accountEmial = "xsin123@gmail.com";
var accountPassword = "123.ABC";
accountCity = "Kent";

//accountId = 2 (not allowed)

accountEmial = "z@"
accountPassword = "09725"
accountCity = "lahore"

console.log(accountId);

console.table([accountEmial, accountId, accountPassword, accountCity])

/* 
perfer not to use Var. beacuse of issue in block scope and functional scope
*/

let accountState;
console.log(accountState);
