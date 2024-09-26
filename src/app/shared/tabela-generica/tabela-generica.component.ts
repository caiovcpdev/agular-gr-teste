import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { CadastroGenericoComponent } from '../cadastro-generico/cadastro-generico.component';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ApiService } from '../../../services/api.service';
import { ModalGenericoComponent } from '../modal-generico/modal-generico.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast'; 

@Component({
  selector: 'app-tabela-generica',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, DialogModule, InputTextModule, CadastroGenericoComponent, PanelModule, ModalGenericoComponent, ToastModule],
  templateUrl: './tabela-generica.component.html',
  styleUrls: ['./tabela-generica.component.css'],
  providers : [MessageService]
})
export class TabelaGenericaComponent implements OnInit {
  @Input() dados: any[] = [];
  @Input() colunas: any[] = [];
  @Input() componentePai: string = '';

  @Output() delete = new EventEmitter<any>();
  @ViewChild(ModalGenericoComponent) modalGenerico!: ModalGenericoComponent;
  
  selectedItems: any[] = [];
  globalFilterFields: string[] = [];
  modalFields: any[] = [];

  constructor(
    private apiService : ApiService,
    private messageService: MessageService
  ) {}

  openModal(data: any) {
    this.modalGenerico.showModal(data);
  }

  handleSave(data: any) {
    if (this.componentePai === 'Cliente') {
      this.apiService.updateCliente(data).subscribe(
        (response: any) => {
          console.log('API Response:', response);
          this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Alteração bem sucedida!' });
        },
        (error: any) => {
          console.error('Erro ao excluir:', error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Alteração bem mal sucedida!' });
        }
      );  
    }
    
    if (this.componentePai === 'Equipamento') {
      this.apiService.updateEquipamento(data).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Alteração bem sucedida!' });
        },
        (error: any) => {
          console.error('Erro ao excluir:', error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Alteração bem mal sucedida!' });
        }
      );  
    }

  }

  handleCancel() {
    console.log('Modal cancelled');
  }

  

  ngOnInit(): void {
    this.globalFilterFields = this.colunas.map(col => col.field);
  }

  editar(item: any) {
    if (this.componentePai == 'Cliente') {
      this.modalFields = [
        { id: 'razaoSocial', label: 'Razão Social', tipo: 'text', placeholder : 'Razão Social'},
        { id: 'uf', label: 'UF', tipo: 'text', placeholder : 'Digite um estado'},
        { id: 'secretaria', label: 'Secretaria', tipo: 'text',  placeholder: 'Digite uma secretaria'},
        { id: 'quantidadeEquipamento', label: 'Quantidade de aparelhos', tipo: 'number', placeholder:'12345' },
        { id: 'iMEIEquipamento', label: 'Equipamento', tipo: 'number', placeholder:'12345' },
        { id: 'id', label: '', tipo: 'hidden', placeholder : 'ID'}
      ]; 
    }

    if (this.componentePai == 'Equipamento') {
      console.log(item);
      this.modalFields = [
        { id: 'imei', label: 'iMei', tipo: 'number', placeholder: 'IMEI' },
        { id: 'MarcaModelo', label: 'Marca', tipo: 'text', placeholder: 'Marca' },
        { id: 'COR', label: 'Cor', tipo: 'text' , placeholder: 'Cor'},
        { id: 'IDCliente', label: 'Cliente', tipo: 'text' , placeholder: 'Cliente'}
      ];
    }
    this.openModal(item);
  }

  deletar(item: any) {
    if (this.componentePai === 'Cliente') { 
      const confirmDelete = confirm(`Tem certeza que deseja deletar: ${item.razaoSocial} : ${item.id}?`);
      
      if (confirmDelete) {
      
        this.apiService.deleteCliente(item).subscribe(
          (response: any) => {
            this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Exclusão bem sucedida!' });
          },
          (error: any) => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar excluir o item.' });
            console.error('Erro ao excluir:', error);
          }
        );
      }
    }

    if (this.componentePai === 'Equipamento') { 
      const confirmDelete = confirm(`Tem certeza que deseja deletar: ${item.MarcaModelo} : ${item.IMEI}?`);
      
      if (confirmDelete) {
      
        this.apiService.deleteEquipamento(item).subscribe(
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
