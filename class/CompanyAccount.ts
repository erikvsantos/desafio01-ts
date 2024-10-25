import { Account } from "./DioAccount"

export class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (balance: number): void => {
        if (this.validateStatus()){
            this.balance = balance
            console.log('Voce pegou um emprestimo', balance)
        }
    }

}