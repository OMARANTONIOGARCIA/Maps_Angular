import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
    #mapa{
      height:100%;
      width: 100%;
    }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  //npm i --save-dev @types/mapbox-gl

  constructor() { }

  ngOnInit(): void {

    
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -99.10370595257402, 19.33826603885286],
      zoom: 16
    });
  }

}
