/*CMD
  command: /gr
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Telegraph 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!request.reply_to_message.photo[0]) {
  Bot.sendMessage("*Please Reply To A Photo Only!*")
  return
}
Bot.sendMessage("Uploading....")
if (request.reply_to_message.photo[3]) {
  Api.getFile({ file_id: request.reply_to_message.photo[3].file_id, on_result: "/photosuc" })
  return
}
if (request.reply_to_message.photo[2]) {
  Api.getFile({ file_id: request.reply_to_message.photo[2].file_id, on_result: "/photosuc" })
  return
}
if (request.reply_to_message.photo[1]) {
  Api.getFile({ file_id: request.reply_to_message.photo[1].file_id, on_result: "/photosuc" })
  return
}
if (request.reply_to_message.photo[0]) {
  Api.getFile({ file_id: request.reply_to_message.photo[0].file_id, on_result: "/photosuc" })
  return
}
