import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {UserDataService} from '../../Services/user-data.service'
import { Users } from 'src/app/interface/users';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private userDataService:UserDataService) { }
  formdata : Users={
    id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    image:''
    

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      const id = Number(param.get('id'));
      this.getById(id)
    })
  }
  getById(id: number) {
    this.userDataService.Edit(id).subscribe((data: any) => {
      this.formdata = data;
      console.log(data)

    })
  }
  update(){
    this.userDataService.update(this.formdata).subscribe({
      next:(res)=>{
        this.router.navigate(['/Mycomponent/home'])
        console.log(res)
      }
    })

  }


}
