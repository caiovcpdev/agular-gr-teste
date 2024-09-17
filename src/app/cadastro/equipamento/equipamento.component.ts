import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TabelaComponent } from '../../shared/tabela/tabela.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-equipamento',
  standalone: true,
  imports: [FormsModule, InputTextModule, TabelaComponent, NavbarComponent],
  templateUrl: './equipamento.component.html',
  styleUrl: './equipamento.component.css'
})
export class EquipamentoComponent {
  value: string | undefined;

}
