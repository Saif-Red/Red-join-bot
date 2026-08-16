/*CMD
  command: /promote
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /promote@red_join_bot
  group: 
CMD*/

var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  if (!request.reply_to_message) {
    Bot.sendMessage(
      "Use this Command By replying any user"
    )
  } else {
var id = ""+request.reply_to_message.from.id+""
    Bot.sendMessage("*User promoted to ADMIN*")
    Api.promoteChatMember({
      chat_id: chat.telegramid,
      user_id: id,
      is_anonymous: "false",
      can_promote_members: "true",
      can_delete_messages: "true",
      can_restrict_members: "true",
      can_edit_messages: "false",
      can_post_messages: "true",
      parse_mode: "markdown"
     })
  }
} else {
  Bot.sendMessage("❌ You Not An Admin")
}
