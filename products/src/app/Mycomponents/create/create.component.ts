import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interface/users';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private userDataServices:UserDataService , private router:Router) { }

  ngOnInit(): void {
  }
  formdata: Users={
    id:0,
    title:"",
    price:0,
    description:"",
    category:"",
    image:"",
   
  }
  create(){
    this.userDataServices.creat(this.formdata).subscribe({
      next:(res)=>{
        this.router.navigate(['/Mycomponent/home'])
        console.log(res)
      }
    })

  }

}
