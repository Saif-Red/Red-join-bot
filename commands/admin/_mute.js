/*CMD
  command: /mute
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /mute@red_join_bot
  group: 
CMD*/

var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  if (!request.reply_to_message) {
    Bot.sendMessage("Reply To A Message ")
    return
  }

  var chat = ""+request.chat.id+""
  var id = ""+request.reply_to_message.from.id+""
Bot.sendMessage("User muted")
  Api.restrictChatMember({
    chat_id: chat,
    user_id: id,
    can_send_messages: false
  })
}
