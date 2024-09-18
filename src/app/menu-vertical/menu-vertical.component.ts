
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-menu-vertical',
  standalone: true,
  imports: [MenuModule, ToastModule],
  templateUrl: './menu-vertical.component.html',
  styleUrl: './menu-vertical.component.css'
})
export class MenuVerticalComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Cliente',
            icon: 'pi pi-cog',
            items: [
                {
                    label: 'Cadastrar',
                    icon: 'pi pi-plus',
                    routerLink: 'cliente/cadastrar'
                },
                {
                    label: 'Listar',
                    icon: 'pi pi-search',
                    routerLink: 'cliente/listar'
                }
            ]
        },
        {
            label: 'Equipamentos',
            icon: 'pi pi-cog',
            items: [
                {
                    label: 'Cadastrar',
                    icon: 'pi pi-plus',
                    routerLink: 'equipamento/cadastrar'
                },
                {
                    label: 'Listar',
                    icon: 'pi pi-search',
                    routerLink: 'equipamento/listar'
                }
            ]
        },
        {
          label: 'Lote',
          icon: 'pi pi-cog',
          items: [
              {
                  label: 'Cadastrar',
                  icon: 'pi pi-plus',
                  routerLink: 'lote/cadastrar'
              },
              {
                  label: 'Listar',
                  icon: 'pi pi-search',
                  routerLink: 'lote/listar'
              }
          ]
      }
    ];
  }
}
