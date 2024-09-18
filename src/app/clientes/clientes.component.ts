import { Component } from '@angular/core';
import { CadastroGenericoComponent } from '../cadastro-generico/cadastro-generico.component'; // Componente Genérico
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CadastroGenericoComponent, InputTextModule, InputNumberModule],
  templateUrl: './clientes.component.html',
})
export class ClienteComponent {
  titulo = 'Cadastro Clientes';
  componente = 'Cliente';
  campos = [
    { id: 'razaoSocial', label: 'Razão Social', tipo: 'text', placeholder : 'Razão Social',},
    { id: 'uf', label: 'UF', tipo: 'autocomplete', placeholder: 'Digite uma UF' },
    { id: 'secretaria', label: 'Secretaria', tipo: 'text',  placeholder: 'Digite uma secretaria'},
    { id: 'quantidadeEquipamento', label: 'Quantidade de aparelhos', tipo: 'number', placeholder:'12345' },
    { id: 'iMEIEquipamento', label: 'Equipamento', tipo: 'number', placeholder:'12345' },
  ];
}
