import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl';  
//import * as MapboxDirections from '@mapbox/mapbox-gl-directions';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styles: [`
    
    body { margin: 0; padding: 0; }
    .mapa-container{
      height: 100%;
      width: 100%;
    }

    #coordenadas {
      display: block;
      position: relative;
      margin: 0px auto;
      width: 50%; 
      padding: 5px;        
      border: none;
      border-radius: 7px;
      font-size: 15px;
		  font-family: Montserrat;
      text-align: center;
      color: #000;
      background: #D6EAF8;
    }

  `]
})
export class NavegacionComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  geocoder!: MapboxGeocoder;
  
  ngAfterViewInit(): void {


    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.4512, 43.6568],
      zoom: 13
    });
 
    this.mapa.addControl(new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true
    }));
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.mapa.addControl(new mapboxgl.FullscreenControl());
  
    this.mapa.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
    }));


/*     this.mapa.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      'top-left'
      );
 */

  }

}
