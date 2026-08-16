/*CMD
  command: /ih
  help: 
  need_reply: false
  auto_retry_time: 
  folder: info

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })
Api.sendPhoto({
  photo: "https://telegra.ph/file/8695db19bf43ed1c4cf53.jpg",
  caption: "━━━━━━━━━━━━━━━━━━━━\nHere is the help for the Info module:\n━━━━━━━━━━━━━━━━━━━━\n\n ❍ /id : id of members\n ❍ /details : get details of the group\n ❍ /TGdetails : get details of channel in params\n ❍ /getpic : get pic of your friend\n ❍/get : get message id\n ❍/time : Get current indian time\n ❍/Cinfo : Get country info (Params)\n━━━━━━━━━━━━━━━━━━━━",

  reply_markup: { inline_keyboard: [
    [
       { text: "Bᴀᴄᴋ", callback_data: "/bk" }
    ]
  ]}
});
