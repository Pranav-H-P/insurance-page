import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallToActionComponent } from './sections/call-to-action/call-to-action.component';
import { FeaturesComponent } from './sections/features/features.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { NotFoundComponent } from './sections/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
        
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: CallToActionComponent
    },
    {
        path: 'features',
        component: FeaturesComponent
    },
    {
        path: 'heroSection',
        component: HeroSectionComponent
    },
    {
        path: 'notFound',
        component: NotFoundComponent
    }
];
