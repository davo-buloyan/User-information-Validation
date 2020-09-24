import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';

import { CustumerService } from './../../custumer.service';
import { Custumer } from '../../shared/Models/customer.model';
import { MustMatch } from "../../shared/must-match.validator";


// const remoteData = {
//   url: 'https://trial.mobiscroll.com/content/countries.json',
//   type: 'json'
// };

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  @Input() customer: Custumer;
  submitted = false;
  public form: FormGroup;
  countryFormControl = new FormControl();

  countres = [{id: 1,  name: 'USA'},
               { id: 2, name: 'Russia'},
               {id: 3,  name: 'Brazil'},
               {id: 4,  name: 'Deutschland'},
               {id: 5,  name: 'Armenia'},
];

  cities = [
    { id: 1, countryId: 1, name: 'Washington'}, { id: 1, countryId: 1, name: 'New York'},
    { id: 2, countryId: 2, name: 'Moskow'}, { id: 2, countryId: 2, name: 'Vladik'},
    { id: 3, countryId: 3, name: 'Rio'}, { id: 3, countryId: 3, name: 'San Paulo'},
    { id: 4, countryId: 4, name: 'Berlin'}, { id: 4, countryId: 4, name: 'Hamburg'},
    { id: 5, countryId: 5, name: 'Erevan'}, { id: 5, countryId: 5, name: 'Gyumri'},
  ];

  filteredCities = [];

  constructor(
      private fb: FormBuilder,
      public custumerService: CustumerService,
      )
    { this.formValidation() }
  public formValidation(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      country: [null, Validators.required, ],
      city: [null, Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      agree: ['', Validators.required]
    }, {
      // Implement Pasword Mutcher Validator;

        validator: MustMatch('password', 'confirmPassword')

    });
  }

  ngOnInit(): void {
    this.form.get('country').valueChanges.subscribe(countryId => {
      console.log({countryId});

      this.filteredCities = this.cities.filter(city => {
        return city.countryId === parseInt(countryId);
      });
    });

  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    this.custumerService.updateList(
      {
        id: this.form.value.id,
        name: this.form.value.firstName,
        lastname: this.form.value.lastName,
        email: this.form.value.email,
        country: this.form.value.country,
        city: this.form.value.city
      });
    this.form.reset();
  }
}
