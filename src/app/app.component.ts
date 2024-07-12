import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstTemplateComponent } from './components/first-template/first-template.component';

@Component({
  selector: 'app-root' , 
  standalone: true,
  imports: [RouterOutlet, FirstTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anguproject';
  name = "piyush salvi"
}
