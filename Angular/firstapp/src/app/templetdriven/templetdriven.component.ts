import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-templetdriven',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './templetdriven.component.html',
  styleUrl: './templetdriven.component.css'
})
export class TempletdrivenComponent {

  userdate(userdata:any){

    console.log(userdata)
  }
}
