<?php 
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';


class Mahasiswa extends REST_Controller {

    public function __construct(){
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-COntrol-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        $method = $_SERVER['REQUEST_METHOD'];
            if($method == "OPTIONS") {
            die();
        }
        parent::__construct();
    }

    // mengambil data mahasiswa
    function index_get() {
        $nim = $this->get('nim');
        if ($nim == '') {
            $mahasiswa = $this->db->get('mahasiswa')->result();
        } else {
            $this->db->where('nim', $nim);
            $mahasiswa = $this->db->get('mahasiswa')->result();
        }
        $this->response($mahasiswa, 200);
    }

    // mengambil detail data mahasiswa
    function detail_get($nim) {
        $this->db->where('nim', $nim);
        $mahasiswa = $this->db->get('mahasiswa')->result();
        $this->response($mahasiswa, 200);
    }

    // menambah data mahasiswa baru
    function index_post() {
        $data = array(
                    'nim'           => $this->post('nim'),
                    'nama'          => $this->post('nama'),
                    'alamat'        => $this->post('alamat'),
                    'jeniskelamin'  => $this->post('jeniskelamin'));
        $insert = $this->db->insert('mahasiswa', $data);
        if ($insert) {
            $this->response(array('status' => 'Berhasil Menambah Data.'), 200);
        } else {
            $this->response(array('status' => 'Gagal menambah Data.', 502));
        }
    }

    // mengubah data mahasiswa
    function index_put($nim) {
        $nim = $this->put('nim');
        $data = array(
                    'nim'           => $this->put('nim'),
                    'nama'          => $this->put('nama'),
                    'alamat'        => $this->put('alamat'),
                    'jeniskelamin'  => $this->put('jeniskelamin'));
        $this->db->where('nim', $nim);
        $update = $this->db->update('mahasiswa', $data);
        if ($update) {
            $this->response(array('status' => 'Berhasil Mengubah Data.'), 200);
        } else {
            $this->response(array('status' => 'Gagal mengubah Data.', 502));
        }
    }

    // hapus mahasiswa
    function hapus_delete($nim) {
        $this->db->where('nim', $nim);
        $delete = $this->db->delete('mahasiswa');
        if ($delete) {
            $this->response(array('status' => 'Berhasil Menghapus Data.'), 201);
        } else {
            $this->response(array('status' => 'Gagal menghapus Data.', 502));
        }
    }
}
