class Account{
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string;

    constructor(id: number, owner:string, balance:number){
        this.id = id
        this.owner = owner
        this.balance = balance
    }

    deposit(amount:number): void{
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount
    }
}

let account = new Account(123,'Ahad',1000)
account.deposit(2000)
console.log(account.balance);

