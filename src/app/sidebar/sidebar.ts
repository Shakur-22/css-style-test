import { Component, Input, Output, EventEmitter, input, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';



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
    imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass, CommonModule]
})
export class Sidebar {
    @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e: any): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;









 @Input() addForm: boolean = false;
 @Input() selectedCategory!: string

 @Output() toggleForm = new EventEmitter<void>()
 @Output() changeCategory = new EventEmitter<string>()

 onAddExpenseClick() {
  this.toggleForm.emit()
 }

 onChangeCategory(category: string) {
  this.changeCategory.emit(category)
 }

}
