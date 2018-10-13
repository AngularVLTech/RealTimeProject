import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'app123';
  content:any='';
  ifCondition:boolean;
  collections : any[] = [];
  countryList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.ifCondition = true;
    this.countryNames();
  }
  getText(){
    
    console.log(this.content,this.title);
  }
  countryNames(){
    this.countryList = [
      {
        "name": "Douglas  Pace",
        "age": 25,
        "country": 'India'
      },
      {
        "name": "Mcleod  Mueller",
        "age": 52,
        "country": 'USA'
      },
      {
        "name": "Day  Meyers",
        "age": 21,
        "country": 'HK'
      },
      {
        "name": "Aguirre  Ellis",
        "age": 34,
        "country": 'UK'
      },
      {
        "name": "cook  tyson",
        "age": 42,
        "country": 'USA'
      }
    ];
  }
  getData(){
    this.ifCondition = false;
    this.collections = [
      { id: 1, name: 'Mr. Nice',  emotion: 'happy'},
      { id: 2, name: 'Narco',     emotion: 'good' },
      { id: 3, name: 'Windstorm', emotion: 'confused' },
      { id: 4, name: 'Magneta'}
    ];

    
  }
}
