const { cmd, commands } = require('../command');
const img2UrlCommand = {
  pattern: "img2url",
  react: "🔗",
  alias: ["tourl", "imgurl", "telegraph", "imgtourl"]
};

function helperFunction(param1, param2, param3, param4, param5) {
  return someOtherFunction(param4 - 0xe8, param3); // Needs context for `someOtherFunction`
}

img2UrlCommand.category = "convert";
img2UrlCommand.use = ".img2url <reply image>";
img2UrlCommand.filename = __filename;

cmd(img2UrlCommand, async (context, args, utils, { reply, quoted }) => {
  try {
    const { image2url } = require("@dark-yasiya/imgbb.js");
    const isViewOnceMessage = quoted ? quoted.type === "viewOnceMessage" : false;
    const isImageMessage = quoted
      ? quoted.type === "imageMessage" || (isViewOnceMessage ? quoted.msg.type === "imageMessage" : false)
      : false;

    if (utils.type === "imageMessage" || isImageMessage) {
      const randomFileName = getRandom('');
      const downloadedFile = isImageMessage
        ? await quoted.download(randomFileName)
        : await utils.download(randomFileName);
      const fileType = await require('file-type').fromBuffer(downloadedFile);

      if (!fileType || (fileType.ext !== "jpg" && fileType.ext !== "png")) {
        return reply("Only JPG or PNG images are supported!");
      }

      const savedFilePath = `./${randomFileName}.${fileType.ext}`;
      await require('fs').promises.writeFile(savedFilePath, downloadedFile);

      const uploadedImageUrl = await image2url(savedFilePath);
      console.log(uploadedImageUrl);
      await reply(
        `*📎 URL Generated:* \n${uploadedImageUrl.result.url}\n\n> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ THARU ᴄᴏᴅᴇʀ · · ·*`
      );

      await require('fs').promises.unlink(savedFilePath);
    } else {
      reply("⚠️ Please reply to an image message.");
    }
  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing the image.");
  }
});
