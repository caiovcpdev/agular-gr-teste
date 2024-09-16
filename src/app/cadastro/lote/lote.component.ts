import { Component } from '@angular/core';
import { TabelaComponent } from '../../shared/tabela/tabela.component';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-lote',
  standalone: true,
  imports: [TabelaComponent, CardModule, NavbarComponent],
  templateUrl: './lote.component.html',
  styleUrl: './lote.component.css'
})
export class LoteComponent {

}
