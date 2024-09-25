import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TabelaGenericaComponent } from '../shared/tabela-generica/tabela-generica.component';
import { ApiService } from '../../services/api.service';
import { Equipamento } from '../../services/Equipamento';
import { Cliente } from '../../services/Cliente';


@Component({
  selector: 'app-lote',
  standalone: true,
  imports: [CardModule, TabelaGenericaComponent],
  templateUrl: './lote.component.html',
  styleUrl: './lote.component.css'
})
export class LoteComponent {
  colunasEquipamentos = [
    { field: 'IMEI', header: 'IMEI' },
    { field: 'MarcaModelo', header: 'Marca Modelo' },
    { field: 'COR', header: 'Cor' },
    { field: 'idCliente', header: 'IDCliente' }
  ];

  colunasCliente = [
    { field: 'razaoSocial', header: 'Razão Social' },
    { field: 'uf', header: 'UF' },
    { field: 'secretaria', header: 'Secretaria' }
  ];

  equipamentosDados: Equipamento  [] = []; 
    
  clientesDados: Cliente[] = []; 


  constructor (
    private apiService : ApiService
  ) {}


  ngOnInit(): void {
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


    this.apiService.getEquipamentos().subscribe(
      (response: any) => {
        
        this.equipamentosDados = response.map((equipamento: Equipamento) => ({
          IMEI: equipamento.imei,
          MarcaModelo: equipamento.marcaModelo,
          COR: equipamento.cor,
          IDCliente: equipamento.idCliente
        }));
      },
      error => {
        console.error('Erro ao buscar equipamentos', error);
      }
    );
  }
  
}
