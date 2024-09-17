import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommunicationService } from '../../services/CommunicationService.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Corrigido de 'styleUrl' para 'styleUrls'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = []; // Inicialize como um array vazio

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/dashboard'  // Navegação para Home
      },
      {
        label: 'Cadastro',
        icon: 'pi pi-user-plus',
        items : [
            {
              label: 'Clientes',
              icon: 'pi pi-user-plus',
              routerLink:'/cliente'
            },
            {
              label: 'Equipamento',
              icon: 'pi pi-user-plus',
              routerLink : '/equipamento'
            },
            {
              label: 'Lote',
              icon: 'pi pi-user-plus',
              routerLink :'/lote'
            }
        ]
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        routerLink: '/login'  // Navegação para Login
      }
    ];
  }

  onCreateClick() {
    this.communicationService.sendEvent('cadastroClicked');
  }
}
