import { makeAutoObservable } from "mobx";

export interface Expense {
  id: number;
  title: string;
  amountPln: number;
  amountEur: number;
}

const validateGenericNumber = (fieldName: string, value: number) => {
  if (isNaN(value)) {
    return `${fieldName} value has to be a correct number`;
  }
  if (!value) {
    return `${fieldName} value is required`;
  }
  if (value % 1 && String(value).split(".")[1].length > 2) {
    return "Only two decimal places are allowed";
  }
  return "";
};

interface IStore {
  expenses: Expense[];
  newExpenseTitle: string;
  newExpenseAmount: string;
  newExpenseTitleError: string;
  newExpenseAmountError: string;
  euroValueError: string;
  euroVal: string;
  sum: number;
  sumEuro: number;
  validateTitle: () => void;
  validateAmount: () => void;
  validateEuroVal: () => void;
  addExpense: () => void;
  deleteExpense: (id: number) => void;
  clearForm: () => void;
}

class Store implements IStore {
  expenses: Expense[] = [];
  newExpenseTitle = "";
  newExpenseAmount = "";

  newExpenseTitleError = "";
  newExpenseAmountError = "";
  euroValueError = "";

  euroVal = "4.55";

  constructor() {
    makeAutoObservable(this);
  }

  get sum() {
    return this.expenses.reduce((total, { amountPln }) => total + amountPln, 0);
  }

  get sumEuro() {
    return this.expenses.reduce((total, { amountEur }) => total + amountEur, 0);
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
      error = "Title should have at least 5 characters";
    }
    this.newExpenseTitleError = error;
  }

  validateAmount() {
    const amount = Number(this.newExpenseAmount.replaceAll(",", "."));
    this.newExpenseAmountError = validateGenericNumber("Amount", amount);
  }

  validateEuroVal() {
    const euroVal = Number(this.euroVal.replaceAll(",", "."));
    this.euroValueError = validateGenericNumber("Euro", euroVal);
  }

  addExpense() {
    const amountPln = Number(this.newExpenseAmount.replaceAll(",", "."));
    const title = this.newExpenseTitle.trim();
    const euroVal = Number(this.euroVal.replaceAll(",", "."));

    this.validateTitle();
    this.validateAmount();
    this.validateEuroVal();

    const hasError = this.newExpenseTitleError || this.newExpenseAmountError;

    if (hasError) {
      return false;
    }

    const newExpense: Expense = {
      id: new Date().getTime(),
      title,
      amountPln,
      amountEur: Number((amountPln / euroVal).toFixed(2)),
    };

    this.expenses = [...this.expenses, newExpense];
  }

  clearForm() {
    this.newExpenseTitle = "";
    this.newExpenseAmount = "";
    this.newExpenseTitleError = "";
    this.newExpenseAmountError = "";
    this.euroValueError = "";
  }

  deleteExpense(id: number) {
    setTimeout(() => {
      this.expenses = this.expenses.filter((expense) => expense.id !== id);
    });
  }
}

export const store = new Store();
