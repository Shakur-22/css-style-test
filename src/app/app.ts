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


interface Expense {
  id: number;
  name: string;
  amount: number;
  date: string;
  category: string;
  description: string;
}


@Component({
  selector: 'app-root',
  imports: [ButtonModule, SplitButtonModule, ToggleButton, FormsModule, Darkmode, speeddial, dropmenu, Sidebar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('css-stlye-app');



constructor(public categoryService: CategoryService) {}

get selectedCategory() {
  return this.categoryService.activeCategory;
}

id = 0


expenses: Expense[] = [
  {
    id: 1,
    name: "Netflix",
    amount: 15.99,
    date: "2025-10-01",
    category: "Subscriptions",
    description: "Monthly streaming subscription"
  },
  {
    id: 2,
    name: "Spotify Premium",
    amount: 10.99,
    date: "2025-10-01",
    category: "Subscriptions",
    description: "Music streaming service"
  },
  {
    id: 3,
    name: "Electric Bill",
    amount: 120.50,
    date: "2025-10-05",
    category: "Recurring Bills",
    description: "Monthly electricity payment"
  },
  {
    id: 4,
    name: "Internet Service",
    amount: 79.99,
    date: "2025-10-08",
    category: "Recurring Bills",
    description: "Monthly internet bill"
  },
  {
    id: 5,
    name: "Grocery Shopping",
    amount: 145.30,
    date: "2025-10-10",
    category: "Food",
    description: "Weekly groceries"
  },
  {
    id: 6,
    name: "Restaurant Dinner",
    amount: 67.25,
    date: "2025-10-12",
    category: "Food",
    description: "Dinner with friends"
  },
  {
    id: 7,
    name: "Movie Tickets",
    amount: 32.00,
    date: "2025-10-15",
    category: "Entertainment",
    description: "Two tickets for new movie"
  },
  {
    id: 8,
    name: "Concert Tickets",
    amount: 89.00,
    date: "2025-10-18",
    category: "Entertainment",
    description: "Live music event"
  }
]


  printCategory() {
    console.log(this.categoryService.activeCategory);
    // Use this.categoryService.activeCategory anywhere
  }




  filterCategory(category: string) {
    return this.expenses.filter(expense => expense.category == category);
  }

  filterID(id: number) {
    return this.expenses.filter(expense => expense.id == id);
  }


  save() {
    alert('test')
  }

 items: MenuItem[] = [
  {
    label: 'Test',
    icon: 'pi pi-refresh',
    command: () => {
      this.save();
      }
  }
 ]

 checked: boolean = false;





}







