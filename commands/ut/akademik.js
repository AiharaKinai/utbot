const Commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class UTCommands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "akademik",
            group: "ut",
            memberName: "akademik",
            description: "Kalender Akademik Universitas Terbuka.",
			guildOnly: true,
			args: [
                {
                    key: 'tahun',
                    label: 'tahun',
                    prompt: 'Tahun Ajaran? ``contoh : 2018/2019``',
                    type: 'string'
                }
            ]
			})
		}
    async run(msg, args, client){
		let tahun = args.tahun;
		if(tahun == args.tahun)
			{
        return msg.reply("", {embed: {
            color: 11459135,
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
			}
		else 
			{
        return msg.reply("", {embed: {
            color: 11459135,
            title: "Kalender Akademik Tidak Ditemukan",
            url: "https://www.ut.ac.id/kalender-akademik",
            footer: {
                 icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
				text: "Universitas Terbuka | UPBJJ - UT Pangkalpinang"
            },
             fields: [{
                name: "ERROR",
                value: "Mohon periksa kembali tahun ajaran"
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