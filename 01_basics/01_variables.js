const accountId = 144553
let accountEmail = "ankush@google.com"
var accountPassword = "12345"
accountCity = "Sivsagar"
let accountState
let accountountry = null


// accountId = 23312 // not allowed
accountEmail = "goswami@google.com"
accountPassword = "9876"
accountCity = "jaipur"

console.log(accountId)
/*
prefer not to use var 
because of issue in 
block scope and functional scope  
*/

console.table([accountId, accountEmail, accountPassword,
     accountCity,accountState, accountountry])