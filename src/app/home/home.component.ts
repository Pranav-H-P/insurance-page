import { Component } from '@angular/core';
import { HeroSectionComponent } from "../sections/hero-section/hero-section.component";
import { FeaturesComponent } from "../sections/features/features.component";
import { CallToActionComponent } from "../sections/call-to-action/call-to-action.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, FeaturesComponent, CallToActionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
