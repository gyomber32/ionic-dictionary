import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private additionForm: FormGroup;

  constructor(private commonService: CommonService, private navController: NavController, private formBuilder: FormBuilder) { }

  public formValidator() {
    this.additionForm = this.formBuilder.group({
      english: ['', Validators.required],
      hungarian: ['', Validators.required],
      partsOfSpeech: ['', Validators.required],
      synonym: [''],
      example: ['']
    });
  }

  public onSubmit() {
    // stop here if form is invalid
    if (this.additionForm.invalid) {
      return;
    } else {
      const english = this.additionForm.get('english').value;
      const hungarian = this.additionForm.get('hungarian').value;
      const partsOfSpeech = this.additionForm.get('partsOfSpeech').value;
      const synonym = this.additionForm.get('synonym').value;
      const example = this.additionForm.get('example').value;
    }
  }

  public closeModal(): void {
    this.additionForm.reset();
    this.navController.back();
  }

  ngOnInit() {
    this.formValidator();
    this.commonService.castWord.subscribe((word) => {
      console.log(word);
    });
  }

}
