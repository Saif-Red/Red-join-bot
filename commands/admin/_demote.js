/*CMD
  command: /demote
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /demote@red_join_bot
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
    Bot.sendMessage("*User DEMOTED from ADMIN*")
    Api.promoteChatMember({
      chat_id: chat.telegramid,
      user_id: id,
      can_change_info: "false",
can_invite_users: "false",
can_pin_messages: "false",
can_manage_chat: "false",
can_delete_messages: "false",
can_restrict_members: "false",
can_promote_members: "false",
can_manage_video_chats: "false",
is_anonymous: "false",
is_anonymous: "false",
      parse_mode: "markdown"
    })
  }
} else {
  Bot.sendMessage("❌ You are Not An Admin")
}
