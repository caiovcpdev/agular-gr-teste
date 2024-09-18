import { Component } from '@angular/core';
import { TabelaComponent } from '../../shared/tabela/tabela.component';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TabelaGenericaComponent } from '../../tabela-generica/tabela-generica.component';


@Component({
  selector: 'app-lote',
  standalone: true,
  imports: [TabelaComponent, CardModule, NavbarComponent, TabelaGenericaComponent],
  templateUrl: './lote.component.html',
  styleUrl: './lote.component.css'
})
export class LoteComponent {
  //Definindo colunas e dados
  colunasLote = [
    { field: 'id', header: 'ID' },
    { field: 'codigo', header: 'Código' },
    { field: 'descricao', header: 'Descrição' }
  ];

  lotesDados = [
    { id: 1, codigo: 'L001', descricao: 'Lote A' },
    { id: 2, codigo: 'L002', descricao: 'Lote B' }
  ];
  
}
