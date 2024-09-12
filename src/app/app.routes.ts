import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TvlComponent } from './tvl/tvl.component';

export const routes: Routes = [
    { path:'', component: LoginComponent }, // Rota para o componente Home
    { path: 'login', component: LoginComponent }, // Rota para o componente Login
    { path: 'dashboard', component: DashboardComponent }, // Rota para o componente Dashboard
    { path: 'cadastro', component: CadastroComponent }, // Rota para o componente Dashboard
    { path: 'tvl', component: TvlComponent }
];
