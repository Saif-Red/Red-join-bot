/*CMD
  command: /Redbotso0002
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
Api.sendPhoto({
photo: "https://telegra.ph/file/4325595e70362540a0908.jpg",
caption: "`Our Other Bots`\n\nThis list is a guide of our other bots\n\n*Bots ➤*\n11) [@Image_Game_Red_Bot](tg://user?id=5060580087) - `Bots.Bussiness`\n12) [@FileSharingRedbot](tg://user?id=5003348068)  - `Bots.Bussiness`\n13) [@YouTubeDetailRedBot](tg://user?id=5055635553) - `Bots.Bussiness`\n14) [@testingredbot](tg://user?id=5081365371) - `Bots.Bussiness`\n15) [@linkshortenerredbot](tg://user?id=5078868979) - `Bots.Bussiness`\n16) [@ArtistEraRedBot](tg://user?id=5245269163) - `Bots.Bussiness`\n17) [@testing2redbot](tg://user?id=5180469156) - `BotMate`\n18) [@TexttoAudioRedBot](tg://user?id=5253848302) - `Bots.Bussiness`",

reply_markup: { inline_keyboard: [
    
    [

       { text: "⏮️", callback_data: "/Redbotso0000" },
       { text: "1◀️", callback_data: "/Redbotso0000" },
       { text: "3▶️", callback_data: "/Redbotso000L" },
       { text: "⏭️", callback_data: "/Redbotso000L" }
    ],
  ]},
  parse_mode: "markdown"
})
