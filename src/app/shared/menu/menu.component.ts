import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          { 
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          { 
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          { 
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
      }   
  ];
  }


}
