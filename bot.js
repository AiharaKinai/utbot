const Commando = require('discord.js-commando');
const path = require('path');
const sqlite = require('sqlite')
const fetch = require('node-fetch');
const fs = require('mz/fs');
const moment = require('moment');
const handlePengumuman = require('./pengumuman.js');
const handleBerita = require('./berita.js');
const handleBumped = require('./bumped.js');

if (!fs.existsSync('./config.json')) {
    fs.writeFileSync('./config.json', '{"token" : "", "prefix" : "!"}')
    console.log('WARNING: Config file is missing. Please edit "config.json" and re-run the script.')
    process.exit()
}

if (!fs.existsSync('./pengumuman.json')) {
    fs.writeFileSync('./pengumuman.json', '{ "isoDate" : "2017-09-22T05:58:27.000Z" }')
}

if (!fs.existsSync('./berita.json')) {
    fs.writeFileSync('./berita.json', '{ "isoDate" : "2017-09-22T05:58:27.000Z" }')
}

const config = require('./config.json')

const client = new Commando.Client({
    owner: '263682239592660994',
    commandPrefix: config.prefix
});	

const responseObject = {
  "hallo": "Hallo juga"
};

const akunerror = ["akun sia error", "tidak bisa login", "gak bisa login", "akun sia saya error", "sia error", "error", "kontak", "nomor"];
const buatakun = ["buat akun sia", "cara buat akun sia", "daftar akun sia", "daftar akun sia", "cara daftar akun sia", "daftar sia"];
const lupapwd = ["lupa password", "lupa pasword", "lupa password akun sia", "lupa password sia", "password sia", "password akun sia"];
const aktifsia = ["belum aktif", "belum aktifasi", "belum aktivasi", "cara aktivasi", "cara aktif", "belum diaktivasi", "belum diaktifasi", "aktivasi akun sia", "aktivasi akun"];
const regmatkul =["daftar matakuliah", "Daftar matakuliah", "daftar mata kuliah", "Daftar mata kuliah", "daftar matkul", "register matakuliah", "registrasi matkul", "registrasi matakuliah", "matakuliah online", "Matakuliah online", "mata kuliah online", "Mata kuliah online", "mata kuliah", "matakuliah", "Mata kuliah", "Matakuliah"];
const pwduo = ["password ujul", "password ujian online", "password suo"];
const reguo =["registrasi ujian online", "daftar ujian online", "daftar uo", "reg uo", "registrasi ulang", "meregistrasi ulang", "daftar suo", "registrasi suo", "ujul", "registrasi ujul"];
const lkam =["lkam", "LKAM", "cetak lkam", "cetak LKAM", "Lkam"];
const ujian =["kapan ujian", "kpn ujian", "ujian kapan", "ujian kpn", "Kapan ujian", "Kpn Ujian", "Ujian kapan"];

/*YANG HARUS DIUBAH TIAP TAHUN*/
const kalendemik=["kalender", "Kalender", "kalender akademik", "Kalender akademik", "akademik", "Akademik"];
const banpt=["sertifikat", "akreditasi", "akreditasi UT", "BAN PT", "Akreditasi", "ban pt", "BANPT"];

/*YANG HARUS DIUBAH SESUAI KALENDER*/
const daftar=["mahasiswa baru", "Mahasiswa baru", "baru", "kapan terakhir daftar", "kpn terakhir daftar", "daftar maba", "maba"];
const pendas=["nilai pendas", "pendas"];
const matkul=["kpn terakhir", "registrasi kapan terakhir", "registrasi kpn terakhir", "registrasi terakhir"];
const tap=["TAP", "tap"];
const tuton=["tuton", "Tuton", "tutorial online", "aktivasi tuton"];

