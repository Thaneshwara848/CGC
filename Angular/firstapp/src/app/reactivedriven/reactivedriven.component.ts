import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivedriven',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactivedriven.component.html',
  styleUrl: './reactivedriven.component.css'
})
export class ReactivedrivenComponent implements OnInit{

    student:any;
    
     ngOnInit(): void {
    
      this.student=new FormGroup({
    
        firstname:new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-z]*$')
        ])),
        
        lastname:new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ])),
        
        age:new FormControl("",Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(60)
        ])),
      })
     }
}
