interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

// bank class that manages all bank accounts in the bank
export default class Bank {
    // array to store all bank accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * find whether the account number already exists
     * @param accountNumber 
     * @returns Bank account is found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber == accountNumber);
    }

    /**
     * create a new account with a unique account number
     * @param name -- name of the customer
     * @param age -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists") ;
        }
        else {
            const account : BankAccount = {
                name: name,
                age: age,
                accountNumber: accountNumber,
                balance: 0
            };
            this.accounts.push(account);
            return account;
        }
    }
}