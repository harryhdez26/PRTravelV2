import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalContentPage } from '../attractionsModal/attractionsModal';

@Component({
  selector: 'page-attractions',
  templateUrl: 'attractions.html'
})
export class AttractionsPage {

  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController
  ) {}

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}