client
    // Events
    .on('error', console.error)
    .on('warn', console.warn)
    //.on('debug', console.log)
    .on('ready', () => {
        console.log(`-> Client ready! \n-> Logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`)
        console.log(`-> Servers: ${client.guilds.array().length}`)
		//client.user.setGame("PCP Network", "Phantasy Star Online 2");
		client.user.setPresence({ game: { name: 'UPBJJ-UT Pangkalpinang', type: 0 } });
    })
    .on('commandError', (cmd, err) => {
        if (err instanceof Commando.FriendlyError) return;
        console.error('Error in command ${cmd.groupID}:${cmd.memberName}', err)
    })
	
	//replymsg
	.on("message", (message) => {
		if( akunerror.some(akunerr => message.content.includes(akunerr)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 5115765,
            title: "",
            url: "",
			description: "Silahkan Hubungi UPBJJ-UT Pangkalpinang melalui [Chat Online](https://api.whatsapp.com/send?phone=6282371178900&text=Hallo%20UPBJJ-UT%20Pangkalpinang)",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            }
        }});
			console.log('Balasan Akun SIA Error')
			
		}
		/*BUAT AKUN SIA*/
		if( buatakun.some(btakn => message.content.includes(btakn)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 2642154,
            title: "=== Cara Buat Akun SIA ===",
            url: "",
			description: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name: "1.",
				value: "Buka https://sia.ut.ac.id"
			},
			{
				name: "2.",
				value: "Pilih Register Akun\n    -Register Calon Mahasiswa UT = Untuk Calon Mahasiswa Baru\n    -Register Mahasiswa UT =  Untuk Mahasiswa UT yang belum mempunyai akun."
			},
			{
				name: "3.",
				value: "Isikan form data diri dengan benar."
			},
			{
				name: "4.",
				value: "Cek kontak masuk email, lalu buka email dari Universitas Terbuka, lalu klik tulisan **LINK VERIFIKASI**"
			}
			]
        }});
			console.log('Balasan Cara buat akun sia')
			
		}
		/*LUPAS PASSWORD SIA*/
		if( lupapwd.some(pwd => message.content.includes(pwd)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 13593930,
            title: "=== Lupa Password SIA ===",
            url: "",
			description: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name: "1.",
				value: "Buka https://sia.ut.ac.id"
			},
			{
				name: "2.",
				value: "Pilih menu **Aktivasi dan Login**, lalu pilih **Login**"
			},
			{
				name: "3.",
				value: "Klik **Forgot Password**"
			},
			{
				name: "4.",
				value: "Pada kolom yang tersedia, ketikan email yang kamu gunakan. lalu klik **aktivasi akun**"
			},
			{
				name:"5.",
				value: "Cek kontak masuk email kamu, buka email dari Universitas Terbuka, klik pada tulisan **LINK VERIFIKASI**."
			}
			]
        }});
			console.log('Balasan Lupa Password')
			
		}
		/*Aktivasi SIA*/
		if( aktifsia.some(sia => message.content.includes(sia)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 13593930,
            title: "=== Aktivasi Akun SIA ===",
            url: "",
			description: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name: "1.",
				value: "Buka https://sia.ut.ac.id"
			},
			{
				name: "2.",
				value: "Pilih menu **Aktivasi dan Login**, lalu pilih **Registrasi mata kuliah sipas atau nonsipas**"
			},
			{
				name: "3.",
				value: "Klik **Aktivasi Akun Mahasiswa**"
			},
			{
				name: "4.",
				value: "Pada kolom yang tersedia, ketikan email yang kamu gunakan. lalu klik **aktivasi akun**"
			},
			{
				name:"5.",
				value: "Cek kontak masuk email kamu, buka email dari Universitas Terbuka, klik pada tulisan **LINK VERIFIKASI**."
			}
			]
        }});
			console.log('Balasan Aktivasi Akun')

		}
		/*Registrasi Matakuliah*/
		if( regmatkul.some(rgmtkl => message.content.includes(rgmtkl)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 16743680,
            title: "=== Mendaftar Mata Kuliah ===",
            url: "",
			description: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name: "1.",
				value: "Login ke akun SIA kamu melalui https://sia.ut.ac.id"
			},
			{
				name: "2.",
				value: "Pilih menu **Registrasi Mata Kuliah**, lalu pilih **Registrasi mata kuliah sipas atau nonsipas**"
			},
			{
				name: "3.",
				value: "Klik tombol **CARI**, lalu input tempat ujian yang diinginkan, dan input Mata Kuliah yang mau diambil."
			},
			{
				name: "4.",
				value: "Jika sudah di-input semua klik tombol **SIMPAN**."
			},
			{
				name: "CATATAN",
				value: "1. Centang semua **Reg Tuton** pada Mata Kuliah yang diambil.\n2. Jika status Mata Kuliah **G4** artinya Mata Kuliah tersebut tidak dapat diambil, dikarenakan **waktu ujian** nya tabrakan."
			},
			{
				name: ".:| INFO |:.",
				value: "Registrasi Matakuliah dimulai dari tanggal **4 Juni - 29 Agustus 2018**."
			}
			
			]
        }});
			console.log('Balasan Regmatkul')

		}
		/*PASSWORD SUO*/
		if( pwduo.some(uo => message.content.includes(uo)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 10987520,
            title: "=== Mendapatkan Password SUO ===",
            url: "",
			description: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name: "1.",
				value: "Login ke akun SIA kamu melalui https://sia.ut.ac.id"
			},
			{
				name: "2.",
				value: "Pilih menu **Ujian Online(UO)**, lalu pilih **Password UO**"
			},
			{
				name: "3.",
				value: "Kamu dapat melihat Password UO, Sesi, dan Tanggal UO kamu."
			}
			
			]
        }});
			console.log('Balasan Regmatkul')

		}
		/*DAFTAR SUO*/
		if( reguo.some(ruo => message.content.includes(ruo)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 1998345,
            title: "=== Mendaftar SUO ===",
            url: "",
			description: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name: "1.",
				value: "Login ke akun SIA kamu melalui https://sia.ut.ac.id"
			},
			{
				name: "2.",
				value: "Pilih menu **Ujian Online(UO)**, lalu pilih **registrasi UO**"
			},
			{
				name: "3.",
				value: "Pilih jenis ujian online\n  - Ujian Online Registrasi : Untuk ujian online yang matkul nya tabrakan.\n  - Ujian Online Ulang : Untuk ujian online ulang memperbaiki nilai yang kecil."
			},
			{
				name: "4.",
				value: "Jika sudah memilih jenis UO, klik tombol **CARI**, dan lihat sesi yang tersedia, lalu input mata kuliah yang mau di ujian online."
			}
			]
        }});
			console.log('Balasan RegUO')

		}
		/*LKAM*/
		if( lkam.some(lkm => message.content.includes(lkm)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 10682623,
            title: "Pengambilan LKAM",
            url: "",
			description: "Kamu dapat langsung menghubungi ke \n  - Email = utpangkalpinang@gmail.com\n  - Website = [UPBJJ-UT Pangkalpinang](http://bit.ly/2vaA0rv)\n  - [Chat Online](https://api.whatsapp.com/send?phone=6282371178900&text=Hallo%20UPBJJ-UT%20Pangkalpinang)",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name : "CATATAN",
				value : "Jangan lupa melampirkan **NIM**"
			}
			]
        }});
			console.log('Balasan LKAM')

		}
		if( ujian.some(ujn => message.content.includes(ujn)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 16711684,
            title: "",
            url: "",
			description: "Untuk ujian diadakan pada tanggal 2, 8 dan 9 Desember 2018",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            }
        }});
			console.log('Balasan Ujian')

		}
		if( kalendemik.some(klndr => message.content.includes(klndr)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 16711751,
            title: "Kalender Akademik 2018/2019",
            url: "https://www.ut.ac.id/kalender-akademik",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Program Sarjana dan Diploma pada FE, FHISIP, FMIPA, dan FKIP",
						value: "https://www.ut.ac.id/kalender-akademik/sarjana-diploma",
					},
					{
						name: "Program Sarjana PGSD dan PGPAUD pada FKIP",
						value: "https://www.ut.ac.id/kalender-akademik/pgsd-pgpaud"
					},
					{
						name: "Program Magister pada PPs",
						value: "https://www.ut.ac.id/kalender-akademik/pps"
					},
					{
						name: "Program Magister Online pada PPs",
						value: "https://www.ut.ac.id/kalender-akademik/pps-online"
					},
					{
						name: "Program Sertifikat pada PPB",
						value: "https://www.ut.ac.id/kalender-akademik/program-sertifikat"
					},
					{
						name: "Kalender Akademik Andvanced Course Program ASEAN Studies",
						value: "https://www.ut.ac.id/kalender-akademik/asean-studies"
					}
					
					]
        }});
			console.log('Balasan Kalender Akademik')

		}
		if( banpt.some(bpt => message.content.includes(bpt)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 16771840,
            title: "Pengambilan Sertifikat BAN-PT",
            url: "",
			description: "Mohon gunakan perintah `!banpt`",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            }
        }});
			console.log('Balasan Sertifikat BanPT')

		}
		/*Daftar MABA*/
		if( daftar.some(dft => message.content.includes(dft)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 8479569,
            title: "",
            url: "",
			description: "Pendaftaran mahasiswa baru dimulai dari 4 Juni - 14 Agustus 2018",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name : ".:| Berkas Pendaftaran |:.",
				value : "1. Fotocopy Ijazah yang sudah dilegalisir.\n2. Pas foto 2x3 3 Lembar dan 4x6 1 Lembar (berwarna).\n3. Materai 6000 1 Lembar. "
			},
			{
				name : ".:| Formulir |:.",
				value : "Formulir dapat download disini https://ut.ac.id/formulir \n atau dapat langsung ke kantor UPBJJ-UT Pangkalpinang. "
			}
			]
        }});
			console.log('Balasan maba')

		}
		/*nilai pendas*/
		if( pendas.some(pds => message.content.includes(pds)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 8479569,
            title: "",
            url: "",
			description: "Nilai pendas keluar 13 Agustus 2018",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            }
        }});
			console.log('Balasan pendas')

		}
		/*daftar matkul*/
		if( matkul.some(mkl => message.content.includes(mkl)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 8479569,
            title: "",
            url: "",
			description: "Registrasi Mata Kuliah 4 Juni - 29 AGustus 2018",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            }
        }});
			console.log('Balasan matkul')

		}
		/*TAP*/
		if( tap.some(tap1 => message.content.includes(tap1)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 8479569,
            title: "",
            url: "",
			description: "Daftar Mahasiswa Terjaring TAP 2018/19.1 [KLIK DISINI](http://pangkalpinang.ut.ac.id/index.php/sample-data/item/245-daftar-mahasiswa-fe-fhisip-fmipa-fkip-yang-terjaring-tap-ta-2018-19-1-masa-20182-tgl-03-07-2018)",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            }
        }});
			console.log('Balasan TAP')

		}
		/*TUTON*/
		if( tuton.some(ttn => message.content.includes(ttn)) ) {
			message.channel.send(`Hallo ${message.author}`, {embed: {
			color: 8479569,
            title: "=== INFO TUTON ===",
            url: "",
			description: "Aktivasi Tuton mulai dari 1 Agustus - 17 September 2018",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
			fields: [
			{
				name : ".:| Cara isi Form Kesertaan Tuton |:.",
				value : "1. Login pada elearning.ut.ac.id\n2. Ikuti Langkah pada gambar berikut [KLIK DISINI](https://cdn.discordapp.com/attachments/470074073863421970/476592443299725312/tuton.jpg)"
			},
			{
				name : ".:| Tutorial Online |:.",
				value : "Tutorial Online dimulai dari tanggal 24 September - 18 November 2018. "
			}
			]
        }});
			console.log('Balasan Tuton')

		}

		//format pake perulangan for
		/*for (var i = 0; i <= akunerror.length; i++) {
			if(message.content.includes(akunerror[i])){
				message.channel.send(`Hallo ${message.author}, Silahkan Hubungi administrator.\n\n CP: xxxxxxxxxx`);
				console.log('Balasan Akun sia error')
				break;
			}
		}*/
		
		if(responseObject[message.content]) {
				message.channel.send(responseObject[message.content]);
			}
		});

client.registry
    // Custom groups
    .registerGroups([
        ['ut', 'Daftar Perintah UPBJJ-UT Pangkalpinang']
    ])

    // Register default groups, commands and argument types
    .registerDefaults()

    // Register every command in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.setProvider(
    sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

// EQ / Bumped alerts
client.setInterval(handlePengumuman, 25000, client);
client.setInterval(handleBerita, 25000, client);

client.login(config.token);