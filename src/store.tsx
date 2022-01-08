import { makeAutoObservable } from "mobx";
import React from "react";

export interface Expense {
  id: number;
  title: string;
  amountPln: number;
}

class Store {
  expenses: Expense[] = [];
  newExpenseTitle = "";
  newExpenseAmount = "";

  newExpenseTitleError = "";
  newExpenseAmountError = "";

  constructor() {
    makeAutoObservable(this);
  }

  validateTitle() {
    const title = this.newExpenseTitle.trim();
    let error = "";

    if (!title) {
      error = "Title cannot be empty";
    }
    if (title.length > 20) {
      error = "Title is too long";
    }
    if (title.length < 5) {
      error = "Title is too short";
    }
    this.newExpenseTitleError = error;
  }

  validateAmount() {
    const amount = Number(this.newExpenseAmount);
    let error = "";

    if (isNaN(amount)) {
      error = "Amount has to be a correct number";
    }
    if (!amount) {
      error = "Amount value is required";
    }
    if (amount % 1 && String(amount).split(".")[1].length > 2) {
      error = "Only two decimal places are allowed";
    }
    this.newExpenseAmountError = error;
  }

  addExpense() {
    const amountPln = Number(this.newExpenseAmount);
    const title = this.newExpenseTitle.trim();

    this.validateTitle();
    this.validateAmount();

    const hasError = this.newExpenseTitleError || this.newExpenseAmountError;

    if (hasError) {
      return false;
    }

    const newExpense: Expense = {
      id: new Date().getTime(),
      title,
      amountPln,
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
