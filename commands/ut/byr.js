const Commando = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class UTCommands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "byr",
            group: "ut",
            memberName: "byr",
            description: "Langkah pembayaran di Universitas Terbuka",
			guildOnly: true,
			args: [
                {
                    key: 'pilihan',
                    label: 'pilihan',
                    prompt: 'Mau melalui apa? ketika angka nya saja. (1. ATM Mandiri, 2. ATM BRI, 3. ATM BTN, 4. Mandiri Online, 5.Teller).',
                    type: 'integer'
                }
            ]
			})
		}
    async run(msg, args, client){
		let pilihan = args.pilihan;
		if(pilihan == 1)
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "ATM Mandiri",
						value: "1. Pilih menu PEMBAYARAN / PEMBELIAN pada menu utama ATM Bank Mandiri.\n2. Kemudian pilih sub menu MULTI PAYMENT.\n3. Masukkan kode UNIVERSITAS TERBUKA **10061** yang dapat dilihat pada **DAFTAR KODE** pada layar\n4. Memasukkan/mengetik NOMOR BILLING yang didapatkan dari UPBJJ.\n5. PILIH 1 untuk item pembayaran.\n6. Muncul konfirmasi Nama Pembayar dan Jumlah Pembayaran, kemudian PILIH  **Ya**\n7. Simpan cetakan/bukti transaksi."
					}
					]
        }});
			}
		else if(pilihan == 2)
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "ATM BRI",
						value: "1. Pilih menu PEMBAYARAN / PEMBELIAN pada menu utama ATM Bank BRI.\n2. Kemudian pilih PENDIDIKAN.\n3. Masukkan kode UNIVERSITAS TERBUKA **009** yang dapat dilihat pada **DAFTAR KODE** pada layar\n4. Memasukkan/mengetik NOMOR BILLING yang didapatkan dari UPBJJ.\n5. Muncul konfirmasi Nama Pembayar dan Jumlah Pembayaran, kemudian PILIH  **Ya**\n6. Simpan cetakan/bukti transaksi."
					}
					]
        }});
			}
		else if(pilihan == 3)
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "ATM BTN",
						value: "1. Pilih menu PEMBAYARAN / PEMBELIAN pada menu utama ATM Bank BTN.\n2. Kemudian pilih PENDIDIKAN.\n3. Masukkan kode UNIVERSITAS TERBUKA **0115** yang dapat dilihat pada **DAFTAR KODE** pada layar\n4. Memasukkan/mengetik NOMOR BILLING yang didapatkan dari UPBJJ.\n5. Pilih jenis rekening yang Anda gunakan.\n6. Simpan cetakan/bukti transaksi."
					}
					]
        }});
			}
		else if(pilihan == 4)
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Mandiri Online",
						value: "1. Login ke Aplikasi Mandiri Online.\n2. Klik pembayaran dan pilih MULTI PAYMENT.\n3. Pilih rekening pembayaran dan pilih kode perusahaan **10061** UNIVERSITAS TERRBUKA.\n4. Memasukkan/mengetik NOMOR BILLING yang didapatkan dari UPBJJ UT, lalu klik LANJUTKAN.\n5. Setelah muncul profil dibayar dan data tagihan, pilih tagihan apa yang akan dibayarkan.\n6. Saat muncul tampilan konfirmasi, masukkan PIN Mandiri lalu klik KIRIM.\n7. Simpan tanda terima dalam bentuk file atau cetak."
					}
					]
        }});
			}
		else if(pilihan == 5)
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Melalui Teller Bank Mandiri/BRI/BTN",
						value: "Ambil formulir penyetoran, lalu isi formulir tersebut"
					},
					{
						name: "Pengisian Formulir",
						value: "1. Kolom NAMA Penerima isikan Universitas Terbuka.\n2. Kolom NOMOR REKENING Penerima tidak diisi (dikosongkan).\n3. Kolom NAMA Pengirim: Isikan Nama Mahasiswa.\n4. Kolom TUJUAN TRANSAKSI : Isikan Pembayaran Universitas Terbuka\n5. Kolom BERITA UNTUK PENERIMA: menuliskan NOMOR BILLING yang didapatkan dari UPBJJ UT."
					}
					]
        }});
			}
		else 
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "Cara pembayaran tidak ditemukan",
            url: "https://www.pangkalpinang.ut.ac.id/",
            footer: {
                 icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
             fields: [{
                name: "ERROR",
                value: "Mohon periksa kembali inputan angka pembayaran yang diinginkan"
            }]
        }});
		}
		/*}
		else if(code == 203)
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "ERROR 203",
            url: "http://pso2.jp",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
				text: "ー・完全犯罪党・ー Team Bot | PCP Network"
            },
            fields: [
						{
							name: "Description",
							value: "You cannot be logged into both PSO2 and PSO2es at the same time.",
                
						},
						{
							name: "How to Fix",
							value: "Please log out one of PSO2 and PSO2es"
						}
					]
        }});
		}*/
    }
}