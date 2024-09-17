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
            throw new Error("Account already exists");
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

    /**
     * Deposit money into a bank account
     * @param accountNumber -- account number of the customer
     * @param amount -- amount deposit into account
     * @returns BankAccount -- account with updated balance
     */
    public deposit(accountNumber: string, amount: number): BankAccount {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        else if (amount<=0) {
            throw new Error("Deposit amount must be a positive number");
        }
        else {
            account.balance += amount;
            return account;
        }
    }

    /**
     * Withdraw money from a bank account
     * @param accountNumber -- account number of the customer
     * @param amount -- amount withdraw from account
     * @returns BankAccount -- account with updated balance
     */
    public withdraw(accountNumber: string, amount: number): BankAccount {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        else if (amount<=0) {
            throw new Error("Withdraw amount must be a positive number");
        }
        else if (amount > account.balance) {
            throw new Error("Withdraw amount cannot exceed account balance");
        }
        else {
            account.balance -= amount;
            return account;
        }
    }

    /**
     * Check the balance of an account
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- account with current balance
     */
    public checkBalance(accountNumber: string): BankAccount {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        return account;
    }
}