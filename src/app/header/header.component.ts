import { Component, Input } from '@angular/core';
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
  linkNo:Number = 1;

  constructor(private router: Router) {}

  moveToHome(){
    this.router.navigate(['home']);
    this.linkNo = 1;
  }
  moveToPages(){
    this.router.navigate(['notFound']);
    this.linkNo = 2;
  }
  moveToInsurance(){
    this.router.navigate(['features']);
    this.linkNo = 3;
  }
  moveToBlog(){
    this.router.navigate(['notFound']);
    this.linkNo = 4;
  }
  moveToContact(){
    this.router.navigate(['contact']);
    this.linkNo = 5;
  }

}
