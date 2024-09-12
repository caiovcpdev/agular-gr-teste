import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Endereco, Usuario } from '../../../services/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ViaCepService } from '../../../services/via_cep.service';
import { FooterComponent } from "../../footer/footer.component";



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputGroupModule, InputGroupAddonModule, FormsModule, InputTextModule, FloatLabelModule, ButtonModule, InputMaskModule, FooterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  usuario: Usuario = {
    id: '',
    nome: '',
    email: '',
    password: '',
    endereco: {
      localidade: '',
      estado: '',
      uf: '',
      logradouro: '',
      cep: ''
    }
  };

  constructor(private usuarioService: UsuarioService, private viaCep:ViaCepService) {}
  salvarUsuario(): void {
    // Verifica se o CEP foi preenchido
    if (this.usuario.endereco.cep) {
      // Busca o endereço pelo CEP
      this.viaCep.getCEP(this.usuario.endereco.cep)
      .subscribe(
        (response: Endereco) => {
          // Atualiza o endereço do usuário com os dados retornados pela API
          this.usuario.endereco = response;

          // Depois de atualizar o endereço, você pode salvar o usuário
          this.usuarioService.createUsuario(this.usuario).subscribe(
            res => {
              console.log('Usuário salvo com sucesso', res);
            },
            err => {
              console.error('Erro ao salvar usuário', err);
            }
          );
        },
        error => {
          console.error('Erro ao buscar CEP', error);
        }
      );
    } else {
      console.error('CEP não informado.');
    }
  }
}

