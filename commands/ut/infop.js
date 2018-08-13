const Commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "infop",
            group: "ut",
            memberName: "ut",
            description: "Info Penggunaan.",
			guildOnly: true,
        })
    }

    async run(msg){
        return msg.reply("", {embed: {
            color: 3447003,
            title: "Cara Penggunaan ChatBot Universitas Terbuka",
            url: "",
            description: "",
            fields: [{
                name: "Prefix",
                value: "Prefix adalah simbol yang ditempatkan di awal kata, prefix pada chatbot digunakan untuk menjalankan beberapa perintah yang tersedia. \nPrefix ChatBot Universitas Terbuka = **!**.\n Contoh penggunaan = ``!akademik``"
            },
            {
                name: "Daftar Perintah",
                value: "Untuk melihat daftar perintah ketik ``!bantuan`` lalu daftar perintah akan dikirimkan ke ``Direct Message (DM)``"
            },
			 {
                name: "#Tanya-Jawab",
                value: "Channel yang digunakan untuk menanyakan informasi seputar Universitas Terbuka."
            },
			{
                name: "Pemberitahuan",
                value: "Kategori pemberitahuan dapat memberi notifikasi dari website Universitas Terbuka. \nPada Kategori Pemberitahuan terdapat 2 channel yaitu :\n  - #pengumuman\n  - #berita"
            },
			{
                name: "Media Sosial",
                value: "Kategori Media Sosial dapat memberi notifikasi dari Media Sosial Universitas Terbuka. \nPada Kategori Media Sosial terdapat 2 channel yaitu :\n  - #twitter-univterbuka\n  - #youtube-univterbuka"
            }
			]
        }});
    }
}