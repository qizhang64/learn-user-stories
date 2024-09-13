import Bank from "../src/bank";

// setup
const bnk = new Bank();

// scenatio 1
const account = bnk.createAccount("John Doe", 29, "2938298");
if (account.accountNumber == "2938298") {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

// scenatio 2
try {
    bnk.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch {
    console.log("Scenario 2 passed");
}