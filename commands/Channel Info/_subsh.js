/*CMD
  command: /subsh
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Channel Info

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(!params){
User.setProperty("count",options.result,"integer")
var channel = User.getProperty("ch")
Api.getChat({
      chat_id: ""+channel+"",
      on_result: "/subsh done"
    })
}

if(params){
var subs = User.getProperty("count")
var text = "*⚜️ Telegram Live Subscribers ⚜️*\n■ Name = *"+options.result.title+"*\n■ "+options.result.type+" Username: *@"+options.result.username +"*\n■ "+options.result.type+" Id: "+options.result.id+"\n■ Subscribers = *"+subs+"*\n■ Type = *"+options.result.type+"*\n\n■ Description: \n*"+options.result.description+"*\n\n© Deatails By : *@"+bot.name+".*"
var pic = options.result.photo
if(pic==undefined){
Bot.sendMessage(text)}
else{
Api.sendPhoto({photo:"t.me/"+options.result.username , caption: text,parse_mode: "markdown"})
}
}
