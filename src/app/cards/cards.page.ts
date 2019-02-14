import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public goToSideMenu() {
    this.navCtrl.navigateForward('side-menu');
  }

}
