/*CMD
  command: /test
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Yo

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("referral");
let lib = Libs.ReferralLib;
var refList = lib.currentUser.refList.get();

var capt = "*👋Hey "+user.first_name+"\n\nWelcome To Refer Section*\n\n⏯️Your Total Invites:- "+refList.length+" Users\n\n🔽Tap Button Below To Generate Referral Link"
  Api.sendPhoto({
  photo: "https://www.mediafire.com/file/t2ifg1jvwvdm7qy/images+(6).jpeg/file",
  caption: ""+capt+"",

  reply_markup: { inline_keyboard: [
  
    [
    
      { text: "ℹ️Channel", url: "t.me/MrTechCoder" },

      { text: "🔄Refresh", callback_data: "/start " }
    ],
    
    [
       { text: "🖇️Generate Ref Link", callback_data: "/genreflink" }
    ]
  ]}
});
