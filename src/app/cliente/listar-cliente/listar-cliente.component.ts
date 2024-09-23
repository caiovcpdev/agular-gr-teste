import { Component, OnInit } from '@angular/core';
import { TabelaGenericaComponent } from '../../shared/tabela-generica/tabela-generica.component';
import { CardModule } from 'primeng/card';
import { Cliente } from '../../../services/Cliente';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [TabelaGenericaComponent, CardModule],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})


export class ListarClienteComponent implements OnInit {

  //private subscription: Subscription = new Subscription(); // Inicializa com uma nova instância

  //Definindo colunas e dados
  colunasCliente = [
    { field: 'razaoSocial', header: 'Razão Social' },
    { field: 'uf', header: 'UF' },
    { field: 'secretaria', header: 'Secretaria' }
  ];


  // clientesDados = [
  //   { razaoSocial: 1, uf: 'sss', secretaria: 'Lote A' },
  //   { razaoSocial: 2, uf: 'L002', secretaria: 'Lote B' }
  // ];
  
  clientesDados: Cliente[] = []; 
  

  constructor(
      private apiService: ApiService
    ) { }

  ngOnInit() {
    this.apiService.getClientes().subscribe(
      (response: any) => {
        
        this.clientesDados = response.map((cliente: Cliente) => ({
          razaoSocial: cliente.razaoSocial,
          uf: cliente.uf,
          secretaria: cliente.secretaria
        }));
      },
      error => {
        console.error('Erro ao buscar usuarios', error);
      }
    );
  }

}
