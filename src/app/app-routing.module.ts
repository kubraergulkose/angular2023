import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:HomepageComponent},
  {path: 'firstpage', component:FirstPageComponent},
  {path: 'secondpage/:id', component:SecondPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
