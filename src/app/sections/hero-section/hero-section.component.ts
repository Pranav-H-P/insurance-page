import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {


  constructor(private router:Router){}

  goToContact(){
    this.router.navigate(['contact']);
  }
  goToNotFound(){
    this.router.navigate(['notFound']);
  }
  
}
