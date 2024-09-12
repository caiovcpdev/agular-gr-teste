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
import { CadastroComponent } from "../cadastro/cadastro.component";
import { CommunicationService } from '../../services/CommunicationService.service';
import { Subscription } from 'rxjs';


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
    CadastroComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private subscription: Subscription = new Subscription(); // Inicializa com uma nova instância

  basicData: any;
  basicOptions: any;

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

    // Configuração do gráfico
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    }; 

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
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
