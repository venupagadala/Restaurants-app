import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private apiUrl = 'http://localhost:3000'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Define a method to fetch data from the API
  getRestaurants(): Observable<any> {
    return this.http.get('http://localhost:3000/posts');
  }

   // Function to delete a restaurant by ID
   deleteRestaurant(id: number): Observable<any> {
    const url = `${this.apiUrl}/posts/${id}`; // Construct the API endpoint URL

    // Send an HTTP DELETE request to the API
    return this.http.delete(url);
  }

  //function to update an restuarant data using the id
  updateRestuarantData(id: number, data: any) {
    const url = `${this.apiUrl}/posts/${id}`; // Construct the API endpoint URL
  
    // Send an HTTP PUT request to the API with the updated data
    return this.http.put(url, data);
  }
  
}
