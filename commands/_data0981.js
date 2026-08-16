/*CMD
  command: /data0981
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

if (!request.reply_to_message) { 
Bot.sendMessage("Use this Command By replying any user")
return }
var first = ""+request.reply_to_message.from.first_name+""
var user = ""+request.reply_to_message.from.username+""
var last = ""+request.reply_to_message.from.last_name+""
var id = ""+request.reply_to_message.from.id+""

Api.sendPhoto({
photo: "https://t.me/"+user+"",
caption: "*ᴜsᴇʀ ɪɴꜰᴏ:*\n\n*ꜰɪʀsᴛ ɴᴀᴍᴇ ➤* "+first+"\n*ʟᴀsᴛ ɴᴀᴍᴇ ➤* "+last+"\n*ᴜsᴇʀ ɪᴅ ➤* `"+id+"`\n*ᴜsᴇʀɴᴀᴍᴇ ➤* [@"+user+"](tg://user?id="+id+")\n*ᴘᴇʀᴍᴀʟɪɴᴋ ➤* [link](tg://user?id="+id+")",
  parse_mode: "markdown",
  on_error:"data0981"
})
