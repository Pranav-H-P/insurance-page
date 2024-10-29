import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent {

  userEmail: string = "";

  sendToAPI(){
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailRegex.test(this.userEmail)){
      alert(`Your Email: ${this.userEmail} has been successfully added!`);
    }else{
      alert("Please enter a valid email!");
    }
    
  }
}
