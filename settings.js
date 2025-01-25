require('dotenv').config({ path: './elisaConfig.env' });
/*
PROJECT: THARU MD WHATSAPP BOT
VERSION: 4.0.2
OWNER: @nimesha206 | @NIMA-CODER-X
*/

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'mz4TlRoD#w6UEqrIJX4lqCHZVpdyR-xKr5Z1vuQclLgoxNZHNEk4',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

ᴛʜᴀʀᴜ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://files.catbox.moe/rnjlel.jpg',
  MONGODB_URL: process.env.MONGODB_URL|| '',
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: process.env.PORT || 3000,
  BOT_NAME: 'ᴛʜᴀʀᴜ ᴍᴅ',
  OWNER_NAME: 'Nima-ᴄᴏᴅᴇʀ',
  OWNER_NUMBER: '94789549564',
  SUDO: '94789549564',
  WORK_TYPE: 'public', // ex: public/private
  WORK_MODE: 'all', // ex: all/only_groups/only_pm
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴛʜᴀʀᴜ ᴍᴅ\nmr-nima.vercell.app',
  STICKER_AUTHOR: ' ɴ ɪ ᴍ ᴀ    ᴄ ᴏ ᴅ ᴇ ʀ',
  STICKER_PACK: 'ᴛʜᴀʀᴜ ᴍᴅ',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90, //size in MB
  OWNER_R_EMOJI: '💻',
  ALIVE_AS_GIF: false,//this only work for short videos
  AUTO_VOICE: true,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: true,// you want WORK_MODE message send
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,// Bot online status
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: false, // This not working now !
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: true,
  INBOX_BLOCK_MSG_SEND: true,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,// disabled
  BUTTON_MESSAGES: false,// Don't change this
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ ᴛʜᴀʀᴜ ᴍᴅ 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

