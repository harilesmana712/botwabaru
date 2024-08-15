//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +6285864562024
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "" //ur yt chanel name
global.socialm = "" //ur github or insta name
global.location = "" //ur location

//new
global.botname = 'nexarion sonus' //ur bot name
global.ownernumber = ['6285864562024'] //ur owner number, dont add more than one
global.ownername = 'harry' //ur owner name
global.websitex = ""
global.wagc = ""
global.themeemoji = '🪀'
global.wm = "nexarion sonus"
global.botscript = '://github.com/DGXeon/CheemsBot-MD15' //script link
global.packname = "Sticker By"
global.author = "nexarion sonus\n\n+6285864562024"
global.creator = "6285864562024@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285864562024"] // Premium User

//channel id
global.xchannel = {
	jid: ''
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});