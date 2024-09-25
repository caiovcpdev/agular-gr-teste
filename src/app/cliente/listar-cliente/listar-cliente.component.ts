import { Component, OnInit } from '@angular/core';
import { TabelaGenericaComponent } from '../../shared/tabela-generica/tabela-generica.component';
import { CardModule } from 'primeng/card';
import { Cliente } from '../../../services/Cliente';
import { ApiService } from '../../../services/api.service';
import { ModalGenericoComponent } from "../../shared/modal-generico/modal-generico.component";


@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [TabelaGenericaComponent, CardModule, ModalGenericoComponent],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})


export class ListarClienteComponent implements OnInit {

  // modalStatus = false;
  nomeComponente = 'Cliente'
  colunasCliente = [
    { field: 'razaoSocial', header: 'Razão Social' },
    { field: 'uf', header: 'UF' },
    { field: 'secretaria', header: 'Secretaria' }
  ];

  clientesDados: Cliente[] = []; 
  

  constructor(
      private apiService: ApiService
    ) { }


  ngOnInit() {
    this.apiService.getClientes().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        
        this.clientesDados = response.map((cliente: Cliente) => ({
          id: cliente.id,
          razaoSocial: cliente.razaoSocial,
          uf: cliente.uf,
          secretaria: cliente.secretaria
        }));
        
      
        console.log('Clientes Dados:', this.clientesDados);
      },
      error => {
        console.error('Erro ao buscar clientes', error);
      }
    );
  }


}
