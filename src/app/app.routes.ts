import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component'
import {CarroComponent} from './pages/carro/carro.component'
export const routes: Routes = [
    {path: "",component:HomeComponent },
    {path: "login",component:LoginComponent},
    {path: "register",component:RegisterComponent},
    {path: "carro", component:CarroComponent},
    {path: "**", component:HomeComponent}
];
