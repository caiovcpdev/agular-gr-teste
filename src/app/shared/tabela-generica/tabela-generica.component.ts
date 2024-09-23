import { Component, Input, OnInit } from '@angular/core';
import { CadastroGenericoComponent } from '../cadastro-generico/cadastro-generico.component';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-tabela-generica',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, DialogModule, InputTextModule, CadastroGenericoComponent, PanelModule],
  templateUrl: './tabela-generica.component.html',
  styleUrl: './tabela-generica.component.css'
})
export class TabelaGenericaComponent implements OnInit{
  @Input() dados: any[] = [];
  @Input() colunas: any[] = [];

  selectedItems: any[] = [];
  globalFilterFields: string[] = [];

  ngOnInit(): void {
    this.globalFilterFields = this.colunas.map(col => col.field);
  }

  exportarCSV() {
    // Exemplo de chamada ao método de exportação CSV do PrimeNG
    // O componente de tabela já cuida disso via o template
  }
}
