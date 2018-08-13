const Commando = require('discord.js-commando');

module.exports = class PSO2Commands extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "pengumuman",
            group: "ut",
            memberName: "pengumuman",
            description: "Mengaktifkan Pemberitahuan Pengumuman",
            examples: ["pengumuman #general"],
            guildOnly: true,

            args: [
                {
                    key: 'channel',
                    label: 'channel',
                    prompt: 'Pengumuman mau ditampilkan pada channel apa?',
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

        this.client.provider.set(msg.guild, "pengumuman", channel);
        return msg.reply(`Pemberitahuan PENGUMUMAN berhasil diaktifkan pada channel #${args.channel.name}`);
    }
}