import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { CadastroGenericoComponent } from '../cadastro-generico/cadastro-generico.component';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ModalGenericoComponent } from '../modal-generico/modal-generico.component';
import { Cliente } from '../../../services/Cliente';

@Component({
  selector: 'app-tabela-generica',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, DialogModule, InputTextModule, CadastroGenericoComponent, PanelModule, ModalGenericoComponent],
  templateUrl: './tabela-generica.component.html',
  styleUrls: ['./tabela-generica.component.css'] // Corrigido para styleUrls
})
export class TabelaGenericaComponent implements OnInit {
  @Input() dados: any[] = [];
  @Input() colunas: any[] = [];
  @Input() componentePai: string = '';

  @Output() delete = new EventEmitter<any>();
  @ViewChild(ModalGenericoComponent) modalGenerico!: ModalGenericoComponent;
  
  selectedItems: any[] = [];
  globalFilterFields: string[] = [];

  modalFields = [
    { id: 'id', label: 'id', tipo: 'number', placeholder : 'ID'},
    { id: 'razaoSocial', label: 'Razão Social', tipo: 'text', placeholder : 'Razão Social'},
    { id: 'uf', label: 'UF', tipo: 'text', placeholder : 'Digite um estado'},
    { id: 'secretaria', label: 'Secretaria', tipo: 'text',  placeholder: 'Digite uma secretaria'},
    { id: 'quantidadeEquipamento', label: 'Quantidade de aparelhos', tipo: 'number', placeholder:'12345' },
    { id: 'iMEIEquipamento', label: 'Equipamento', tipo: 'number', placeholder:'12345' }
  ];

  constructor(
    private router: Router,
    private apiService : ApiService
  ) {}

  openModal(data: any) {
    this.modalGenerico.showModal(data);
  }

  handleSave(data: any) {
    //console.log('Data saved:', data);
    this.apiService.updateCliente(data).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        alert('Alteração feita com sucesso!');
      },
      (error: any) => {
        console.error('Erro ao excluir:', error);
        alert('Ocorreu um erro ao tentar atualizar o item.');
      }
    );
  
  }

  handleCancel() {
    console.log('Modal cancelled');
  }

  

  ngOnInit(): void {
    this.globalFilterFields = this.colunas.map(col => col.field);
  }

  editar(item: any) {
    //alert('Editar: ' + JSON.stringify(item));
    if (this.componentePai == 'Cliente') {
        this.openModal(item);
    }
    if (this.componentePai == 'Equipamento') {
      alert('mudar equipamento');
    }


  }

  deletar(item: any) {
    if (this.componentePai === 'Cliente') { 
      const confirmDelete = confirm(`Tem certeza que deseja deletar: ${item.razaoSocial} : ${item.id}?`);
      
      if (confirmDelete) {
      
        this.apiService.deleteCliente(item).subscribe(
          (response: any) => {
            console.log('API Response:', response);
            alert('Exclusão feita com sucesso!');
          },
          (error: any) => {
            console.error('Erro ao excluir:', error);
            alert('Ocorreu um erro ao tentar excluir o item.');
          }
        );
      }
    }
  }

  exportarCSV() {
    // Exemplo de chamada ao método de exportação CSV do PrimeNG
  }
}
