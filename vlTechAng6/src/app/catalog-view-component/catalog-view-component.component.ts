import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../api.service';
@Component({
  selector: 'app-catalog-view-component',
  templateUrl: './catalog-view-component.component.html',
  styleUrls: ['./catalog-view-component.component.css']
})
export class CatalogViewComponentComponent implements OnInit {

  constructor(private http: HttpClient, private apiService: ApiService) { }
  data:any;
  allUsers:any;
  servideInfo:any;
  ngOnInit() { debugger;
    this.http.get('https://api.github.com/users/navya').subscribe(
      data => {
          this.data = data;
      },
      error => {
          console.log("error", error);
      });
    this.http.get('https://api.github.com/users').subscribe(
      data => {
          this.allUsers = data;
      },
      error => {
          console.log("error", error);
      });
  }

  getServiceData(){
    let dataSevice = this.apiService.getData('this is a service');
    this.servideInfo = dataSevice;
  }
}
