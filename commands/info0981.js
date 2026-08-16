/*CMD
  command: info0981
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

Api.sendMessage({
chat_id: request.chat.id,
text: "*ᴜsᴇʀ ɪɴꜰᴏ:*\n\n*ꜰɪʀsᴛ ɴᴀᴍᴇ ➤* "+user.first_name+"\n*ʟᴀsᴛ ɴᴀᴍᴇ ➤* "+user.last_name+"\n*ᴜsᴇʀ ɪᴅ ➤* `"+user.telegramid+"`\n*ᴜsᴇʀɴᴀᴍᴇ ➤* [@"+user.username+"](tg://user?id="+user.telegramid+")\n*ᴘᴇʀᴍᴀʟɪɴᴋ ➤* [link](tg://user?id="+user.telegramid+")",
  parse_mode: "markdown"
})
