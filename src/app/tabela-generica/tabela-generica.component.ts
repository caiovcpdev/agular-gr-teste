import { Component, Input } from '@angular/core';
import { CadastroGenericoComponent } from '../cadastro-generico/cadastro-generico.component';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tabela-generica',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, DialogModule, InputTextModule, CadastroGenericoComponent],
  templateUrl: './tabela-generica.component.html',
  styleUrl: './tabela-generica.component.css'
})
export class TabelaGenericaComponent {
  @Input() dados: any[] = [];
  @Input() colunas: any[] = [];
}
