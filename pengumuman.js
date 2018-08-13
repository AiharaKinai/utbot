const fetch = require('node-fetch');
const parser = require('rss-parser');
const fs = require('mz/fs');

const getEntry = () => {
    return new Promise((resolve, reject) => {
        parser.parseURL('https://www.ut.ac.id/pengumuman/rss.xml', (err, res) => {
            if (err) reject(err);
            if (res) {
                resolve(res.feed.entries[0]);
            } else {
                reject();
            }
        })
    })
}

const buildEmbed = (entry) => {
    let embed = {
        embed: {
            color: 5910527,
            title: entry.title,
            url: entry.link,
			footer: {
						icon_url: "https://cdn.discordapp.com/attachments/470074073863421970/470074160668999680/ut.jpg",
						text: "Universitas Terbuka | UPBJJ-UT Pangkalpinang"
					},
			thumbnail: {
							url: "https://cdn.discordapp.com/attachments/470074073863421970/470078647659921408/utthumbnail.jpg"
						},
            fields: [{
                name: "Deskripsi",
                value: entry.contentSnippet
            }]
        }
    }
    return embed;
}

const isAvailable = (channel, guild, client) => {
    return channel.type === "text" &&
        channel.permissionsFor(client.user).has("SEND_MESSAGES") &&
        channel.permissionsFor(client.user).has("READ_MESSAGES") &&
        guild[1].available;
}

module.exports = async (client) => {
    try {
        const entry = await getEntry();
        const cache = JSON.parse(await fs.readFile('./pengumuman.json'));

        if (entry.isoDate !== cache.isoDate) {
            await fs.writeFile("pengumuman.json", `{ "isoDate" : "${entry.isoDate}" }`);
            const guilds = client.guilds.filter(guild => { return client.provider.get(guild, "pengumuman") });

            for (let guild of guilds) {
                let settings = await client.provider.get(guild[1], "pengumuman");
                let channel = client.channels.get(settings);

                if (isAvailable(channel, guild, client)) {
                    channel.send("@everyone, Ada pengumuman terbaru, silahkan dilihat pada artikel dibawah ini.", buildEmbed(entry));
                }
            }
        }
    } catch (err) {
        console.error();
    }
}