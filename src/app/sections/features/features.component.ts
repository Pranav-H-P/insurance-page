import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  featuresList:String[][] = [
    [
      "../../../assets/images/moneyBack.png",
      "Money Back Guarantee",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed."
    ],
    [
      "../../../assets/images/claimsAtAnyTime.png",
      "All Claims At Anytime",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed."
    ],
    [
      "../../../assets/images/digitalInsurance.png",
      "Digital Insurance Policy",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed."
    ],
    [
      "../../../assets/images/directPayment.png",
      "Direct Payment App",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed."
    ]
  ];

  servicesList:String[][] = [
    [ 
      "../../../assets/images/familyCouch.jpg",
      "Insurance • Vehicle",
      "Business Insurance"
    ],
    [
      "../../../assets/images/familyChild.jpg",
      "Insurance • Vehicle",
      "Vehicle Insurance"
    ],
    [
      "../../../assets/images/elderlyCouple.jpg",
      "Insurance • Car",
      "Car Insurance"
    ]
  ];
}
