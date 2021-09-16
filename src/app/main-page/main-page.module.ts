import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactFormComponent, LocationMapComponent, MainPageComponent, AboutComponent, SidebarComponent, SliderComponent],
  exports:[MainPageComponent, ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MainPageModule { }
