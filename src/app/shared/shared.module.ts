import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent, SocialComponent],
  exports:[HeaderComponent, NavbarComponent, FooterComponent, SocialComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
