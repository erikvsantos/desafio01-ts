import { CompanyAccount } from "./class/CompanyAccount"
import { InvestimentAccount } from "./class/InvestmentAccount"
import { PeopleAccount } from "./class/PeopleAccount"


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Erik', 10)
peopleAccount.deposit(20)
peopleAccount.getBalance()
peopleAccount.deposit(25)
peopleAccount.getBalance()
peopleAccount.withdraw(10)
peopleAccount.getBalance()


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(1000)
companyAccount.getBalance()


const investimentAccount: InvestimentAccount = new InvestimentAccount('Joao', 2)
investimentAccount.deposit(1000)
investimentAccount.getBalance()

