import { Component } from '@angular/core';
import { CadastroGenericoComponent } from '../../shared/cadastro-generico/cadastro-generico.component'; // Componente Genérico
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-equipamentos',
  standalone: true,
  imports: [CadastroGenericoComponent, InputTextModule, InputNumberModule],
  templateUrl: './equipamentos.component.html'
})
export class EquipamentosComponent {
  titulo = 'Cadastro de Equipamento'; // Título do formulário
  componente = 'Equipamento'
  campos = [

    { id: 'marcaModelo', label: 'Marca', tipo: 'text', placeholder: 'Marca' },
    { id: 'cor', label: 'Cor', tipo: 'text' , placeholder: 'Cor'},
    { id: 'iDCliente', label: 'Cliente', tipo: 'text' , placeholder: 'Cliente'},

  ];
}
