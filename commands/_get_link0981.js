/*CMD
  command: /get_link0981
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

if(chat.chat_type != "private"){  
var usid = ""+request.reply_to_message.from.id+""
Bot.sendMessage("*ᴜsᴇʀ ɪɴꜰᴏ:*\n\n*ᴘᴇʀᴍᴀʟɪɴᴋ ➤* [link](tg://user?id="+usid+")")
}else{
if(chat.chat_type = "private"){Bot.sendMessage("*Forward any message to this chat to see user history.*")
Bot.runCommand("Forwardlink0981")
return}
}
