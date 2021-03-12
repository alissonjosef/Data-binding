import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
<<<<<<< HEAD
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
=======
>>>>>>> ad94330900f9650cfc5f8248d493c75fbf32dddd

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
<<<<<<< HEAD
    DiretivaNgifComponent,
    DiretivaNgswitchComponent
=======
    DiretivaNgifComponent
>>>>>>> ad94330900f9650cfc5f8248d493c75fbf32dddd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
