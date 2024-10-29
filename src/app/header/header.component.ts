import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() linkNo:Number = 1;
  @Output() changeLink = new EventEmitter<Number>();

  constructor(private router: Router) {}

  moveToHome(){ // highlight specific a tag and update the current page number
    this.router.navigate(['home']);
    this.changeLink.emit(1);
  }
  moveToPages(){
    this.router.navigate(['notFound']);
    this.changeLink.emit(2);
  }
  moveToInsurance(){
    this.router.navigate(['features']);
    this.changeLink.emit(3);
  }
  moveToBlog(){
    this.router.navigate(['notFound']);
    this.changeLink.emit(4);
  }
  moveToContact(){
    this.router.navigate(['contact']);
    this.changeLink.emit(5);
  }

}
