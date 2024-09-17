import { Component } from '@angular/core';
import { CadastroGenericoComponent } from '../cadastro-generico/cadastro-generico.component'; // Componente Genérico
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-equipamentos',
  standalone: true,
  imports: [CadastroGenericoComponent, InputTextModule, InputNumberModule],
  templateUrl: './equipamentos.component.html',
  styleUrl: './equipamentos.component.css'
})
export class EquipamentosComponent {
  titulo = 'Cadastro de Equipamento'; // Título do formulário
  componente = 'Equipamento'
  campos = [
    { id: 'modelo', label: 'Modelo', tipo: 'text', placeholder: 'Modelo' },
    { id: 'imei', label: 'IMEI', tipo: 'text', placeholder: 'IMEI' },
    { id: 'cor', label: 'Cor', tipo: 'text' , placeholder: 'Cor'},
    { id: 'quantidade', label: 'Quantidade de Aparelhos', tipo: 'number', placeholder: 'Quantidade de Aparelhos' },
  ];
}
