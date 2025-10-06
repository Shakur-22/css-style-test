import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { ToggleButton} from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { Darkmode } from './darkmode/darkmode';
import { speeddial } from './speeddial/speeddial';
import { dropmenu } from "./dropmenu/dropmenu";
import { Sidebar } from './sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { appChart } from "./chart/chart";




interface Expense {
  id: string;
  name: string;
  amount: number;
  date: string;
  category: string;
  description: string;
}




@Component({
  selector: 'app-root',
  imports: [ButtonModule, SplitButtonModule, FormsModule, Darkmode, Sidebar, CommonModule, InputNumberModule, InputTextModule, DatePickerModule, SelectModule, ChartModule, appChart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('css-stlye-app');



  ngOnInit() {
    this.loadExpenses();
  }

selectedCategory = ''

addForm = false

isDashboard = true



toggleForm() {
  this.addForm = !this.addForm;
  this.isDashboard = !this.isDashboard
}

generateId(): string {
  return Math.random().toString(36).substring(2, 7);
}
addExpense() {
  this.expenses.push(this.newExpense)
  this.saveExpenses()
  this.newExpense =   {
    id: this.generateId(),
    name: "",
    amount: 0,
    date: "",
    category: "",
    description: ""
  }
  this.addForm = !this.addForm;
  this.isDashboard = !this.isDashboard
}

newExpense =
  {
    id: 'andew',
    name: "",
    amount: 0,
    date: "",
    category: "",
    description: ""
  }

Categories = ['Food', 'Subscriptions', 'Entertainment', 'Recurring Bills']
id = ''
allexpenses = false

expenses: Expense[] = [
  {
    id: 'abt92',
    name: "Netflix",
    amount: 15.99,
    date: "2025-10-01",
    category: "Subscriptions",
    description: "Monthly streaming subscription"
  },
  {
    id: 'eidmn',
    name: "Spotify Premium",
    amount: 10.99,
    date: "2025-10-01",
    category: "Subscriptions",
    description: "Music streaming service"
  },
  {
    id: '48ur5',
    name: "Electric Bill",
    amount: 120.50,
    date: "2025-10-05",
    category: "Recurring Bills",
    description: "Monthly electricity payment"
  },
  {
    id: 'dhfbx',
    name: "Internet Service",
    amount: 79.99,
    date: "2025-10-08",
    category: "Recurring Bills",
    description: "Monthly internet bill"
  },
  {
    id: 'epa25',
    name: "Grocery Shopping",
    amount: 145.30,
    date: "2025-10-10",
    category: "Food",
    description: "Weekly groceries"
  },
  {
    id: 'qnc93',
    name: "Restaurant Dinner",
    amount: 67.25,
    date: "2025-10-12",
    category: "Food",
    description: "Dinner with friends"
  },
  {
    id: 'mksoe',
    name: "Movie Tickets",
    amount: 32.00,
    date: "2025-10-15",
    category: "Entertainment",
    description: "Two tickets for new movie"
  },
  {
    id: 'eus3n',
    name: "Concert Tickets",
    amount: 89.00,
    date: "2025-10-18",
    category: "Entertainment",
    description: "Live music event"
  }
]







  filterCategory(category: string) {
    return this.expenses.filter(expense => expense.category == category);
  }

  filterID(id: string) {
    return this.expenses.filter(expense => expense.id == id);
  }

  delete(id: string) {
    this.expenses = this.expenses.filter(item => item.id !== id)
    this.saveExpenses()
}



  dashboard() {
    this.addForm = false;
    this.selectedCategory = ''
    this.isDashboard = true
    
  }

  changeCategory(category: string) {
    this.selectedCategory = category
    this.id = ''
  }


  get categoryTotals() {
    const totals: { [key: string]: number } = {};
    
    this.expenses.forEach(expense => {
      totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    });
    
    return Object.keys(totals).map(category => ({
      name: category,
      value: totals[category]
    }));
  }


get grandTotal() {
  return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
}



  loadExpenses() {
    const saved = localStorage.getItem('expenses');
    if (saved) {
      this.expenses = JSON.parse(saved);
    } else {
      // Default data if nothing saved
      this.expenses = [
        { id: 'abt92', name: "Netflix", amount: 15.99, date: "2025-10-01", category: "Subscriptions", description: "Monthly streaming subscription" },
        // ... your other default expenses
      ];
    }
  }

  saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

}







