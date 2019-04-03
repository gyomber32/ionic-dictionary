import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonItemSliding } from '@ionic/angular';

import { WordPage } from './word/word.page';

import { DictionaryElement } from '../dictionary.interface';

@Component({
  selector: 'app-dictionary',
  templateUrl: 'dictionary.page.html',
  styleUrls: ['dictionary.page.scss'],
})

export class DictionaryPage {

  private dictionary: DictionaryElement[] = [
    {
      id: 0,
      english: 'word',
      hungarian: 'szó',
      partsOfSpeech: 'noun',
      synonym: '',
      example: 'Words are powerful weapons.'
    },
    {
      id: 1,
      english: 'horse',
      hungarian: 'ló',
      partsOfSpeech: 'noun',
      synonym: '',
      example: 'Horses are not native in North America. They came from Europe with the explorers.'
    },
    {
      id: 2,
      english: 'home',
      hungarian: 'otthon',
      partsOfSpeech: 'noun',
      synonym: '',
      example: 'Home is where the heart is.'
    },
    {
      id: 3,
      english: 'goose',
      hungarian: 'liba',
      partsOfSpeech: 'noun',
      synonym: '',
      example: ''
    },
    {
      id: 4,
      english: 'red',
      hungarian: 'piros',
      partsOfSpeech: 'adjective',
      synonym: '',
      example: 'Wine is red.'
    },
    {
      id: 5,
      english: 'whale',
      hungarian: 'bálna',
      partsOfSpeech: 'noun',
      synonym: '',
      example: 'Whales are mammals.'
    },
    {
      id: 6,
      english: 'mammal',
      hungarian: 'emlős',
      partsOfSpeech: 'noun',
      synonym: '',
      example: ''
    },
    {
      id: 7,
      english: 'rodent',
      hungarian: 'rágcsáló',
      partsOfSpeech: 'noun',
      synonym: '',
      example: ''
    },
    {
      id: 8,
      english: 'bee',
      hungarian: 'méh',
      partsOfSpeech: 'noun',
      synonym: '',
      example: ''
    },
    {
      id: 9,
      english: 'walk',
      hungarian: 'sétál',
      partsOfSpeech: 'verb',
      synonym: '',
      example: ''
    },
    {
      id: 10,
      english: 'corn',
      hungarian: 'kukorica',
      partsOfSpeech: 'noun',
      synonym: '',
      example: ''
    },
    {
      id: 11,
      english: 'wheat',
      hungarian: 'búza',
      partsOfSpeech: 'noun',
      synonym: '',
      example: ''
    },
    {
      id: 12,
      english: 'fog',
      hungarian: 'köd',
      partsOfSpeech: 'noun',
      synonym: '',
      example: ''
    }
  ];

  constructor(private modalController: ModalController) { }

  public async openModal(item: DictionaryElement) {
    const modal = await this.modalController.create({
      component: WordPage,
      componentProps: { item: item }
    });
    return await modal.present();
  }

  public closeOpened(itemSliding: IonItemSliding): void {
    itemSliding.close();
  }

  public autoHide(itemSliding: IonItemSliding): void {
    setTimeout(() => {
      itemSliding.closeOpened();
    }, 5000);
  }

  public modify(item: DictionaryElement): void {
    // TO DO
  }

  public delete(item: DictionaryElement): void {
    // TO DO
  }

  ionViewDidLoad() { }

}
