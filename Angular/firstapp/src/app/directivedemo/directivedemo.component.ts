import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-directivedemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directivedemo.component.html',
  styleUrl: './directivedemo.component.css'
})
export class DirectivedemoComponent {

  // abc=true;based on condition we can display
     abc=false; 
     emp=["Abi","Bindu","Chandu","Darshan"]

     displa(){
      for(var i = 0 ;i<this.emp.length;i++){
          console.log(this.emp[i])
      }
     }
     fruit=["Apple","Banana","Chicko","Dates","Graps"]

     addfruit(newFruit:any){
      this.fruit.push(newFruit);
    }
      empdetails=[{"id":100,"Name":"Abi"},{"id":200,"Name":"SINDU"}]
      num='10';
  } 
