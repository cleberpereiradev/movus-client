import { Component, OnInit } from '@angular/core';
import { ILocation } from '../../interfaces/ILocation';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{

  locations: ILocation[] = [];

  constructor(
    private service: LocationService
  ) {}
  

  ngOnInit(): void {
    this.service.listLocations().subscribe((result:ILocation[]) => {
      this.locations = result;
    });
  }

}
