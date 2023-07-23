import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
    ) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  logout(){
    this.navCtrl.navigateRoot('/login');
    this.storage.set("isUserLoggedIn", false);
  }

  goToSettings(){
    this.navCtrl.navigateForward('menu/settings');
    this.menu.close();
  }

  goToHome(){
    this.navCtrl.navigateForward('menu/home');
    this.menu.close();
  }

  goToIntro(){
    this.navCtrl.navigateForward('/intro');
    this.menu.close();
  }

}
