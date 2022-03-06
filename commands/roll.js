const {ClashCommandBuilder, SlashCommandBuilder} = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Rolls the specified dice'),
    async execute(interaction) {
        console.log(interaction)
        await interaction.reply('Your roll result here...')
        /*
        const requestRoll = msg.content.match(/^!roll (?<count>\d*)(?<prefix>d|w)(?<sides>\d+)/)
        const minval = requestRoll.groups.count || 1
        const maxval = (requestRoll.groups.sides || 6) * minval - minval
        msg.reply('rolled a ' + (Math.floor(Math.random() * maxval) + minval))
        */
    }
}