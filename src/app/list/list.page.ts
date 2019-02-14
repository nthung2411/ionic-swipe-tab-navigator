import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public goToSideMenu() {
    this.navCtrl.navigateForward('side-menu');
  }

}
