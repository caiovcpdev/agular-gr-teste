import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CriarClienteComponent } from './cliente/criar/clientes.component';
import { LoteComponent } from './lote/lote.component';
import { EquipamentosComponent } from './equipamentos/criar/equipamentos.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { ListarEquipamentosComponent } from './equipamentos/listar-equipamentos/listar-equipamentos.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path:'', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cliente/criar', component: CriarClienteComponent },
    { path: 'cliente/listar', component: ListarClienteComponent },
    { path: 'equipamento/criar', component: EquipamentosComponent },
    { path: 'equipamento/listar', component: ListarEquipamentosComponent },
    { path: 'lote', component: LoteComponent },
    { path: '**', component: NotFoundComponent }
];
