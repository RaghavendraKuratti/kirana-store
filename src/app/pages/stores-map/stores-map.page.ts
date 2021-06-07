import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { async, Observable } from 'rxjs';
import { Store } from 'src/app/SharedProviders/models/product';
import { ProductService } from 'src/app/SharedProviders/services/product.service';

declare let google: any;

@Component({
  selector: 'app-stores-map',
  templateUrl: './stores-map.page.html',
  styleUrls: ['./stores-map.page.scss'],
})
export class StoresMapPage implements OnInit {
  @ViewChild('map', {read: ElementRef, static: false}) mapref: ElementRef;
  stores: Store[];
  map: any;
  infowindows: any = [];
  mapMarkers: any = [];
  markers: any = [
    {
      name: 'Mialan Bakery',
      lat: '15.9115',
      lng: '74.5196',
    },
    {
      name: 'Kuratti\'s House',
      lat: '15.911088',
      lng: '74.518749',
    },
    {
      name: 'Friends Hair Style',
      lat: '15.9097',
      lng: '74.5216',
    },
    {
      name: 'HKGN Repair',
      lat: '15.9093',
      lng: '74.5205',
    },
    {
      name: 'Ratandeep General Stores',
      lat: '15.9103',
      lng: '74.5203',
    },
    {
      name: 'Snacks and Sweet Stall',
      lat: '15.9110',
      lng: '74.5188',
    }
  ];
  slideOpts = {
    slidesPerView: 1.4,
    spaceBetween: 10,
    slidesOffsetBefore: 10
  };
  constructor(private ps: ProductService) { }

  ngOnInit() {
  }
  getStores() {
    this.ps.getStores().subscribe(data => {
      this.stores = data;
    });
  }

  ionViewDidEnter() {
    this.showMap();
    this.getStores();
    this.addMarkersToTop();
  }
  ionViewDidLeave() {
    this.map = null;
    this.infowindows = [];
    this.mapMarkers = [];
  }
  addMarkersToTop() {
    for(const mark of this.stores) {
      const position = new google.maps.LatLng(mark.lat, mark.lng);
      const mapMarker = new google.maps.Marker({
        position,
        title: mark.name,
        latitude: mark.lat,
        longitude: mark.lng
      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }
  addInfoWindowToMarker(marker) {
    const infoWindowContent = `<div id="content">` +
                            `<h2 id="firstHeading" class="firstHeading">`+ marker.title +`</h2>`+
                            `<p> Latitude: `+ marker.latitude +`</p>`+
                            `<p> Longitude: `+ marker.longitude +`</p>`+
                            `</div>`;
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      this.closeAllInfoWindow();
      infoWindow.open(this.map, marker);
    });
    this.infowindows.push(infoWindow);
    this.mapMarkers.push(marker);
  }
  closeAllInfoWindow(){
    for(const window of this.infowindows) {
      window.close();
    }
  }
  showMap() {
    const location = new google.maps.LatLng(15.911088, 74.518749);
    const options = {
      center: location,
      zoom: 18,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapref.nativeElement, options);
  }
  updateMap(store, i) {
    this.map.setZoom(18);
    this.map.setCenter(new google.maps.LatLng(store.lat, store.lng));
    this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    this.closeAllInfoWindow();
    this.infowindows[i].open(this.map, this.mapMarkers[i]);
  }
}
