/*CMD
  command: SubsTGdetailscm
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

User.setProperty("Subs", options.result, "string")
var Channel = User.getProperty("Channel")
Api.getChat({
  chat_id: Channel,
  on_result: "cdet"
})
