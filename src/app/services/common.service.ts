import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DictionaryElement } from '../dictionary.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private id = new BehaviorSubject<number>(null);
  private emittID = new EventEmitter<number>();

  private dictionary = new BehaviorSubject<DictionaryElement[]>([]);
  private emittDictionary = new EventEmitter<any>();

  private word = new BehaviorSubject<string[]>(null);

  constructor() { }

  castWord = this.word.asObservable();

  castID = this.id.asObservable();

  cast = this.dictionary.asObservable();

  updateID(newID): void {
    this.id.next(newID);
  }

  updateDictionary(newDictionray): void {
    this.dictionary.next(newDictionray);
  }

  updateWord(newWord): void {
    this.word.next(newWord);
  }
}
