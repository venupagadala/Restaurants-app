import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  formStatus: boolean = false;
  restaurants: any[] = [];
  addResto!: boolean;
  updateResto!: boolean;
  updateIndex!:number;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private apiService: SharedService,
    private toast:ToastrService
  ) { }

  resturantForm!: FormGroup;

  ngOnInit(): void {
    this.resturantForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      service: ['', Validators.required],
      mobile: ['', Validators.required],
    });

    // Call the ApiService to fetch data when the component is initialized
    this.apiService.getRestaurants().subscribe(
      (data) => {
        this.restaurants = data; // Assign the fetched data to the 'restaurants' array
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  addRestuarant() {
    this.formStatus = !this.formStatus; // Toggle formStatus between true and false
    console.log(this.formStatus, "form status");

    if (this.resturantForm.valid) {
      const formData = this.resturantForm.value; // Get the form values as an object

      // Send the data to the API using an HTTP POST request to add a new restaurant
      this.http.post('http://localhost:3000/posts', formData).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
          // Optionally, you can reset the form after successful submission
          this.resturantForm.reset();

          // Now, fetch the updated list of restaurants after adding a new one
          this.apiService.getRestaurants().subscribe(
            (data) => {
              this.restaurants = data; // Assign the fetched data to the 'restaurants' array
            },
            (error) => {
              console.error('Error fetching data:', error);
            }
          );
        },
        (error) => {
          console.error('Error adding data:', error);
        }
      );
    }
  }

  updateRestuarant() {
    // Ensure that the index is within the valid range
    if (this.updateIndex >= 0 && this.updateIndex < this.restaurants.length) {
      // Get the restaurant object with the updated data
      const updatedRestaurantData = this.restaurants[this.updateIndex];
  
      // Call the service method to update the restaurant data
      this.apiService.updateRestuarantData(updatedRestaurantData.id, this.resturantForm.value).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
  
          // Fetch the updated list of restaurants after updating
          this.apiService.getRestaurants().subscribe(
            (data) => {
              this.restaurants = data; // Update the UI with the new data
            },
            (error) => {
              console.error('Error fetching data:', error);
            }
          );
  
          // Reset the form and close the update form
          this.resturantForm.reset();
          this.formStatus = false;
          this.addResto = true;
          this.updateResto = false;
        },
        (error) => {
          console.error('Error updating data:', error);
        }
      );
    }
  }
  


  toggleRestForm() {
    this.formStatus = !this.formStatus; // Toggle formStatus between true and false
    console.log(this.formStatus, 'form status');
    this.addResto = true;
    this.updateResto = false;
  }

  closeRestoForm() {
    this.formStatus = false;
  }

  // logout
  logout() {
    if(confirm('Are you sure! to logout'))
    {
      this.router.navigate(['/login']);
      this.toast.success('Logged out successfully')
    }
   
  }

  removeResto(index: number) {
    // Ensure that the index is within the valid range
    if (index >= 0 && index < this.restaurants.length) {
      // Get the restaurant object to be removed
      const restaurant = this.restaurants[index];

      // Send a DELETE request to your API to remove the restaurant
      this.apiService.deleteRestaurant(restaurant.id).subscribe(
        () => {
          // On successful deletion from the API, remove the restaurant from the UI
          this.restaurants.splice(index, 1);
        },
        (error) => {
          console.error('Error deleting restaurant:', error);
        }
      );
    }
  }

  editResto(index: number) {
    this.addResto = false;
    this.updateResto = true;
    this.formStatus = true;
    this.updateIndex =index;

   
  }
}
