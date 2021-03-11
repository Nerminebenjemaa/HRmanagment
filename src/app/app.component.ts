import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'HRmanagment';

  constructor( private router : Router){}

redirectToOfficialList(){

  this.router.navigate(['official']);

}

redirectToContractualList(){
  this.router.navigate(['contractual']);

}

redirectToEmployeeList(){

  this.router.navigate(['employee']);

}

redirectToDashbord(){

  this.router.navigate(['dashbord']);

}


}
