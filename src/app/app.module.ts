import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderComponent } from './admin/gender/gender.component';
import { ShowGenderComponent } from './admin/gender/show-gender.component';
import { ApiService } from './shared/services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditGenderComponent } from './admin/gender/add-edit-gender.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GenderComponent,
    ShowGenderComponent,
    AddEditGenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
