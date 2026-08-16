/*CMD
  command: /rule
  help: 
  need_reply: false
  auto_retry_time: 
  folder: greetings 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (chat.chat_type == "supergroup") {Bot.sendMessageToChatWithId(user.telegramid, "Rules for "+chat.title+"\n1) ᴅᴏɴ'ᴛ ꜰɪɢʜᴛ ᴡɪᴛʜ ᴜsᴇʀs.\n2) ᴅᴏɴ'ᴛ ᴜsᴇ ᴀʙᴜsɪᴠᴇ ᴡᴏʀᴅs.\n3) ᴅᴏɴ'ᴛ ᴅɪsᴛᴜʀʙ ᴏᴛʜᴇʀs ᴡɪᴛʜᴏᴜᴛ ᴀɴʏ ʀᴇᴀsᴏɴ.\n4) ᴋᴇᴇᴘ ᴄʜᴀᴛ ᴘᴇᴀᴄᴇꜰᴜʟʟ.\nᴡɪʟʟ ɢᴇᴛ sᴛʀᴀɪɢʜᴛ ʙᴀɴ ɪꜰ ʙʀᴇᴀᴋɪɴɢ ᴛʜᴇ ʀᴜʟᴇs")
Bot.sendMessage("Rules text you personally user ["+user.first_name+"](tg://user?id="+user.telegramid+")")}
else {
  Bot.sendMessage("Use this command in a Group.")}
