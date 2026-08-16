/*CMD
  command: /ytth
  help: 
  need_reply: false
  auto_retry_time: 
  folder: YouTube

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(chat.chat_type != "private"){  
Bot.sendMessage("Use this command in Private.\n[Press here](https://t.me/Red_join_bot)")
}else{
if(chat.chat_type = "private"){Bot.runCommand("/ytth0001")
return}
}
