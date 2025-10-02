import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
import { CategoryService } from '../category.service';


interface Expense {
  id: number;
  name: string;
  amount: number;
  date: string;
  category: string;
  description: string;
}

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css',
    standalone: true,
    imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass]
})
export class Sidebar {
    @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e: any): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;


    test() {
      alert('test')
    }


activeCategory = 'All Categories'

  constructor(public categoryService: CategoryService) {}

  selectCategory(category: string) {
    this.categoryService.activeCategory = category;
  }


}
