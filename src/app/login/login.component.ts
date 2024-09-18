import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';


import { UsuarioService } from '../../services/usuario.service';
import { UsuarioLogin } from '../../services/Login';
import { FooterComponent } from "../shared/footer/footer.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    CommonModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: UsuarioLogin = {
    email: '',
    password: ''
  };
  mensagemErro: string = '';


constructor(private loginService: UsuarioService, private router: Router) {}

salvarUsuario(): void {
    //Verifica se is campos foram preenchidos
  if (this.usuario.email && this.usuario.password) {
    this.loginService.getLogin(this.usuario).subscribe(
      (response) => {
        if (response) //se for true ele redireciona
        this.router.navigate(['/dashboard']);
      else
      //alert ("Erro ao Logar");
        this.mensagemErro = 'Verifique seu email e(ou) sua senha'
      },
      err => {
        console.error('Erro ao logar usuário');
        this.mensagemErro = 'Verifique seu email e(ou) sua senha'
      }
    );
  } else {
    this.mensagemErro = 'Informe seu email e sua senha'
    console.error('Informe seu email e sua senha');
  }
}
}
