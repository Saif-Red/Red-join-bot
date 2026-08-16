/*CMD
  command: Admin panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var panel = {
  // Panel title
  title: "Call secure command",
  description: "It is secure command",
  // order index
  index: 0,
  icon: "key",
  // save button title - default "SAVE"
  button_title: "RUN",
  // command called on saving
  // not necessary
  on_saving: {
     command: "/secure-command",
     // if you need user
     user_id: user_id // Get it via Bot.sendMessage(user.id)
  }
}

AdminPanel.setPanel("SecureCommand", panel);
