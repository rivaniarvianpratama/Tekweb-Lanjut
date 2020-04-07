import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from '../../services/mahasiswa.service';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.scss']
})
export class MahasiswaComponent implements OnInit {

  dataMahasiswa: any;

  constructor(
    public mahasiswaService: MahasiswaService
  ) { }

  ngOnInit() {
    this.ambilDataMahasiswa();
  }

  ambilDataMahasiswa() {
    this.mahasiswaService.ambilData().subscribe(res => {
      console.log(res);
      this.dataMahasiswa = res;
    })
  }

  hapusMahasiswa(item) {
    console.log(item);
    //hapus data mahasiswa sesuai nim
    var r = confirm("Anda yakin ingin menghapus data ini secara permanen ?");
    if (r == true) {
      this.mahasiswaService.hapusData(item.id).subscribe(res => {
        //memuat ulang data setelah berhasil hapus data
        this.ambilDataMahasiswa();
      });
    } else {
      return;
    }
  }

}
