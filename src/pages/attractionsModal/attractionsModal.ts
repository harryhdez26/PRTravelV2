import { Component } from '@angular/core';

import {Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-attractionsModal',
  templateUrl: 'attractionsModal.html'
})

export class ModalContentPage {
  name;
  town;
  img;
  reviews;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

    this.name = this.params.get('name');
    this.town = this.params.get('town');
    this.img = this.params.get('img');
    this.reviews = [{
      userImg: "assets/imgs/user.png",
      userName: "Juan Hernandez",
      userReview: "This place is awesome!",
      reviewTS: "3:34 PM"
    }, {
      userImg: "assets/imgs/user.png",
      userName: "Roberto Cortez",
      userReview: "I want to go again!",
      reviewTS: "1:24 PM"
    }, {
      userImg: "assets/imgs/user.png",
      userName: "Lolita Rodriguez",
      userReview: "Great place.",
      reviewTS: "10:12 AM"
    }];
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
