import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private menuItems = [
    {
      title: 'Dictionary',
      path: '/dictionary',
      icon: 'book'
    },
    {
      title: 'Translate',
      path: '/translate',
      icon: 'swap'
    },
    {
      title: 'Add',
      path: '/add',
      icon: 'add-circle-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public navigate(path: string): void {
    this.router.navigate([path]).then((data) => {
      this.menu.close();
    }, (error) => {
      console.log(error);
    });
  }

}

