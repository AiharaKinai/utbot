const Commando = require('discord.js-commando');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "berita",
            group: "ut",
            memberName: "berita",
            description: "Mengaktifkan Pemberitahuan Berita",
            examples: ["berita #general"],
            guildOnly: true,

            args: [
                {
                    key: 'channel',
                    label: 'channel',
                    prompt: 'Berita mau ditampilkan pada channel apa?',
                    type: 'channel'
                }
            ]
        })
    }

    hasPermission(msg) {
        return msg.member.hasPermission('MANAGE_GUILD');
    }

    async run(msg, args, client){
        let channel = args.channel.id;

        this.client.provider.set(msg.guild, "berita", channel);
        return msg.reply(`Pemberitahuan BERITA berhasil diaktifkan pada channel #${args.channel.name}`);
    }
}