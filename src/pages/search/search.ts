import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  
  apiUrl = 'https://jsonplaceholder.typicode.com';
  itemId = '';
  empId = '';
  empName = '';
  empUsername = '';
  empEmail = '';
  //employee: any;

  constructor(public http: HttpClient, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public restApiProvider: RestApiProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  vEmployee() {
    this.http.get(this.apiUrl+'/users/'+this.itemId)
    .subscribe(
      (res:Response) => {
        const employeeDetail = res;
        console.log(employeeDetail);
        this.empId = (<any>employeeDetail).id;
        this.empName = (<any>employeeDetail).name;
        this.empUsername = (<any>employeeDetail).username;
        this.empEmail = (<any>employeeDetail).email;
      }, err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'No Detail found for that ID',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      })
  }


  viewEmployee(){
    this.navCtrl.push(HomePage);
  }

}
