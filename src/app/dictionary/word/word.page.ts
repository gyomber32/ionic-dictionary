import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DictionaryElement } from '../../dictionary.interface';

@Component({
  selector: 'app-word',
  templateUrl: './word.page.html',
  styleUrls: ['./word.page.scss'],
})
export class WordPage implements OnInit {

  @Input() item: DictionaryElement;

  constructor(private modalController: ModalController) { }

  public closeModal(): void {
    this.modalController.dismiss();
  }

  ngOnInit() { }

}
