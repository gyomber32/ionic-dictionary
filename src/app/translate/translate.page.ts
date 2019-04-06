import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.page.html',
  styleUrls: ['./translate.page.scss'],
})
export class TranslatePage implements OnInit {

  private translateButtonDisabled = false;
  private swap: boolean;
  private hungarianWord: string;
  private englishWord: string;

  constructor() { }

  public swapLanguage(): void {
    if (this.swap === true) {
      this.swap = false;
    } else {
      this.swap = true;
    }
  }

  public translate(): void {

  }

  ngOnInit() {
  }

}
