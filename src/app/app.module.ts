import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiderBarComponent } from './components/sider-bar/sider-bar.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { OfficialListComponent } from './components/official-list/official-list.component';
import { ContractualListComponent } from './components/contractual-list/contractual-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SiderBarComponent,
    DashbordComponent,
    LoginComponent,
    EmployeeListComponent,
    OfficialListComponent,
    ContractualListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
