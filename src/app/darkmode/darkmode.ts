import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-darkmode',
  imports: [ButtonModule],
  templateUrl: './darkmode.html',
  styleUrl: './darkmode.css'
})
export class Darkmode {

  	toggleDarkMode() {
	    document.documentElement.classList.toggle('my-app-dark');
	}
	
	
	
	myFunction() {
	   var element = document.body;
	   element.classList.toggle("dark-mode");
	}

}
