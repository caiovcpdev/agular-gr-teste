import { Component, OnInit, inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';


import { MapaComponent } from '../shared/mapa/mapa.component';
import { FooterComponent } from '../footer/footer.component';
//api service
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../services/Usuario';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommunicationService } from '../../services/CommunicationService.service';
import { Subscription } from 'rxjs';
import { MenuVerticalComponent } from "../menu-vertical/menu-vertical.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MenubarModule,
    ChartModule,
    TableModule,
    CommonModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    NavbarComponent,
    MapaComponent,
    FooterComponent,
    MenuVerticalComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private subscription: Subscription = new Subscription(); // Inicializa com uma nova instância

  visible: boolean = false;
  visibleCreate: boolean = false;

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
  usuNome: string = '';
  usuEmail: string = '';
  usuCep: string = '';

  selectedUser: Usuario | null = null; // Usuário selecionado que será passado ao modal

  showDialog() {
      this.visible = true;
  }

  // Dados que serão exibidos na tabela
  data: any;

  constructor(private usuarioService: UsuarioService, private router : Router, private communicationService: CommunicationService) { }

  ngOnInit() {
    this.subscription = this.communicationService.event$.subscribe(eventName => {
      this.handleEvent(eventName);
    });

    this.usuarioService.getUsuarios().subscribe(
      (response : Usuario) => {
        this.data = response;
      },
      error => {
        console.error('Erro ao buscar usuarios', error);
      }
    );
  }

  handleEvent(eventName: string) {
    switch (eventName) {

      case 'cadastroClicked':
        this.onCreateClick();
        break;
    }
  }

  buscarPorId(id: string) {
    this.usuarioService.getUsuarioById(id).subscribe(
      (response: Usuario) => {
        if (response) {

         this.usuario = response;
         this.selectedUser = this.usuario;
         console.log(this.selectedUser);

         this.visible = true;
        } else {
          console.error('Usuário não encontrado');
        }
      },
      error => {
        console.error('Erro ao buscar usuário', error);
      }
    );
  }

  onCreateClick() {
    console.log('Cadastro clicked');
    this.visibleCreate = true;

  }

  openCreateUserDialog(user: Usuario) {
    this.selectedUser = user;
    this.visibleCreate = true;
  }
  // atualizarUsuario(id: string, nome:string, emial:string, cep:string) {
  //   alert('Estou funcionando')
  // }

}
