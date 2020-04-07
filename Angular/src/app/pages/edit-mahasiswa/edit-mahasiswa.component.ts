import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mahasiswa } from '../../models/mahasiswa';
import { MahasiswaService } from '../../services/mahasiswa.service';

@Component({
  selector: 'app-edit-mahasiswa',
  templateUrl: './edit-mahasiswa.component.html',
  styleUrls: ['./edit-mahasiswa.component.scss']
})
export class EditMahasiswaComponent implements OnInit {

  id: number;
  data: Mahasiswa;

  constructor(
    public activatedRoute: ActivatedRoute,
    public mahasiswaService: MahasiswaService,
    public router: Router,
  ) {
    this.data = new Mahasiswa();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //mengambil detail mahasiswa sesuai id yang di kirim
    this.mahasiswaService.detailMahasiswa(this.id).subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }

  parseData(res) {
    for (var i = 0; i < res.length; i++) {
      if (res[i] != undefined) {
        this.data = res[i];
      }
    }
  }

  update() {
    //Update item by taking id and updated data object
    this.mahasiswaService.editData(this.id, this.data).subscribe(res => {
      this.router.navigate(['mahasiswa']);
    })
  }

}
