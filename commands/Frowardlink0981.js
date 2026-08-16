/*CMD
  command: Frowardlink0981
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

var usid = request.forward_from.id
Bot.sendMessage("*ᴜsᴇʀ ɪɴꜰᴏ:*\n\n*ᴘᴇʀᴍᴀʟɪɴᴋ ➤* [Click Here](tg://user?id="+usid+")")
