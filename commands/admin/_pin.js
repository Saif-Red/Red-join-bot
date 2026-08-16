/*CMD
  command: /pin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /pin@red_join_bot
  group: 
CMD*/

var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
  if (admin.list[user.telegramid] == user.telegramid) {
if (request.reply_to_message) {
  Api.pinChatMessage({
    chat_id: chat.chatid,
    message_id: request.reply_to_message.message_id
  })
   Bot.sendMessage("*Message pinned on Request Of:-* [@"+user.username+"](tg://user?id="+user.telegramid+")")
} else {
Bot.sendMessage("*Reply To A message To Pin*")
}}
