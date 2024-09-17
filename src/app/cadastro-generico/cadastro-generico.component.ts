import { Component , Input} from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms'; 
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-cadastro-generico',
  standalone: true,
  imports: [AutoCompleteModule, InputTextModule, FormsModule, InputNumberModule, CommonModule, CardModule, ButtonModule],
  templateUrl: './cadastro-generico.component.html',
  styleUrl: './cadastro-generico.component.css'
})
export class CadastroGenericoComponent {
  @Input() titulo: string = ''; // Título da tela de cadastro (Clientes, Equipamentos, Lote, etc.)
  @Input() campos: any[] = [];   // Array de objetos que descrevem os campos do formulário
  @Input() componente: string = '';
  formData: any = {};  

  onSave() {
    // console.log('Dados do formulário:', this.formData);
    // if (this.componente == 'Cliente') {
    //   alert('cadastro de cliente')
    // } 
    
    switch (this.componente) {
      case 'Cliente': 
        alert('Cadastro cliente');
      break;
    
      case 'Equipamento':
        alert('Cadastro Equipamento');
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
