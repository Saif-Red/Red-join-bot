/*CMD
  command: /unpin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /unpin@red_join_bot
  group: 
CMD*/

var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
  if (admin.list[user.telegramid] == user.telegramid) {
if (request.reply_to_message) {
  Api.unpinChatMessage({
    chat_id: chat.chatid,
    message_id: request.reply_to_message.message_id
  })
   Bot.sendMessage("Message unpinned on Request Of:- @"+user.username+"")
} else {
Bot.sendMessage("*Reply To A message To Unpin*")
}}
