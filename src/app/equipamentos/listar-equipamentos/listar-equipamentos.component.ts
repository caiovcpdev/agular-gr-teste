import { Component, OnInit } from '@angular/core';
import { TabelaGenericaComponent } from "../../shared/tabela-generica/tabela-generica.component";
import { CardModule } from 'primeng/card';
import { ApiService } from '../../../services/api.service';
import { Equipamento } from '../../../services/Equipamento';

@Component({
  selector: 'app-listar-equipamentos',
  standalone: true,
  imports: [TabelaGenericaComponent, CardModule],
  templateUrl: './listar-equipamentos.component.html',
  styleUrl: './listar-equipamentos.component.css'
})
export class ListarEquipamentosComponent  implements OnInit{
  colunasEquipamentos = [
    { field: 'IMEI', header: 'IMEI' },
    { field: 'MarcaModelo', header: 'Marca Modelo' },
    { field: 'COR', header: 'Cor' },
    { field: 'IDCliente', header: 'IDCliente' }
  ];

  equipamentosDados: Equipamento  [] = []; 
  

  constructor (
    private apiService : ApiService
  ) {}
  ngOnInit(): void {
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
