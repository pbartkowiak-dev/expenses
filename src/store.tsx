import { makeAutoObservable } from "mobx";
import React from "react";

export interface Expense {
  id: number;
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
    const amountPln = Number(this.newExpenseAmount);
    const title = this.newExpenseTitle.trim();

    const newExpense: Expense = {
      id: new Date().getTime(),
      title,
      amountPln,
      amountEur: amountPln * 0.22,
    };

    this.expenses.push(newExpense);

    this.newExpenseTitle = "";
    this.newExpenseAmount = "";
  }

  deleteExpense(id: number) {
    setTimeout(() => {
      this.expenses = this.expenses.filter((expense) => expense.id !== id);
    });
  }
}

export const store = new Store();
