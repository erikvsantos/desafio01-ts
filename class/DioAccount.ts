export abstract class Account {
    private name: string
    private readonly accountNumber: number
    protected balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (balance: number): void => {
        if (this.validateStatus()) {
            this.balance += balance
            console.log('Voce depositou:', balance)
        }
    }

    withdraw = (balance: number): void => {
        if (this.validateStatus() && this.balance > balance) {
            this.balance -= balance;
            console.log('Voce sacou:', balance)
        } else {
            console.log('Saldo insuficiente')
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta invalida')
    }
}