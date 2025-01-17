const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
var ee = require("../../botconfig/embed.json");
module.exports = {
  name: "support",
  category: "Information",
  aliases: {},
  cooldown: 5,
  usage: "support",
  description: "Sends a Link of the Support Server",
  memberpermissions: [],
  requiredroles: [],
  alloweduserids: [],
  minargs: 0,
  maxargs: 0,
  minplusargs: 0,
  maxplusargs: 0,
  argsmissing_message: "",
  argstoomany_message: "",
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const invitelinks = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Join Server")
        .setStyle("LINK")
        .setEmoji("<:AgamTechTricks:904619535368351764>")
        .setURL("https://discord.gg/c8aAV4cARB")
    );
    try {
      message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle("Looks like you want support")
            .setDescription(
              "Looks like you want support. You can join my server and ask support from the developer directly! Click the button below to Join"
            )
            .setThumbnail(ee.footericon)
            .setFooter({ text: ee.footertext, iconURL: ee.footericon }),
        ],
        components: [invitelinks],
      });
    } catch (e) {
      console.log(String(e.stack));
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter({ text: ee.footertext, iconURL: ee.footericon })
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(
              `\`\`\`${
                e.message
                  ? String(e.message).substr(0, 2000)
                  : String(e).substr(0, 2000)
              }\`\`\``
            ),
        ],
      });
    }
  },
};
