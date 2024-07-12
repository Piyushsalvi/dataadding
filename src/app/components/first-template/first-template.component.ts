import { Component } from '@angular/core';

@Component({
  selector: 'app-first-template',
  standalone: true,
  imports: [],
  templateUrl: './first-template.component.html',
  styleUrl: './first-template.component.css'
})
export class FirstTemplateComponent {
  name = "welcome in compoenents"

}
