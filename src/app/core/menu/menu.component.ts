import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Ejemplos',
        icon: 'pi pi-search',
        items: [
          {
            label: 'ejemplo1',
            icon: 'pi pi-wave-pulse',
            routerLink: 'ejemplo1'
          },
          {
            label: 'ejemplo2',
            icon: 'pi pi-wave-pulse',
            routerLink: 'ejemplo2'
          },
          {
            label: 'ejemplo3',
            icon: 'pi pi-wave-pulse',
            routerLink: 'ejemplo3'
          },
          {
            label: 'ejemplo4',
            icon: 'pi pi-wave-pulse',
            routerLink: 'ejemplo4'
          },
          {
            label: 'ejemplo5',
            icon: 'pi pi-wave-pulse',
            routerLink: 'ejemplo5'
          },
          {
            label: 'ejemplo6',
            icon: 'pi pi-wave-pulse',
            routerLink: 'ejemplo6'
          },
        ]
      }
    ]
  }
}
