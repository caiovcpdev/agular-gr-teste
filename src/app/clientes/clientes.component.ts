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
    { id: 'razao_social', label: 'Razão Social', tipo: 'text', placeholder : 'Razão Social',},
    { id: 'cidade', label: 'Cidade', tipo: 'autocomplete', placeholder: 'Digite uma cidade' },
    { id: 'secretaria', label: 'Secretaria', tipo: 'text',  placeholder: 'Digite uma secretaria'},
    { id: 'quantidade', label: 'Quantidade de aparelhos', tipo: 'number', placeholder:'12345' },
  ];
}
