import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient, not HttpClientModule
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private toastr: ToastrService) { } // Inject HttpClient, not HttpClientModule

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  login()
  {
    this.http.get<any>('http://localhost:3000/signup').subscribe(res=>
    {
      if (res.email === this.loginForm.value.email && res.password === this.loginForm.value.password)
    {
      this.toastr.success('Success message', 'sucessfully loged in', { closeButton: true });
      this.loginForm.reset();
      this.router.navigate(['/dashboard']);
    }
    else{
      this.toastr.error('Error message', 'user not found', { closeButton: true });
    }

    })
    
  }
}
