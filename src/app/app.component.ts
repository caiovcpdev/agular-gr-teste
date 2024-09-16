import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { MenuVerticalComponent } from "./menu-vertical/menu-vertical.component";
import { CommonModule } from '@angular/common'; // Import CommonModule
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MenuVerticalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit{
  title = 'Simplifica';
  showNavbar: boolean = true;
  showSidebar: boolean = true;

  constructor(private router: Router) {}


  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.url;
      this.showNavbar = currentRoute !== '/login';
      this.showSidebar = currentRoute !== '/login';
    });
  }
}
