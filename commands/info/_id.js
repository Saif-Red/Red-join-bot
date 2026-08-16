/*CMD
  command: /id
  help: 
  need_reply: false
  auto_retry_time: 
  folder: info

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /id@red_join_bot, /id@red_join_bot
  group: 
CMD*/

if (request.reply_to_message) { 
Bot.run({ command: "/id0981" })
return}
else
{
Bot.sendMessage("["+user.first_name+"] your ID is -  ```"+user.telegramid+"```\n\n*Current Chat info*\nChat Title: ["+chat.title+"]\nChat Type: ["+chat.chat_type+"]\nChat ID: ```"+chat.chatid+"```")
}
