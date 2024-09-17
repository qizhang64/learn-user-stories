import Bank from "../src/bank";

// setup
const bnk = new Bank();

// scenatio 1: create a new bank account
const account = bnk.createAccount("John Doe", 29, "2938298");
if (account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

// scenatio 2: create a new bank account with duplicate account number
try {
    bnk.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch {
    console.log("Scenario 2 passed");
}

// scenatio 3: deposit a positive amount
try {
    const updatedAccount = bnk.deposit("2938298", 500);
    if (updatedAccount.balance === 500) {
        console.log("Scenario 3 passed");
    } else {
        console.log("Scenario 3 failed");
    }
} catch {
    console.log("Scenario 3 failed");
}

// scenario 4: deposit a negative amount
try {
    bnk.deposit("2938298", -100);
    console.log("Scenario 4 failed");
} catch {
    console.log("Scenario 4 passed");
}

// scenario 5: deposit to an unfound account
try {
    bnk.deposit("9999999", 100);
    console.log("Scenario 5 failed");
} catch {
    console.log("Scenario 5 passed");
}

// scenatio 6: withdraw a positive amount
try {
    const updatedAccount = bnk.withdraw("2938298", 200);
    if (updatedAccount.balance === 300) {
        console.log("Scenario 6 passed");
    } else {
        console.log("Scenario 6 failed");
    }
} catch {
    console.log("Scenario 6 failed");
}

// scenario 7: withdraw a negative amount
try {
    bnk.withdraw("2938298", -100);
    console.log("Scenario 7 failed");
} catch {
    console.log("Scenario 7 passed");
}

// scenario 8: withdraw more money than the balance
try {
    bnk.withdraw("2938298", 1000);
    console.log("Scenario 8 failed");
} catch {
    console.log("Scenario 8 passed");
}

// scenario 9: withdraw from an unfound account
try {
    bnk.withdraw("9999999", 100);
    console.log("Scenario 9 failed");
} catch {
    console.log("Scenario 9 passed");
}

// scenario 10: check the balance of the account
try {
    const updatedAccount = bnk.checkBalance("2938298");
    if (updatedAccount.balance === 300) {
        console.log("Scenario 10 passed");
    } else {
        console.log("Scenario 10 failed");
    }
} catch {
    console.log("Scenario 10 failed");
}

// scenario 11: check the balance of an unfound account
try {
    bnk.checkBalance("9999999");
    console.log("Scenario 11 failed");
} catch {
    console.log("Scenario 11 passed");
}