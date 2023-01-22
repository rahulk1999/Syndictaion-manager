import { Component } from '@angular/core';
import { DashboardComponent } from 'src/app/NavSection/dashboard/dashboard.component';
// import {
//    FormBuilder, FormGroup, Validators
// } from '@angular/forms'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
 
  
export class LoginpageComponent {


  // newTaskForm: FormGroup;

  //   constructor(fb: FormBuilder)
  //   {
  //       this.newTaskForm = fb.group({
  //           name: ["", Validators.required]
  //       });
  //   }

  //   createNewTask()
  //   {
  //       console.log(this.newTaskForm.value)
  //   }

  constructor(private authService: AuthService){}

  loginForm = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
    }
    
  )
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
  
  
  onLogin() {
    console.log('LOggiinng in');
    this.authService.login(this.email, this.password );
    console.warn(this.loginForm.value);
  }

} 
