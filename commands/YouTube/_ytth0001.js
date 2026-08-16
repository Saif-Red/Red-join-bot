/*CMD
  command: /ytth0001
  help: 
  need_reply: true
  auto_retry_time: 
  folder: YouTube
  answer: *Send Youtube Video Link*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var myMainSite = message
function validURL(url) {
  var regex = /(?:https?:/{2})?(?:w{3}.)?youtu(?:be)?.(?:com|be)(?:/watch?v=|/)([^s&]+)/
  return regex.test(url)
}
if (validURL(message)) {
if (message.includes("https://youtu.be")) {
var splitUrl = myMainSite.split('/');


var button = [[{text : "🌐 Open In Browser" , url : "https://img.youtube.com/vi/" +splitUrl[3]+ "/maxresdefault.jpg"}]]
Api.sendPhoto({ photo: "https://img.youtube.com/vi/" +splitUrl[3]+ "/maxresdefault.jpg", caption: "*Your Thumbnail Here n ©️@PR_robots*" ,
  reply_markup: { inline_keyboard: button }, 
parse_mode: "Markdown"})

}
else{
if (message.includes("https://www.youtube.com")) {
var splitUrl = myMainSite.split('=');

var button = [[{text : "🌐 Open In Browser" , url : "https://img.youtube.com/vi/" +splitUrl[1]+ "/maxresdefault.jpg"}]]
Api.sendPhoto({ photo: "https://img.youtube.com/vi/" +splitUrl[1]+ "/maxresdefault.jpg", caption: "*Your Thumbnail Here n ©️@PR_robots*" ,
  reply_markup: { inline_keyboard: button }, 
parse_mode: "Markdown"})

}
}
}
else {
  Bot.sendMessage("Wrong URLnExample : `https://youtu.be/YqtyXbQazCo`")
}
