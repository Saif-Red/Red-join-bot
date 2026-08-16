/*CMD
  command: /Chinfo0001
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Channel Info
  answer:  *📍 Enter Your Channel Or Group Username For Your Channel Or Group Details :*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("ch", message,"string")
Api.getChatMembersCount({chat_id: message,
on_result: "/subsh "})
