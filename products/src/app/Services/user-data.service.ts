import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getProducts(){
    debugger
    return this.http.get('http://localhost:3000/products');
  }

  creat(data){
    return this.http.post('http://localhost:3000/products',data);

  }
  Edit(id:number){
    return this.http.get(`http://localhost:3000/products/${id}`)
  }
  update(data:any){
    
    return this.http.put(`http://localhost:3000/products/${data.id}`,data);
  }
  delete(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }



}
