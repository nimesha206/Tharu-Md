const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          

*🇿🇼THARU-MD Support Channels💗*

👨‍💻◦ Whatsapp Channel Link:* https://chat.whatsapp.com/HHWEOR1lEnrEZJjMu9niP8

👨‍💻◦ *Youtube Channel Link:* https://youtube.com/@nimesha_editz?si=Q5zCorpkPIjMBSaH

👨‍💻◦ *Github Profile Link:* https://github.com/nimesha206/Tharu-md/tree/main

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ NIMA*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/3nugy4.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
