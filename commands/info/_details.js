/*CMD
  command: /details
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

if (chat.chat_type == "private") {
  Bot.sendMessage("Use this command in a GROUP")
}else{
  var id = request.chat.id
var user = request.chat.username
var title = request.chat.title
var link = request.chat.invite_link
var button = [{ title : "Invite Link" , url:"tg://user?id="+id+"" }]
Bot.sendInlineKeyboard(button, "Details of Group "+title+"\nGroup Name : "+title+"\nGroup ID : "+id+"\nGroup Username : @"+user+"")}
