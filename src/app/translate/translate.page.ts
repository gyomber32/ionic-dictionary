import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common.service';

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

  constructor(private commonService: CommonService) { }

  public swapLanguage(): void {
    if (this.swap === true) {
      this.swap = false;
    } else {
      this.swap = true;
    }
  }

  public translate(): void {
    const word = [{
      english: 'home',
      hungarian: 'otthon',
    }];
    this.commonService.updateWord(word);
  }

  ngOnInit() {
  }

}
