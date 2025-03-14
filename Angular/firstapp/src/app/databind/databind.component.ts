import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  standalone: true,
  imports: [],
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent {

  username="Thanesh";
  mychoice=false;
  abc(){
    console.log("Hi You CLicke dth ebutton")
  }
  myname(name:any){
    console.log("Hi MyName method"+name)
  }

  add(a:string,b:string){
    const a1=parseInt(a);
    const b1=parseInt(b);

    alert(a1+b1)
  }
  total=0;
  emi=0;
  cal(p:string,r:string,t:string){
    const pri =parseInt(p);
    const roi =parseInt(r);
    const time =parseInt(t);
 
     this.total=(pri*time*roi)/100;
     this.emi= this.total/time;
   }
}