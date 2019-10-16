import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-profile',
  template: `
  <body>
  <div class="container">
    <h1>Edit Your Profile </h1>
    <hr>
    <div class="col-md-4">
      <form autocomplete="off" [formGroup]="profileForm" (ngSubmit)="saveProfile(profileForm.value)">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <em>Required</em>
          <input  formControlName="firstName" id="firstName" type="text" class="form-control" placeholder="First Name..." />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <em>Required</em>
          <input  formControlName="lastName" id="lastName" type="text" class="form-control" placeholder="Last Name..." />
        </div>

        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" >Cancel</button>
      </form>
    </div>
  </div>
  </body>

  `,
  styles: [`
  body {
    background-color: grey;
    background-image: none;
    height: 100vh;
  }

  .btn-primary {
    background-color: orange;
    border: none;
    border-radius: 0px;
  }
  input {
    border-radius: 0px;
  }
  .container {
    margin-top: 80px;
    margin-left: 20px;
  }
  em{float:right;color:red;padding-left:10px}
    .error input{background-color: #e3c3c5}
    .error ::webkit-input-placeholder {color:#999}

`]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;


  constructor(private auth: AuthService, private router: Router ) {}

  ngOnInit() {
    const firstName = new FormControl(this.auth.currentUser.firstName, Validators.required);
    const lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  saveProfile(formValues): void {
    if (this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['home'])
    }
  }

  cancel() {
    this.router.navigate(['home']);
  }

}
