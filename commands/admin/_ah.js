/*CMD
  command: /ah
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })
Api.sendPhoto({
  photo: "https://graph.org/file/9d35b4268f361383d6d44-88776cdb03f632e0c6.jpg",
  caption:
    "━━━━━━━━━━━━━━━━━━━━\nHere is the help for the Admin module:\n━━━━━━━━━━━━━━━━━━━━\n\n ❍ /admin or /staff : list of admins in the chat [Use /admin after adding the bot]\n ❍ /pin : silently pins the replied message\n ❍ /unpin : silently unpins the replied message\n ❍ /promote : promotes the user replied to\n ❍ /demote : demotes the user replied to\n  「 Mute Commands」\n ❍/mute : silences a user. Can also be used as a reply, muting the replied to user. \n ❍/unmute : unmutes a user. Can also be used as a reply, muting the replied to user.\n   「 Ban Commands」\n ❍ /ban : bans a user. (via reply)\n ❍ /unban : unbans a user. (via reply)\n━━━━━━━━━━━━━━━━━━━━",

  reply_markup: { inline_keyboard: [[{ text: "Bᴀᴄᴋ", callback_data: "/bk" }]] }
})

