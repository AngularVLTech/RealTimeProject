import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  model: any[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(10)]]
  });
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {debugger;
      this.model = [];
      console.log(this.model);
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }else{
          var data = this.registerForm.value;
          var myPostObject = {
          firstName:data.firstName,
          lastName:data.lastName,
          email:data.email,
          passWord:data.password,
          }
        };
        this.registerForm.controls.firstName;
        this.model.push(myPostObject);
      //   this.http.post(this.url, this.model)
      //   .subscribe(response => {
      //     debugger;
      //     console.log(response);
      //   },(err: HttpErrorResponse) => {
      //     console.log(err);
      // });
      alert('SUCCESS!! :\n\n' + JSON.stringify(myPostObject));
    }
}
