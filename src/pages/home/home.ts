import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employee: any;

  constructor(public navCtrl: NavController, public restApiProvider: RestApiProvider) {

    this.displayEmployee();

  }

  displayEmployee() {
    this.restApiProvider.displayEmployee()
    .then(data => {
      this.employee = data;
      console.log(this.employee);
    });
  }

}
