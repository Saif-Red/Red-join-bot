/*CMD
  command: /gpassword
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Password Generator

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ⬅️ return
  group: 
CMD*/

if(chat.chat_type != "private"){  
Bot.sendMessage("Use this command in Private, for gaining a Secure Password.\n[Press here](https://t.me/Red_join_bot) and use command for generating a secure password.")
}else{
if(chat.chat_type = "private"){Bot.sendKeyboard("🔑 Generate Password,\n🗞 Generate Secure Password,\n↩️ Back", "This Bot Can Generate Strong & Secure Passwords")
return}
}
