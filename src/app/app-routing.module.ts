import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },

  {
    path: 'me', component: MeComponent,
  },

  {
    path: 'register', component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
