const accountId = 14456
let accountEmail = "jayrajbhatia95@gmail.com"
var accountPassword = "12344"
accountCity = "Surat"
let accountState;

// accountId = 2 not allowed 

accountEmail = "jb@gmail.com"

accountPassword = "5678"

accountCity = "baroda"

// prefer not to use var because of issue in block scope and functional scope {}-> this is scope

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
console.log(accountId);
