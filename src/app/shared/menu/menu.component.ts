import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class MenuComponent  {

  menuItems: MenuItem[] = [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'FullScreen'
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'Propiedades'
    },
    {
      ruta: '/mapas/navegacion',
      nombre: 'Navegacion'
    },
  ];



}


interface MenuItem{
  ruta:string;
  nombre:string;
}