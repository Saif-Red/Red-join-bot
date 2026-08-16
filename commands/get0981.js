/*CMD
  command: get0981
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

var first = ""+request.forward_from.first_name+""
var user = ""+request.forward_from.username+""
var last = ""+request.forward_from.last_name+""
var id = ""+request.forward_from.id+""
var bot = ""+request.forward_from.is_bot+""
Api.sendMessage({
chat_id : request.chat.id,
text: "*ᴜsᴇʀ ɪɴꜰᴏ:*\n\n*ꜰɪʀsᴛ ɴᴀᴍᴇ ➤* "+first+"\n*ʟᴀsᴛ ɴᴀᴍᴇ ➤* "+last+"\n*ᴜsᴇʀ ɪᴅ ➤* `"+id+"`\n*ᴜsᴇʀɴᴀᴍᴇ ➤* [@"+user+"](tg://user?id="+id+")\n*ᴘᴇʀᴍᴀʟɪɴᴋ ➤* [link](tg://user?id="+id+")\n▫️Is Bot:*"+bot+"",
  parse_mode: "markdown"
})
