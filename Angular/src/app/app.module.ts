import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaComponent } from './pages/mahasiswa/mahasiswa.component';
import { HttpClientModule } from '@angular/common/http';
import { TambahMahasiswaComponent } from './pages/tambah-mahasiswa/tambah-mahasiswa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMahasiswaComponent } from './pages/edit-mahasiswa/edit-mahasiswa.component';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaComponent,
    TambahMahasiswaComponent,
    EditMahasiswaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
