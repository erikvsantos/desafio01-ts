import { Account } from "./DioAccount";

export class InvestimentAccount extends Account {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (balance: number): void => {
        this.balance = balance + 10
        console.log('voce depositou: ', balance)
    }
}