import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

interface Lote {
  id: number;
  num_lote: number;
  secretaria: string;
  quantidadeAparelhos: number;
}

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, DialogModule, InputTextModule],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }


  lote: Lote[] = [];

  ngOnInit() {
    this.lote = [
      { id: 1, num_lote: 20000, secretaria: 'COESP', quantidadeAparelhos: 10 },
      { id: 2, num_lote: 30000, secretaria: 'COESP 2', quantidadeAparelhos: 15 },
      { id: 3, num_lote: 40000, secretaria: 'COESP 3', quantidadeAparelhos: 8 },
      { id: 4, num_lote: 50000, secretaria: 'COESP 4', quantidadeAparelhos: 5 },
      { id: 5, num_lote: 60000, secretaria: 'COESP 5', quantidadeAparelhos: 12 }
    ];
  }
}
