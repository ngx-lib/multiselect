import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ms-model-driven-form-group',
  templateUrl: './model-driven-form-group.component.html',
  styles: []
})
export class ModelDrivenFormGroupComponent {



  genders = [{ id: 1, name: "Male"},
    { id: 2, name: "Female" }
    ];

  profileForm = new FormGroup({
    firstName: new FormControl('Ada Lovelace', Validators.required),
    selectedGender: new FormControl(null,Validators.required),
    maritalStatus : new FormControl('single')
  });



}
