/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /start@red_join_bot
CMD*/

var capt = "Yo "+user.first_name+"\n\nThis bot is made for joining in our community 『尺乇Ɗ』.\n\nJust send /join in the bot and we'll soon reply you about it.\n\nYou must join our 『尺乇Ɗ』community group\nFor getting the group link press this command /group or send /group command in the bot\n\nLeader:- @Saif_Red\nBut first please join our chat Group."
  Api.sendPhoto({
  photo: "https://telegra.ph/file/8d3354e27be8524127c71.jpg",
  caption: ""+capt+"",

  reply_markup: { inline_keyboard: [
  
    [
    
      { text: "Anime channel", url: "https://t.me/Anime_G_Red_Eng_Ver" },

      { text: "Chat Group", url: "https://t.me/Anime_Manga_G_Red_Chat_Group" }
    ],
    
    [

       { text: "Help", callback_data: "/help" }
    ],
  ]}
});
