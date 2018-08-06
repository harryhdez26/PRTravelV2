import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalContentPage } from '../attractionsModal/attractionsModal';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-attractions',
  templateUrl: 'attractions.html'
})
export class AttractionsPage {
  attractions;

  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
    public httpClient: HttpClient
  ) {

    this.httpClient.get('https://5e2eiaiuhb.execute-api.us-east-1.amazonaws.com/DEV/getattractions')
    .subscribe((attractions) => {
      this.attractions = attractions
    });
  }

  openModal(attraction) {
    let modal = this.modalCtrl.create(ModalContentPage, attraction);
    modal.present();
  }

}
