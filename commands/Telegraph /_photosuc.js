/*CMD
  command: /photosuc
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

var limk =
  "https://api.telegram.org/file/bot" +
  bot.token +
  "/" +
  options.result.file_path +
  ""
HTTP.post({
  url: "https://api.secretprojects.xyz/v1/telegraph/upload/?url=" + limk + "",
  success: "/ontgsup"
})

