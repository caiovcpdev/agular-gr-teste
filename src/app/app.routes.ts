import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './cadastro/clientes/clientes.component';
import { EquipamentoComponent } from './cadastro/equipamento/equipamento.component';
import { LoteComponent } from './cadastro/lote/lote.component';

export const routes: Routes = [
    { path:'', component: LoginComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 

    { path: 'cliente', component: ClientesComponent }, 
    { path: 'equipamento', component: EquipamentoComponent }, 
    { path: 'lote', component: LoteComponent } 
];
