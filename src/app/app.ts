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


@Component({
  selector: 'app-root',
  imports: [ButtonModule, SplitButtonModule, ToggleButton, FormsModule, Darkmode, speeddial, dropmenu, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('css-stlye-app');

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







