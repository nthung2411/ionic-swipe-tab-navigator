import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public goToCards() {
    this.navCtrl.navigateForward('cards');
  }

  public goToList() {
    this.navCtrl.navigateForward('list');
  }

  public goToHome() {
    this.navCtrl.navigateRoot('');
  }

}
