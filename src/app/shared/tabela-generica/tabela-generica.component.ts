import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CadastroGenericoComponent } from '../cadastro-generico/cadastro-generico.component';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-generica',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, DialogModule, InputTextModule, CadastroGenericoComponent, PanelModule],
  templateUrl: './tabela-generica.component.html',
  styleUrls: ['./tabela-generica.component.css'] // Corrigido para styleUrls
})
export class TabelaGenericaComponent implements OnInit {
  @Input() dados: any[] = [];
  @Input() colunas: any[] = [];

  @Output() delete = new EventEmitter<any>();

  selectedItems: any[] = [];
  globalFilterFields: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.globalFilterFields = this.colunas.map(col => col.field);
  }

  editar(item: any) {
    alert('Editar: ' + JSON.stringify(item));
  }

  deletar(item: any) {
    const confirmDelete = confirm(`Tem certeza que deseja deletar:${item.razaoSocial} : ${item.id}?`);
    if (confirmDelete) {
      this.delete.emit(item);
    }
  }

  exportarCSV() {
    // Exemplo de chamada ao método de exportação CSV do PrimeNG
    // O componente de tabela já cuida disso via o template
  }
}
