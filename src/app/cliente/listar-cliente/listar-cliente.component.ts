import { Component } from '@angular/core';
import { TabelaGenericaComponent } from '../../shared/tabela-generica/tabela-generica.component';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [TabelaGenericaComponent, CardModule],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {
  //Definindo colunas e dados
  colunasCliente = [
    { field: 'razaoSocial', header: 'Razão Social' },
    { field: 'uf', header: 'UF' },
    { field: 'secretaria', header: 'Secretaria' }
  ];

  clientesDados = [
    { razaoSocial: 1, uf: 'L001', secretaria: 'Lote A' },
    { razaoSocial: 2, uf: 'L002', secretaria: 'Lote B' }
  ];
}
