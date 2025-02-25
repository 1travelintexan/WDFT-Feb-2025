// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}
// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// const income1 = new Income("today", 50, "on dog treats");
// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid;
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(oneEntry) {
    this.entries.push(oneEntry);
  }
  getCurrentBalance() {
    let totalMoney = 0;
    this.entries.forEach((elem) => {
      if (elem.type === "income") {
        totalMoney += elem.amount;
      } else if (elem.type === "expense") {
        totalMoney -= elem.amount;
      }
    });
    return totalMoney;
  }
  getFormattedEntries() {
    const strArray = [];
    this.entries.forEach((oneEntryInLoop) => {
      if (oneEntryInLoop.type === "income") {
        strArray.push(
          `${oneEntryInLoop.date} | ${
            oneEntryInLoop.description
          } | ${oneEntryInLoop.getFormattedAmount()}`
        );
      } else if (oneEntryInLoop.type === "expense") {
        strArray.push(
          `${oneEntryInLoop.date} | ${
            oneEntryInLoop.description
          } | ${oneEntryInLoop.getFormattedAmount()}`
        );
      }
    });
    return strArray;
  }
}
const ourBudget = new Budget();
// ourBudget.addEntry(new Income("today", 50, "did a lecture"));
// this is 'today', amount: 50, description: 'did a lecture'}]
