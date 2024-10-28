import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerTitles: string[] = ["Company", "Explore", "Insurance"];
  footerContent: string[][] =[
    ["Case Studies", "Case Details", "Privacy Policy"],
    ["About Us", "Blog and News", "Blog Details", "Pricing"],
    ["Health Insurance", "Car Insurance", "Business Insurance", "Life Insurance"]
  ];
  
  constructor(private router:Router){}

  linkClicked(){
    this.router.navigate(['notFound']);
  }

}
