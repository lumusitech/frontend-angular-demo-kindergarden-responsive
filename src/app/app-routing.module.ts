import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './main-page/contact-form/contact-form.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';

const routes: Routes = [
  {path:'', pathMatch: "full", component: MainPageComponent},
  {path:'contact', component: ContactFormComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
