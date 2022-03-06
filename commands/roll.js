const {ClashCommandBuilder, SlashCommandBuilder} = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Rolls the specified dice')
        .addStringOption(option =>
            option.setName('dice')
            .setDescription('"XdY rolls X dice with Y sides each (2d6 rolls two six sides dice)')
            .setRequired(true)),
    async execute(interaction) {
        const dice = interaction.options.getString('dice')
        const requestRoll = dice.match(/^(?<count>\d*)(?<prefix>d|w)(?<sides>\d+)/)
        const minval = parseInt(requestRoll.groups.count) || 1
        const maxval = (parseInt(requestRoll.groups.sides) || 6) * minval - minval
        const result = (Math.floor(Math.random() * maxval) + minval)
        console.log({dice, requestRoll, minval, maxval, result})
        await interaction.reply(`${result}`)
        /*
        const requestRoll = msg.content.match(/^!roll (?<count>\d*)(?<prefix>d|w)(?<sides>\d+)/)
        const minval = requestRoll.groups.count || 1
        const maxval = (requestRoll.groups.sides || 6) * minval - minval
        msg.reply('rolled a ' + (Math.floor(Math.random() * maxval) + minval))
        */
    }
}