import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Mycomponents/home/home.component';
import { CreateComponent } from '../Mycomponents/create/create.component';
import { EditComponent } from '../Mycomponents/edit/edit.component';

const routes: Routes = [

  {path:'Mycomponent/home', component:HomeComponent},
  {path:'Mycomponent', redirectTo:'Mycomponent/home', pathMatch:'full'},
  {path:'', redirectTo:'Mycomponent/home', pathMatch:'full'},
  {path:"Mycomponent/create",component:CreateComponent},
  {path:"Mycomponent/edit/:id", component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
