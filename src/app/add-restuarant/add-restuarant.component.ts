import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restuarant',
  templateUrl: './add-restuarant.component.html',
  styleUrls: ['./add-restuarant.component.css'],
})
export class AddRestuarantComponent implements OnInit {
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  resturantForm!: FormGroup;

  ngOnInit(): void {
    this.resturantForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      service: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  addRestuarant()
  {
      // Send the data toons the API using an HTTP POST request
      this.http.post('http://localhost:3000/posts', this.resturantForm).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
          // Optionally, you can reset the form after successful submission
          this.resturantForm.reset();
        },
        (error) => {
          console.error('Error adding data:', error);
        }
      );
  }
}
