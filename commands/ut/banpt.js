const Commando = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class UTCommands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "banpt",
            group: "ut",
            memberName: "banpt",
            description: "Sertifikat Universitas Terbuka.",
			guildOnly: true,
			args: [
                {
                    key: 'jurusan',
                    label: 'jurusan',
                    prompt: 'Jurusan apa? ``contoh : ilmu komunikasi``',
                    type: 'string'
                },
				{
                    key: 'tahun',
                    label: 'tahun',
                    prompt: 'Lulus tahun berapa? ``contoh : 2016``',
                    type: 'integer'
                }
            ]
			})
		}
    async run(msg, args, client){
		let tahun = args.tahun;
		let jurusan = args.jurusan.toLowerCase();
		if(tahun > 2016 && jurusan == "ekonomi pembangunan")
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
						name: "Sertifikat Akreditasi BAN-PT Ekonomi Pembangunan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/473772026688176148/Sertifikasi_Akreditasi_BAN-PT_FEKON_Ekonomi-Pembangunan.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "akuntansi")
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
						name: "Sertifikat Akreditasi BAN-PT Akuntansi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474019770673659914/Sertifikat_Akreditasi_BAN-PT_FEKON_Akuntansi.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "manajemen")
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
						name: "Sertifikat Akreditasi BAN-PT Manajemen",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474020471965351936/Sertifikat_Akreditasi_BAN-PT_FEKON_Manajemen.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "kearsipan")
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
						name: "Sertifikat Akreditasi BAN-PT Kearsipan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474021088376913922/Sertifikasi_Akreditasi_BAN-PT_FISIP_D4_Kearsipan.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "ilmu administrasi bisnis")
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
						name: "Sertifikat Akreditasi BAN-PT Ilmu Administrasi Bisnis",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474021425888362497/Sertifikasi_Akreditasi_BAN-PT_FISIP_Ilmu_Administrasi_Bisnis.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "ilmu administrasi negara")
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
						name: "Sertifikat Akreditasi BAN-PT Ilmu Administrasi Negara",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474021924838703125/Sertifikasi_Akreditasi_BAN-PT_FISIP_Ilmu_Administrasi_Negara.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "ilmu hukum")
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
						name: "Sertifikat Akreditasi BAN-PT Ilmu Hukum",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474022448719986713/Sertifikasi_Akreditasi_BAN-PT_FISIP_Ilmu_Hukum.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "ilmu komunikasi")
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
						name: "Sertifikat Akreditasi BAN-PT Ilmu Komunikasi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474022862785740821/Sertifikasi_Akreditasi_BAN-PT_FISIP_Ilmu_Komunikasi.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "ilmu pemerintahan")
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
						name: "Sertifikat Akreditasi BAN-PT Ilmu Pemerintahan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474023239799013387/Sertifikasi_Akreditasi_BAN-PT_FISIP_Ilmu_Pemerintahan.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "ilmu perpustakaan")
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
						name: "Sertifikat Akreditasi BAN-PT Ilmu Perpustakaan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474023534876950528/Sertifikasi_Akreditasi_BAN-PT_FISIP_Ilmu_Perpustakaan.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "sastra inggris")
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
						name: "Sertifikat Akreditasi BAN-PT Sastra Inggris",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474024308814118921/Sertifikasi_Akreditasi_BAN-PT_FISIP_Sastra_Inggris.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan bahasa dan sastra indonesia")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Bahasa dan Sastra Indonesia",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474025475367501835/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Bahasa_dan_Sastra_Indonesia.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan bahasa inggris")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Bahasa Inggris",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474025716384661504/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Bahasa_Inggris.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan biologi")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Biologi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474025892838899712/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Biologi_Akreditasi_B.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan ekonomi")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Ekonomi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474026139019640832/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Ekonomi.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan fisika")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Fisika",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474026387708182558/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Fisika.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan guru paud")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Guru Paud",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474026644739325972/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Guru_PAUD_Akreditasi_B.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan guru sekolah dasar")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Guru Sekolah Dasar",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474026852831461396/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Guru_Sekolah_Dasar.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan Kimia")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Kimia",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474027179089330176/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Kimia.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan matematika")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Matematika",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474027326095491073/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Matematika.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "pendidikan pancasila dan kewarganegaraan")
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
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Pancasila dan Kewarganegaraan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474027732230209546/Sertifikasi_Akreditasi_BAN-PT_FKIP_Pendidikan_Pancasila_dan_Kewarganegaraan.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "agribisnis")
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
						name: "Sertifikat Akreditasi BAN-PT Agribisnis",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474028223303254045/Sertifikasi_Akreditasi_BAN-PT_FMIPA_Agribisnis.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "biologi")
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
						name: "Sertifikat Akreditasi BAN-PT Biologi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474028716381700101/Sertifikasi_Akreditasi_BAN-PT_FMIPA_Biologi.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "ilmu dan teknologi pangan")
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
						name: "Sertifikat Akreditasi BAN-PT Ilmu dan Teknologi Pangan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474028868576083973/Sertifikasi_Akreditasi_BAN-PT_FMIPA_Ilmu_dan_Teknologi_Pangan.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "matematika")
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
						name: "Sertifikat Akreditasi BAN-PT Matematika",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474029656987795457/Sertifikasi_Akreditasi_BAN-PT_FMIPA_Matematika_Akreditasi_B_.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "perencanaan wilayah dan kota")
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
						name: "Sertifikat Akreditasi BAN-PT Perencanaan Wilayah dan Kota",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474029821618552862/Sertifikasi_Akreditasi_BAN-PT_FMIPA_Perencanaan_Wilayah_dan_Kota.pdf)"
					}
					]
        }});
			}
		else if(tahun > 2016 && jurusan == "statistika")
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
						name: "Sertifikat Akreditasi BAN-PT Statistika",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474030049972977665/Sertifikasi_Akreditasi_BAN-PT_FMIPA_Statistika.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "ekonomi pembangunan")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Ekonomi Pembangunan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474035417872728075/Sertifikat_FEKON_Ekon-Pemb_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "akuntansi")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Akuntansi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474035755581177857/Sertifikat_FEKON_Akuntansi_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "manajemen")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Manajemen",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474035957444640777/Sertifikat_FEKON_Manajenen_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "ilmu administrasi niaga")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Ilmu Administrasi Bisnis",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474036655909634049/Sertifikat_FISIP_ADNI016_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "ilmu administrasi negara")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Ilmu Administrasi Negara",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474036836239671306/Sertifikat_FISIP_ADNE017_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "ilmu komunikasi")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Ilmu Komunikasi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474037212158230559/Sertifikat_FISIP_IKom_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "ilmu pemerintahan")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Ilmu Pemerintahan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474037358426193921/Sertifikat_FISIP_IPem_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan bahasa dan sastra indonesia")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Bahasa dan Sastra Indonesia",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474038007272308737/Sertifikat_FKIP_PBhs_Indonesia_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan bahasa inggris")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Bahasa Inggris",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474038163313000450/Sertifikat_FKIP_PBhs_Inggris_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan biologi")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Biologi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474038339398402078/Sertifikat_FKIP_PBIO_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan fisika")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Fisika",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474038671708782612/Sertifikat_FKIP_P_Fisika_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan guru paud")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Guru Paud",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474038806341877780/Sertifikat_FKIP_PGPAUD_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan guru sekolah dasar")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Guru Sekolah Dasar",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474038980825055241/Sertifikat_FKIP_PGSD_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan Kimia")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Kimia",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474039198354243603/Sertifikat_FKIP_P_Kimia_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan matematika")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Matematika",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474039337252683806/Sertifikat_FKIP_PMatematika_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "pendidikan pancasila dan kewarganegaraan")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Pendidikan Pancasila dan Kewarganegaraan",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474039560754692106/Sertifikat_FKIP_PPKn_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "agribisnis")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Agribisnis",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474039731135578121/Sertifikat_FMIPA_Agribisnis_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "biologi")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Biologi",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474039867408515073/Sertifikat_FMIPA_Biologi_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "matematika")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Matematika",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474040122669793290/Sertifikat_FMIPA_Matematika_2011.pdf)"
					}
					]
        }});
			}
		else if(tahun <= 2016 && jurusan == "statistika")
			{
        return msg.reply("", {embed: {
            color: 65500,
            title: "",
            url: "",
            footer: {
                icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
            fields: [
					{
						name: "Sertifikat Akreditasi BAN-PT Statistika",
						value: "[Download Disini](https://cdn.discordapp.com/attachments/470074073863421970/474040281126404096/Sertifikat_FMIPA_Statistik_2011.pdf)"
					}
					]
        }});
			}
		else 
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "Sertifikat Ban-PT tidak ditemukan",
            url: "https://www.pangkalpinang.ut.ac.id/",
            footer: {
                 icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
             fields: [{
                name: "ERROR",
                value: "Mohon periksa kembali inputan jurusan dan tahun kelulusan"
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