/*CMD
  command: 🗞 Generate Secure Password
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Password Generator

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage("Generating a Secure Password... ", {
  on_result: "/genSecurePassword"
})

