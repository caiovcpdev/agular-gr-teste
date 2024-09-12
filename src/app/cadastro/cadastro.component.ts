import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Endereco, Usuario } from '../../services/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ViaCepService } from '../../services/via_cep.service';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputGroupModule, InputGroupAddonModule, FormsModule, InputTextModule, FloatLabelModule, ButtonModule, InputMaskModule, FooterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  
  @Input() user: Usuario | null = null; // Declara a propriedade de entrada
  
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
      console.log('Usuário recebido no cadastro:', this.user);
      this.usuario = this.user; // Atualiza os dados do usuário
    }
  }
  constructor(private usuarioService: UsuarioService, private viaCep:ViaCepService, private router: Router) {}

  getCep(): void {
    // Verifica se o CEP foi preenchido
    if (this.usuario.endereco.cep) {
      // Busca o endereço pelo CEP
      this.viaCep.getCEP(this.usuario.endereco.cep)
      .subscribe(
        (response: Endereco) => {
          this.usuario.endereco = response;    
        },
        error => {
          console.error('Erro ao buscar CEP', error);
        }
      );
    } else {
      console.error('CEP não informado.');
    }
  }

  salvarUsuario(): void {
    // Verifica se o CEP foi preenchido
    // Busca o endereço pelo CEP
    this.usuarioService.createUsuario(this.usuario).subscribe(
      res => {
        console.log('Usuário salvo com sucesso', res);
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.error('Erro ao salvar usuário', err);
      }
    );
  }
}



