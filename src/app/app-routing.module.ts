import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractualListComponent } from './components/contractual-list/contractual-list.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { LoginComponent } from './components/login/login.component';
import { OfficialListComponent } from './components/official-list/official-list.component';

const routes: Routes = [


  {

    path:"login", component: LoginComponent
  },

  {

    path:"dashbord", component: DashbordComponent
  },

  {

    path:"contractual", component: ContractualListComponent
  },

  {

    path:"official", component: OfficialListComponent
  },

  {

    path:"employee", component: EmployeeListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
