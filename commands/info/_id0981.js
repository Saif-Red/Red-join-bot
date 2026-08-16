/*CMD
  command: /id0981
  help: 
  need_reply: false
  auto_retry_time: 
  folder: info

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
var id = ""+request.reply_to_message.from.id+""

Api.sendMessage({
chat_id: request.chat.id,
text: ""+first+"'s ID is - ```"+id+"```\n\n*Current Chat info*\nChat Title: "+chat.title+"\nChat Type: "+chat.chat_type+"\nChat ID: ```"+chat.chatid+"```",
  parse_mode: "markdown"
})
