/*CMD
  command: /info
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /info@red_join_bot
  group: 
CMD*/

if (request.reply_to_message) { 
Bot.run({ command: "/data0981" })
return}

if (request.forward_from) {
  Bot.run({ command: "/get_details0981" })
  return}
  
  Api.sendPhoto({
photo: "https://t.me/"+user.username+"",
caption: "*ᴜsᴇʀ ɪɴꜰᴏ:*\n\n*ꜰɪʀsᴛ ɴᴀᴍᴇ ➤* "+user.first_name+"\n*ʟᴀsᴛ ɴᴀᴍᴇ ➤* "+user.last_name+"\n*ᴜsᴇʀ ɪᴅ ➤* `"+user.telegramid+"`\n*ᴜsᴇʀɴᴀᴍᴇ ➤* [@"+user.username+"](tg://user?id="+user.telegramid+")\n*ᴘᴇʀᴍᴀʟɪɴᴋ ➤* [link](tg://user?id="+user.telegramid+")",
  parse_mode: "markdown",
  on_error: "info0981", reply_to_message_id: "request.message_id"
})
Bot.clearCache("/info")
