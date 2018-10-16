import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getData(params){
    console.log(params);
    return params;
  }
}
