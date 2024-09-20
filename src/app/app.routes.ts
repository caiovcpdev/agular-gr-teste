import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CriarClienteComponent } from './cliente/criar/clientes.component';
import { LoteComponent } from './cadastro/lote/lote.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },

    { path: 'cliente/criar', component: CriarClienteComponent },
    { path: 'cliente/listar', component: ListarClienteComponent },
    { path: 'equipamento/criar', component: EquipamentosComponent },
    { path: 'lote', component: LoteComponent }
];
