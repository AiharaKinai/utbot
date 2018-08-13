const fetch = require('node-fetch');
const parser = require('rss-parser');
const fs = require('mz/fs');

const getEntry = () => {
    return new Promise((resolve, reject) => {
        parser.parseURL('https://www.ut.ac.id/berita.xml', (err, res) => {
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
            color: 16760064,
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
        const cache = JSON.parse(await fs.readFile('./berita.json'));

        if (entry.isoDate !== cache.isoDate) {
            await fs.writeFile("berita.json", `{ "isoDate" : "${entry.isoDate}" }`);
            const guilds = client.guilds.filter(guild => { return client.provider.get(guild, "berita") });

            for (let guild of guilds) {
                let settings = await client.provider.get(guild[1], "berita");
                let channel = client.channels.get(settings);

                if (isAvailable(channel, guild, client)) {
                    channel.send("@everyone, Ada **berita** terbaru, silahkan dilihat pada artikel dibawah ini.", buildEmbed(entry));
                }
            }
        }
    } catch (err) {
        console.error();
    }
}