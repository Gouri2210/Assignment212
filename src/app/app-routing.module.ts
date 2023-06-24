import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './task1/form/form.component';
import { HomeComponent } from './task2/home/home.component';
import { RegSuccessComponent } from './task2/reg-success/reg-success.component';
import { LoginComponent } from './task2/login/login.component';
import { DrListComponent } from './task2/dr.list/dr.list.component';

const routes: Routes = [
  {path:'form', component:FormComponent},
  {path:'home', component:HomeComponent},
  {path:'regS', component:RegSuccessComponent },
  {path:'login', component:LoginComponent},
  {path:'list', component: DrListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
