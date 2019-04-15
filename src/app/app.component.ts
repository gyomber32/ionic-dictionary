import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  private firebaseConfig = {
    apiKey: 'AIzaSyBIZZ5AROgO5l8D6VGQOqIIV1PGC95XRso',
    authDomain: 'dictionary-7db0c.firebaseapp.com',
    databaseURL: 'https://dictionary-7db0c.firebaseio.com',
    projectId: 'dictionary-7db0c',
    storageBucket: 'dictionary-7db0c.appspot.com',
    messagingSenderId: '1085421547703'
  };

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

  ngOnInit() {
    firebase.initializeApp(this.firebaseConfig);
  }

}

