import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient, not HttpClientModule

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { } // Inject HttpClient, not HttpClientModule

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  signup()
  {
    this.http.post<any>('http://localhost:3000/signup',this.myForm.value).subscribe(res=>
    {
      alert('Your registration is sucessfully completed');
      this.myForm.reset;
      this.router.navigate(['login']);
    })
  }
}
