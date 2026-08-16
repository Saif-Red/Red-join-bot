/*CMD
  command: /about
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

var capt = "Bot: @Red_join_bot\nCreator: @Saif_Red\nLanguage: BJS\nServer: Bots.Bussiness"
  Api.sendPhoto({
  photo: "https://telegra.ph/file/4325595e70362540a0908.jpg",
  caption: ""+capt+"",

  reply_markup: { inline_keyboard: [
    [

       { text: "Other Bots", callback_data: "/Redbotso0001" }
    ],
  ]}
});
