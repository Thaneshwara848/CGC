import { Component } from '@angular/core';
import { TempletdrivenComponent } from "../templetdriven/templetdriven.component";
import { ReactivedrivenComponent } from "../reactivedriven/reactivedriven.component";

@Component({
  selector: 'app-fromsdemo',
  standalone: true,
  imports: [TempletdrivenComponent, ReactivedrivenComponent],
  templateUrl: './fromsdemo.component.html',
  styleUrl: './fromsdemo.component.css'
})
export class FromsdemoComponent {

}
