/*CMD
  command: /get
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

if (!request.reply_to_message) { 
Bot.sendMessage("Use this Command By replying an message")
return }
Bot.sendMessage("Finding. . .",
{
on_result: "/phfdsassddd", is_reply: false}
);
