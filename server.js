const fetch = require('node-fetch');

const fs = require('mz/fs');

const moment = require('moment');

const request = require('request');



module.exports = async (client) => {

    try {

        const response = await fetch('http://kakia.org/pso2_status.json');

        if (response.status !== 200) return;



        const data = await response.json();

        const cache = JSON.parse(await fs.readFile("./cacheserver.json"));
		
        if (data["2"]["Status"] !== cache["status"]) {

            await fs.writeFile("cacheserver.json", `{ "status" : "${data["2"]["Status"]}" }`);

            const guilds = client.guilds.filter(guild => { return client.provider.get(guild, "alertsserver") });

            for (let guild of guilds) {

                let settings = await client.provider.get(guild[1], "alertsserver");
                let status1 = data["2"]["Status"];
				let panjang = data["2"];
				let embed = { embed: {
                            color: 10433828,
                            title: "",
                            url: "http://pso2.jp/",
							description: "",
							thumbnail: {
										url: "https://cdn.discordapp.com/attachments/315890823621246976/413151620847632384/Phantasy-Star-Online-2-Logo-2.png"
									},
							footer: {
								icon_url: "https://cdn.discordapp.com/attachments/315890823621246976/349707514247512065/14021743_1265949943439339_8245104055272688311_n.jpg",
								text: "ー・完全犯罪党・ー Team Bot | PCP Reminder"
							},
                            fields: []
                        }}

                

                if (!client.channels.get(settings['channel'])) continue;

                let channel = client.channels.get(settings['channel']);

                if (panjang.length < 0) continue;

                if (panjang.length >= 0) 
				{
                     embed['embed']['fields'].push({name: "== Reminder ==", value:`PSO2 Server Status : **${data[2]["Status"]}**`, inline: true})
				}
				else 
				{
					 embed['embed']['fields'].push({name: "== Reminder ==", value:`PSO2 Server Status : **${data[2]["Status"]}**`, inline: true})
				}    
				if (channel.type == "text" && channel.permissionsFor(client.user).has("SEND_MESSAGES") && channel.permissionsFor(client.user).has("READ_MESSAGES") && guild[1].available) {
                    try {
                        await client.channels.get(settings['channel']).send("@everyone", embed);
                    } catch (err) {
                        continue;
                    }
                }
            }
        }
    } catch (err) {
        console.error(err);
    }
}