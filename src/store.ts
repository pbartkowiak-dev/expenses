import { makeAutoObservable } from "mobx";

export interface Expense {
  title: string;
  amountPln: number;
  amountEur: number;
}

class Store {
  expenses: Expense[] = [];
  newExpenseTitle: string = "";
  newExpenseAmount: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addExpense() {
    console.log("ad expense", this.newExpenseTitle, this.newExpenseAmount);
    // this.expenses.push();
  }
}

export const store = new Store();
