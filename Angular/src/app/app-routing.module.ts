import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahasiswaComponent } from './pages/mahasiswa/mahasiswa.component';
import { TambahMahasiswaComponent } from './pages/tambah-mahasiswa/tambah-mahasiswa.component';
import { EditMahasiswaComponent } from './pages/edit-mahasiswa/edit-mahasiswa.component';

const routes: Routes = [
  {
    path:'mahasiswa',
    component: MahasiswaComponent
  },
  {
    path:'tambah-mahasiswa',
    component: TambahMahasiswaComponent
  },
  {
    path:'edit-mahasiswa/:id',
    component: EditMahasiswaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
