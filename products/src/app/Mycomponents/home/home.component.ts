import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../Services/user-data.service'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filteredProducts: any[] = [];
  searchText: string = ''; 
  allProducts: any

  constructor(private userDataService:UserDataService) { }  

  ngOnInit(): void {
    this.userDataService.getProducts().subscribe((data) => {
      this.allProducts=data;
    })
  }
  deleteItems(id:number){
    console.log(id)
    this.userDataService.delete(id).subscribe({
      next: (res) => {
        this.allProducts= this.allProducts.filter(_ => _.id != id);
        console.log(res)
      }
    })
  }
  fetchProducts() {
    // Assume this.allProducts is populated from an API
    // After fetching:
    this.filteredProducts = this.allProducts;
  }
  onSearchChange() {
    const query = this.searchText.toLowerCase();
    this.filteredProducts = this.allProducts.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }

}

