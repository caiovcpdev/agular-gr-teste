import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteComponent } from './clientes/clientes.component';
import { LoteComponent } from './cadastro/lote/lote.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },

    { path: 'cliente', component: ClienteComponent },
    { path: 'equipamento', component: EquipamentosComponent },
    { path: 'lote', component: LoteComponent }
];
