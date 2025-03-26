export interface Pegawai {
    nama: string;
    nomorIndukPegawai: string;
    nik: number;
    jabatan: string;
    gaji?: number;
    tunjangan: [];
    tugas: {};
    divisi: any;
}

export class AppComponent {
    title = 'latihanAngular'

    dataPegawai!: [];

    getDataPegawai() {
        const payload: any[] = [];
        let namaPegawai: string = '';
    }
}

// class UpdatePegawai {
//     payload: Pegawai = (
//         nama: 'Jeny',
//         nomorIndukPegawai: 'MAP123',
//         nik: 123123123,
//         jabatan: 'staff',
//         tunjangan: [],
//         tugas: {},
//         divisi: 'keuangan',
//     )
// }