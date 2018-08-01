import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalContentPage } from '../attractionsModal/attractionsModal';

@Component({
  selector: 'page-attractions',
  templateUrl: 'attractions.html'
})
export class AttractionsPage {
  attractions;

  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController
  ) {
    this.attractions = [
      {
        name:"Flamenco Beach",
        town:"Culebra",
        img:"assets/imgs/flamenco.jpg"
      }, {
        name:"Las Cascadas Water Park",
        town:"Aguadilla",
        img:"assets/imgs/cascadas.jpg"
      }, {
        name:"Toro Verde",
        town:"Orocovis",
        img:"assets/imgs/toroverde.jpg"
      }, {
        name:"El Yunque National Forest",
        town:"Rio Grande",
        img:"assets/imgs/yunque.jpg"
      }, {
        name:"Caja de Muertos Island",
        town:"Ponce",
        img:"assets/imgs/cajademuertos.jpg"
      }
    ];
  }

  openModal(attraction) {
    let modal = this.modalCtrl.create(ModalContentPage, attraction);
    modal.present();
  }

}
