import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SqrPipe } from '../sqr.pipe';
import { CuberPipe } from '../cuber.pipe';

@Component({
  selector: 'app-pipedemo',
  standalone: true,
  imports: [CommonModule,SqrPipe,CuberPipe],
  templateUrl: './pipedemo.component.html',
  styleUrl: './pipedemo.component.css'
})
export class PipedemoComponent {

  info="tHanEsh iS a trainer";
  
  amount=123456789;

  d = new Date();
}
