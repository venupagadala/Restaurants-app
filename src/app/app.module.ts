import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule} from "@angular/material/card";
import { MatButtonModule} from "@angular/material/button";
import { MatInputModule} from "@angular/material/input";
import { MatIconModule} from "@angular/material/icon";
import { MatFormFieldModule} from "@angular/material/form-field";
import { ToastrModule } from 'ngx-toastr';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaterialComponent,
    DashboardComponent,
    SignupComponent,
    AddRestuarantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ToastrModule.forRoot({
      closeButton: true, // Show close button
      progressBar: true, // Show progress bar
      timeOut: 5000, // Duration in milliseconds
      positionClass: 'toast-top-right', // Toast position
      preventDuplicates: true, // Prevent duplicate toasts
      extendedTimeOut: 2000, // Duration for extended timeout
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
