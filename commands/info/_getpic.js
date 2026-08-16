/*CMD
  command: /getpic
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

if (request.reply_to_message) { 
  var id = ""+request.reply_to_message.from.id+""
Api.getUserProfilePhotos({user_id: id, on_result: "Photosgetpiccm"});
return}
else
{
  if (params) {
  var uname = params.split("@")[1]
  Api.sendPhoto({photo: "https://t.me/"+uname+""})
} else {
Bot.sendMessage("Reply to someone's message or send like this `/getpic @Red_join_bot`")
}
}
