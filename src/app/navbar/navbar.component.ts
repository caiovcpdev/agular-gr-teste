import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items =  [
      {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/'
      },
      {
          label: 'Cadastro',
          icon: 'pi pi-user-plus',
          routerLink: '/cadastro'
      },
      {
          label: 'Sair',
          icon: 'pi pi-sign-out',
          routerLink: '/login'
      }
    ];
  }
}
