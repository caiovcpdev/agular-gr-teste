import { Component , Input} from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../../services/api.service';
import { Cliente } from '../../../services/Cliente';
import { Equipamento } from '../../../services/Equipamento';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-cadastro-generico',
  standalone: true,
  imports: [AutoCompleteModule, InputTextModule, FormsModule, InputNumberModule, CommonModule, CardModule, ButtonModule, PanelModule,DropdownModule],
  templateUrl: './cadastro-generico.component.html',
  styleUrl: './cadastro-generico.component.css'
})
export class CadastroGenericoComponent {
  @Input() titulo: string = ''; // Título da tela de cadastro (Clientes, Equipamentos, Lote, etc.)
  @Input() campos: any[] = [];   // Array de objetos que descrevem os campos do formulário
  @Input() componente: string = '';
  formData: any = {};

  constructor ( private apiservice: ApiService) { }
  onSave() {
 
    switch (this.componente) {
      case 'Cliente':
        this.apiservice.createCliente( this.formData).subscribe(
          (response:Cliente) => {
            console.log("Cliente cadastrado com sucesso!")
          }
        )
      break;

      case 'Equipamento':
        this.apiservice.createEquipamento( this.formData).subscribe(
          (response:Equipamento) => {
            console.log("Equipamento cadastrado com sucesso!")
          }
        )
      break;

      case 'Lote':
        alert('Cadastro Lote');
      break;

      default:
        break;
    }
    // Aqui você pode processar os dados, enviar para o backend, etc.
  }
}
