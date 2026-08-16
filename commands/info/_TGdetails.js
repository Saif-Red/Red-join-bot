/*CMD
  command: /TGdetails
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

User.setProperty("Channel" , params)
if (params) {var amith = params.split("@")[1]
User.setProperty("channelogo","https://t.me/"+amith+"","string")
Api.getChatMembersCount({
chat_id: params,
on_result: "SubsTGdetailscm"
})
}
else
{Bot.sendMessage("Send like this `/TGdetails @Novel_G_Red`")}
