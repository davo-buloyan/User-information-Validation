import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  EmailValidator,
  FormControl
} from '@angular/forms';
import {
  Router
} from '@angular/router';

import {
  CustumerService
} from './../../custumer.service';
import {
  Custumer
} from '../../shared/Models/customer.model';
import {
  MustMatch
} from '../../shared/must-match.validator';
// import { FormatPipe } from "./format.pipe";

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
  // submitted = false;
  public form: FormGroup;
  countryFormControl = new FormControl();

  countres = [{
      id: 1,
      name: 'USA'
    },
    {
      id: 2,
      name: 'Russia'
    },
    {
      id: 3,
      name: 'Brazil'
    },
    {
      id: 4,
      name: 'Deutschland'
    },
    {
      id: 5,
      name: 'Armenia'
    },
  ];

  cities = [{
      id: 11,
      countryId: 1,
      name: 'Washington'
    },
    {
      id: 12,
      countryId: 1,
      name: 'New York'
    },
    {
      id: 22,
      countryId: 2,
      name: 'Moskow'
    },
    {
      id: 23,
      countryId: 2,
      name: 'Vladik'
    },
    {
      id: 33,
      countryId: 3,
      name: 'Rio'
    },
    {
      id: 34,
      countryId: 3,
      name: 'San Paulo'
    },
    {
      id: 44,
      countryId: 4,
      name: 'Berlin'
    },
    {
      id: 45,
      countryId: 4,
      name: 'Hamburg'
    },
    {
      id: 55,
      countryId: 5,
      name: 'Erevan'
    },
    {
      id: 56,
      countryId: 5,
      name: 'Gyumri'
    },
  ];

  filteredCities = [];

  countresNameFiltered = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public custumerService: CustumerService,

  ) {
    this.formValidation()
  }
  public formValidation(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl(null, Validators.required, ),
      city: new FormControl(null, Validators.required),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])),
      confirmPassword: new FormControl('', [Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ])]),
      agree: new FormControl('', Validators.required)
    }, );
  }

  // public formValidation(): void {
  //   this.form = this.fb.group({
  //     firstName: ['', [Validators.required, Validators.maxLength(50)]],
  //     lastName: ['', [Validators.required, Validators.maxLength(50)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     country: [null, Validators.required, ],
  //     city: [null, Validators.required],
  //     password: ['', Validators.compose([
  //       Validators.required,
  //       Validators.minLength(3),
  //       Validators.maxLength(30)
  //     ])],
  //     confirmPassword: ['', Validators.compose([
  //       Validators.required,
  //       Validators.minLength(3),
  //       Validators.maxLength(30)
  //     ])],
  //     agree: ['', Validators.required]
  //   }, {

  //       validator: MustMatch('password', 'confirmPassword')

  //   });
  // }


  // Dont Work This Match Validator

  // pwdMatchValidator(form: FormGroup) {
  //   if(form.get('password').value != null && form.get('confirm_password').value != null){
  //     return form.get('password').value === form.get('confirm_password').value ?
  //     null : {
  //       'mismatch': true
  //     };
  //   }
  // }

  // get password() {
  //   return this.form.get('password');
  // }
  // get confirm_password() {
  //   return this.form.get('confirm_password');
  // }


  ngOnInit(): void {
    this.form.get('country').valueChanges.subscribe(countryId => {
      console.log(countryId);

      this.filteredCities = this.cities.filter(city => {
        return city.countryId === parseInt(countryId);
      });
    });

    this.form.get('country').valueChanges.subscribe(countryId => {

      if (countryId !== null) {
        this.countresNameFiltered = countryId.split(',')[1];
      }
      console.log(this.countresNameFiltered);
    });

  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.custumerService.updateList({
      id: this.form.value.id,
      name: this.form.value.firstName,
      lastname: this.form.value.lastName,
      email: this.form.value.email,
      country: this.countresNameFiltered,
      city: this.form.value.city,
    });

    console.dir(this.form.value);

    this.form.reset();
    this.router.navigate(['customers'])
  }
}
