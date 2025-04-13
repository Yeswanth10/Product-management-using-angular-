import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = '';
  // onSearchChange: string = '';
  title = 'cudr';

  onSearchChange() {
    console.log("Search text changed:", this.searchText);
    // optionally you can pass this value to a child component or service
  }
}
