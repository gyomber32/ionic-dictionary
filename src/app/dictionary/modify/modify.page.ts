import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DictionaryElement } from '../../dictionary.interface';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.page.html',
  styleUrls: ['./modify.page.scss'],
})
export class ModifyPage implements OnInit {

  @Input() item: DictionaryElement;

  private modifyForm: FormGroup;

  constructor(private navController: NavController, private formBuilder: FormBuilder) { }

  public formValidator() {
    this.modifyForm = this.formBuilder.group({
      english: ['', Validators.required],
      hungarian: ['', Validators.required],
      partsOfSpeech: ['', Validators.required],
      synonym: [''],
      example: ['']
    });
  }

  public setWordInForm(): void {
    this.modifyForm.setValue({
      ['english']: this.item.english,
      ['hungarian']: this.item.hungarian,
      ['partsOfSpeech']: this.item.partsOfSpeech,
      ['synonym']: this.item.synonym,
      ['example']: this.item.example
    });
  }


  public onSubmit() {
    // stop here if form is invalid
    if (this.modifyForm.invalid) {
      return;
    } else {
      const english = this.modifyForm.get('english').value;
      const hungarian = this.modifyForm.get('hungarian').value;
      const partsOfSpeech = this.modifyForm.get('partsOfSpeech').value;
      const synonym = this.modifyForm.get('synonym').value;
      const example = this.modifyForm.get('example').value;
    }
  }

  public closeModal(): void {
    this.modifyForm.reset();
    this.navController.back();
  }

  ngOnInit() {
    this.formValidator();
    this.setWordInForm();
  }

}
