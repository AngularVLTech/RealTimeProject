import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home-view-component',
  templateUrl: './home-view-component.component.html',
  styleUrls: ['./home-view-component.component.css']
})
export class HomeViewComponentComponent implements OnInit {
  homeData: any;
  constructor( private apiService: ApiService) { }

  ngOnInit() {
    let dataSevice = this.apiService.getData('this is a service');
    this.homeData = dataSevice;
  }

}
