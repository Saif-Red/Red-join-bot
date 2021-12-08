/*CMD
  command: Hello
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello user!
What's your name user?
  ANSWER
  keyboard: 
  aliases: hello
CMD*/

BJS: Bot.sendMessage( "Yo, " + message );
