import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
//import * as MapboxDirections from '@mapbox/mapbox-gl-directions';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
    (MapboxGeocoder as any).accessToken = environment.mapboxToken;
    //(MapboxDirections as any).accessToken = environment.mapboxToken;

  }

  
}
