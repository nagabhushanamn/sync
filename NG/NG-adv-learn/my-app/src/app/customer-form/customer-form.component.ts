import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import 'rxjs/add/operator/debounceTime';

function rangeValidator(min, max) {
  return function (c: AbstractControl): { [key: string]: boolean } {
    if (c.value < min || c.value > max) {
      return { 'range': true }
    } else {
      return null;
    }

  }
}



@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup;

  customerModel: Customer; // Data Model

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerModel = new Customer('', '', '', false);

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatelog: new FormControl(false)
    // });

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      sendCatelog: true,
      phone: [''],
      notification: ['email'],
      range: ['', rangeValidator(1, 10)]
    });


    this.customerForm.get('firstName').valueChanges.debounceTime(3000).subscribe(value=>{console.log(value)});



  }

  loadCustomer() {
    this.customerForm.patchValue({
      firstName: "Nag",
      lastName: "N",
      sendCatelog: true,
    });
  }

  applyValidationToPhone(mode) {
    if (mode === "text") {
      this.customerForm.get('phone').setValidators(Validators.required);
    } else {
      this.customerForm.get('phone').clearValidators();
    }
    this.customerForm.get('phone').updateValueAndValidity();
  }

}
