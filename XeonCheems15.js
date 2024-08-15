//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +6285864562024
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

process.on('unhandledRejection', console.error)
process.on('uncaughtException', console.error)
require('./settings');
const XLSX = require('xlsx');
const fs = require('fs');
const os = require('os');
const util = require('util');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const fse = require('fs-extra');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('@distube/ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const request = require('request');
const maker = require('mumaker');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { JSDOM } = require('jsdom');
const agent = require('superagent');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const { exec, spawn, execSync } = require('child_process');
const googleTTS = require('google-tts-api');
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const fsx = require('fs-extra');
const fg = require('api-dylux');
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2');
const jsobfus = require('javascript-obfuscator');
const {translate} = require('@vitalets/google-translate-api');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage} = require('@whiskeysockets/baileys');

let ntnsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/badword.json'))

//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'));
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'));
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'));
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'));
const DocXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/doc.json'));
const ZipXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/zip.json'));
const ApkXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/apk.json'));

const prem = require('./src/premium');
const owner = JSON.parse(fs.readFileSync('./src/owner.json'));
const { TelegraPh, UploadFileUgu } = require('./lib/uploader');
const uploadImage = require('./lib/uploadImage');
const {
    toAudio,
    toPTT,
    toVideo,
    addExifAvatar,
    makeid,
  Telesticker,
  formatBytes,
  formatDuration
} = require('./lib/converter');
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list');
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js');
const { imageToWebp, videoToWebp, writeExif, writeExifImg, writeExifVid } = require('./lib/exif');
const { chatGpt, tiktokDl, ytMp4, ytMp3 } = require('./lib/screaper');
const { gameSlot, gameCasinoSolo, gameMerampok, gameTangkapOr, daily, transferLimit, transferUang, buy, setLimit, setUang } = require('./lib/game');
const { pinterest, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, jadwalsholat, styletext } = require('./lib/scraper');
const { formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, webApi, parseMention, generateProfilePicture, getRandom, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, generateToken, batasiTeks, randomText, isEmoji, getAllHTML, fetchBuffer, GIFBufferToVideoBuffer } = require('./lib/function');
// Read Database
let vote = db.others.vote = []
const xeonverifieduser = JSON.parse(fs.readFileSync('./src/user.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
			users: {},
			groups: {},
			database: {},
			 settings: {},
			others: {},
...(global.db || {})
}

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
	try {
		const {
            type
        } = m
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const XeonTheCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : '.'
		const isCmd = body.startsWith(prefix)
		//prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
		const args = body.trim().split(/ +/).slice(1)
		const getQuoted = (m.quoted || m)
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const command = XeonTheCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const sender = m.sender
		const isUser = xeonverifieduser.includes(sender)
		const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		if (m.isGroup) {
			m.metadata = await XeonBotInc.groupMetadata(m.chat)
			m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
			m.isAdmin = m.admins.some((b) => b.id === m.sender)
			m.participant = m.key.participant
			m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
		}
		
		//media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' 
        const isQuotedImage = type === 'extendedTextMessage' 
        const isQuotedLocation = type === 'extendedTextMessage' 
        const isQuotedVideo = type === 'extendedTextMessage' 
        const isQuotedSticker = type === 'extendedTextMessage'
        const isQuotedAudio = type === 'extendedTextMessage' 
        const isQuotedContact = type === 'extendedTextMessage' 
        const isQuotedDocument = type === 'extendedTextMessage'
		//anti media
        const isXeonMedia = m.mtype
        
        //bug
        const clientId = XeonBotInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net" || XeonBotInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
		
		try {
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		const isBoolean = x => typeof x === 'boolean' && Boolean(x)
		let user = global.db.users[m.sender]
		let limitUser = user ? (user.vip ? global.limit.vip : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free) : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free
		let uangUser = user ? (user.vip ? global.uang.vip : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free) : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free
		if (typeof user !== 'object') global.db.users[m.sender] = {}
		if (user) {
			if (!('vip' in user)) user.afkReason = false
			if (!isNumber(user.afkTime)) user.afkTime = -1
			if (!('afkReason' in user)) user.afkReason = ''
			if (!isNumber(user.limit)) user.limit = limitUser
			if (!('uang' in user)) user.uang = uangUser
			if (!('lastclaim' in user)) user.lastclaim = new Date * 1
			if (!('lastrampok' in user)) user.lastrampok = new Date * 1
		} else {
			global.db.users[m.sender] = {
				vip: false,
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
				uang: uangUser,
				lastclaim: new Date * 1,
				lastrampok: new Date * 1,
			}
		}
			let group = global.db.groups[m.chat]
			if (typeof group !== 'object') global.db.groups[m.chat] = {}
			if (group) {
				if (!('ntnsfw' in group)) group.ntnsfw = false
				  if (!('welcome' in group)) group.welcome = false
                  if (!('setinfo' in group)) group.setinfo = false
				  if (!('badword' in group)) group.badword = false
                  if (!('antiforeignnum' in group)) group.antiforeignnum = false
                  if (!('antibot' in group)) group.antibot = false
                  if (!('antiviewonce' in group)) group.antiviewonce = false
                  if (!('antispam' in group)) group.antispam = false
                  if (!('antimedia' in group)) group.media = false
                  if (!('antivirtex' in group)) group.antivirtex = false
                  if (!('antiimage' in group)) group.antiimage = false
                  if (!('antivideo' in group)) group.video = false
                  if (!('antiaudio' in group)) group.antiaudio = false
                  if (!('antipoll' in group)) group.antipoll = false
                  if (!('antisticker' in group)) group.antisticker = false
                  if (!('anticontact' in group)) group.anticontact = false
                  if (!('antilocation' in group)) group.antilocation = false
                  if (!('antidocument' in group)) group.antidocument = false
                  if (!('antilink' in group)) group.antilink = false
                  if (!('antipromotion' in group)) group.antipromotion = false
                  if (!('antidelete' in group)) group.antidelete = true
			} else {
				global.db.groups[m.chat] = {
				  ntsfw: false,
				  welcome: false,
				  setinfo: false,
				  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antidelete: true
				}
			}
		    let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
            if (setting) {
            	if (!('anticall' in setting)) setting.anticall = false
               if (!('antiswview' in setting)) setting.antiswview = false
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
            } else global.db.settings[botNumber] = {
               anticall: false,
           	antiswview: false,
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,               
            }
	} catch (e) {
		throw e;
	}
		
		const isVip = global.db.users[m.sender] ? global.db.users[m.sender].vip : false
		const isPremium = XeonTheCreator || prem.checkPremiumUser(m.sender, premium) || false
		const AntiNsfw = m.isGroup ? global.db.groups[m.chat].ntnsfw : false
		
		function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
		
// Fungsi untuk menampilkan data berdasarkan level atau nama farm
async function showLevelingData(level) {
    try {
        // Membaca file Excel dari path yang diberikan
        const filePath = './lib/database/leveling.xlsx'; // File leveling.xlsx
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Menggunakan sheet pertama

        if (!worksheet) {
            console.log('Sheet not found');
            return 'Sheet tidak ditemukan.';
        }

        // Mengonversi sheet ke JSON
        const data = XLSX.utils.sheet_to_json(worksheet);
        console.log(data); // Menampilkan data untuk debugging

        // Mencari baris berdasarkan level
        const row = data.find(row => row['lvl'] === level);

        if (row) {
            // Mencari level terakhir untuk monster yang sama
            const sameMonsterRows = data.filter(r => r['monster'] === row['monster']);
            const lastLevelRow = sameMonsterRows[sameMonsterRows.length - 1];
            const nextLevel = lastLevelRow['lvl'] + 1;

            return `Halo! 😊\n\n*Level kakak saat ini adalah:*\n\n*Level ${row['lvl']}*\n\n*Nama Monsternya:*\n\n ${row['monster']}\n\n*Lokasi nya ada di:*\n\n ${row['lokasi']}\n\nLakukan hingga level ${nextLevel} yah kak Semangat berjuang dan selamat leveling! 🌟`;
        } else {
            // Menentukan level maksimum dari data
            const maxLevel = Math.max(...data.map(row => row['lvl']));

            return `Maaf, level ${level} tidak ditemukan. Level Cap saat ini hanya sampai ${maxLevel}. Terima kasih!\nSemangat terus! 💪`;
        }
    } catch (error) {
        console.error(error);
        return 'Terjadi kesalahan saat membaca file. Mohon coba lagi.';
    }
}
async function showLbsData(level) {
    try {
        // Membaca file Excel dari path yang diberikan
        const filePath = './lib/database/lbs.xlsx'; // File leveling.xlsx
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Menggunakan sheet pertama

        if (!worksheet) {
            console.log('Sheet not found');
            return 'Sheet tidak ditemukan.';
        }

        // Mengonversi sheet ke JSON
        const data = XLSX.utils.sheet_to_json(worksheet);
        console.log(data); // Menampilkan data untuk debugging

        // Mencari baris berdasarkan level
        const row = data.find(row => row['lvl'] === level);

        if (row) {
            // Mencari level terakhir untuk monster yang sama
            const sameMonsterRows = data.filter(r => r['eq'] === row['eq']);
            const lastLevelRow = sameMonsterRows[sameMonsterRows.length - 1];
            const nextLevel = lastLevelRow['lvl'] + 1;

            return `Halo! 😊\n\n*Level kakak saat ini adalah:*\n\n*Level ${row['lvl']}*\n\n*Nama eq yg harus di buat:*\n\n ${row['eq']}\n\n*Bahan nya:*\n\n ${row['bahan']}\n\nLakukan hingga level ${nextLevel} yah kak Semangat berjuang dan selamat leveling! 🌟`;
        } else {
            // Menentukan level maksimum dari data
            const maxLevel = Math.max(...data.map(row => row['lvl']));

            return `Maaf, level ${level} tidak ditemukan. Level Cap saat ini hanya sampai ${maxLevel}. Terima kasih!\nSemangat terus! 💪`;
        }
    } catch (error) {
        console.error(error);
        return 'Terjadi kesalahan saat membaca file. Mohon coba lagi.';
    }
}
async function showFarmData(name) {
    try {
        // Membaca file Excel dari path yang diberikan
        const filePath = './lib/database/kain.xlsx'; // Path ke file kain.xlsx
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Menggunakan sheet pertama

        if (!worksheet) {
            console.log('Sheet not found');
            return 'Sheet tidak ditemukan.';
        }

        // Mengonversi sheet ke JSON
        const data = XLSX.utils.sheet_to_json(worksheet);
        console.log(data); // Menampilkan data untuk debugging

        // Menentukan simbol berdasarkan nama
        const symbols = {
            'batu': '🔩',
            'kain': '🧵',
            'obat': '💊',
            'kayu': '🪵',
            'fauna': '🦄' // Simbol fauna, sesuaikan sesuai kebutuhan
        };
        
        let symbol = symbols[name.toLowerCase()] || ''; // Ambil simbol sesuai nama

        // Mencari baris berdasarkan nama
        const rows = data.filter(row => row['nama'] === name);

        if (rows.length > 0) {
            let response = `🌟 *Informasi Farm*🌟\n\n*nama bahan:*${symbol}${name}${symbol}:\n\n`;
            rows.forEach(row => {
                // Menampilkan monster dan lokasi jika ada
                if (row['monsterF']) {
                    response += `*Monster:* ${row['monsterF']}\n`;
                }
                if (row['lokasiF']) {
                    response += `*Lokasi:* ${row['lokasiF']}\n`;
                }
                response += `\n`; // Tambahkan spasi antara entri
            });

            response += `✨ Selamat berpetualang dan semoga berhasil! ✨`;
            return response.trim();
        } else {
            return `🚫 Maaf, data untuk nama "${name}" tidak ditemukan. 🚫`;
        }
    } catch (error) {
        console.error(error);
        return '⚠️ Terjadi kesalahan saat membaca file. Mohon coba lagi. ⚠️';
    }
}


		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(global.db.users)
			for (let jid of user) {
				const limitUser = global.db.users[jid].vip ? global.limit.vip : prem.checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				global.db.users[jid].limit = limitUser
				console.log('Limit Reseted')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Kolkata'
		})
		
		if (!XeonBotInc.public) {
			if (XeonTheCreator && !m.key.fromMe) return
		}
		
		//Log
		if (m.message) {
			console.log(chalk.black.bgWhite('[ MESSAGE ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
		}
		
		// Grup Only
        if (!m.isGroup && !XeonTheCreator && db.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcxeon(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!XeonTheCreator && db.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcxeon("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
		
		// Auto Read
		if (db.settings[botNumber].autoread) {
            XeonBotInc.readMessages([m.key]);
        }
        
        //auto set bio\\
	if (db.settings[botNumber].autobio) {
            XeonBotInc.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
        
        //auto type
        if (db.settings[botNumber].autotype){
        if (m.message) {
        	let xeonpos = ['composing']
            XeonBotInc.sendPresenceUpdate(xeonpos, m.chat)
        }
        }
        
        //auto type record
        if (db.settings[botNumber].autorecordtype){
        if (m.message) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            XeonBotInc.sendPresenceUpdate(xeonmix2, m.chat)
        }
        }
        
        //autorecord
        if (db.settings[botNumber].autorecord){
        if (m.message) {
        	let xeonpos = ['recording']
            XeonBotInc.sendPresenceUpdate(xeonpos, m.chat)
        }
        }
        
        //unavailable
        if (db.settings[botNumber].online) {
        	if (isCmd) {
        	XeonBotInc.sendPresenceUpdate('unavailable', m.chat)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.settings[botNumber].autoblocknum === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.settings[botNumber].onlyindia === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.settings[botNumber].onlyindo === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.groups[m.chat].antiforeignnum === true){ 
        	if (XeonTheCreator || m.isAdmin || !m.isBotAdmin) return
            XeonBotInc.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygcxeon('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await XeonBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        XeonBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygcxeon('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        
        //autosticker
        if (db.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                XeonBotInc.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                XeonBotInc.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        //antibot
        if (db.groups[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (m.isAdmin || !m.m.isBotAdmin){		  
        } else {
          replygcxeon(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
   
		//antiviewonce
    if ( db.groups[m.chat].antiviewonce && m.isGroup && m.mtype == "viewOnceMessageV2") {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await XeonBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })    	
    }
    
    // Anti promotion
if (db.groups[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!m.isBotAdmin) return
if(XeonTheCreator) return
if (m.isAdmin) return
XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
XeonBotInc.sendMessage(m.chat, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

//respond
        if (db.groups[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.sendMessage(m.chat, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }

//ANTI VIRUS
if (m.isGroup && db.groups[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (m.isBotAdmin) return replygcxeon('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
XeonBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!m.m.isBotAdmin) return
if(XeonTheCreator) return
XeonBotInc.groupParticipantsUpdate(m.chat, [sender], 'remove')
await XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
XeonBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
    
    //anti media
        if (db.groups[m.chat].antimedia && isMedia) {
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.groups[m.chat].image && isXeonMedia) {
    if(isXeonMedia === "imageMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antivideo && isXeonMedia) {
    if(isXeonMedia === "videoMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antisticker && isXeonMedia) {
    if(isXeonMedia === "stickerMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.groups[m.chat].antiaudio && isXeonMedia) {
    if(isXeonMedia === "audioMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antipoll && isXeonMedia) {
    if(isXeonMedia === "pollCreationMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antilocation && isXeonMedia) {
    if(isXeonMedia === "locationMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.groups[m.chat].antidocument && isXeonMedia) {
    if(isXeonMedia === "documentMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.groups[m.chat].anticontact && isXeonMedia) {
    if(isXeonMedia === "contactMessage"){
        if (XeonTheCreator || m.isAdmin || !m.isBotAdmin){		  
        } else {
          replygcxeon(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  
        if (db.groups[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (m.isAdmin) return replygcxeon(bvl)
if (m.key.fromMe) return replygcxeon(bvl)
if (XeonTheCreator) return replygcxeon(bvl)
               await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        
        //auto download #ctto
        if (db.settings[botNumber].autodownload && !m.key.fromMe) {
try {
if (budy.match(`instagram.com`)) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await XeonBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await XeonBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await XeonBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await XeonBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await XeonBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !XeonTheCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					await XeonBotInc.relayMessage(m.chat, { [chats.type]: chats.msg }, {})
				}
			}
		}
		
		//user db //friend
        if (isCmd && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./src/user.json', JSON.stringify(xeonverifieduser, null, 2))
}
		
		// Check Expiry
		prem.expiredCheck(XeonBotInc, premium);
		
		// TicTacToe
		let room = Object.values(game.tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				replygcxeon({
					'-3': 'The game is over',
					'-2': 'Invalid',
					'-1': 'Invalid Position',
					0: 'Invalid Position',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				global.db.users[m.sender].limit += 3
				global.db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await XeonBotInc.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await XeonBotInc.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete game.tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(game.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
					replygcxeon(`@${roof.p2.split`@`[0]} rejected the suit,\nsuit cancelled`)
					delete game.suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				replygcxeon(`The suit has been sent to chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nPlease select a suit in the respective chat https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) XeonBotInc.sendMessage(roof.p, { text: `Please select \n\nRock🗿\nPaper📄\nScissors✂️` }, { quoted: m })
				if (!roof.pilih2) XeonBotInc.sendMessage(roof.p2, { text: `Please select \n\nRock🗿\nPaper📄\nScissors✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) replygcxeon(`Both players have no intention of playing,\nSuit cancelled`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						replygcxeon(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose a suit, the game ends`)
					}
					delete game.suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /scissors/i
			let b = /rock/i
			let k = /paper/i
			let reg = /^(scissors|rock|paper)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				replygcxeon(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`);
				if (!roof.pilih2) XeonBotInc.sendMessage(roof.p2, { text: '_The opponent has already chosen_\nNow it is your turn' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				replygcxeon(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
				if (!roof.pilih) XeonBotInc.sendMessage(roof.p, { text: '_The opponent has already chosen_\nNow it is your turn' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				global.db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				global.db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				XeonBotInc.sendMessage(roof.asal, { text: `_*Suit Results*_${tie ? '\nSERIES' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}\n\nWinner Gets\n*Present :* Money(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete game.suit[roof.id]
			}
		}
		
		// Guess Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in game.tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				game.tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				game.tebakbom[m.sender].pick++;
				XeonBotInc.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				game.tebakbom[m.sender].bomb--;
				game.tebakbom[m.sender].nyawa.pop();
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].nyawa.length < 1) {
					global.db.users[m.sender].limit -= 1
					await replygcxeon(`*THE GAME IS OVER*\nYou were hit by a bomb\n\n ${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n_Limit Reduction : 1_`);
					XeonBotInc.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete game.tebakbom[m.sender];
				} else await replygcxeon(`*SELECT A NUMBER*\n\nYou were hit by a bomb\n ${brd.join('')}\n\nSelected: ${game.tebakbom[m.sender].pick}\nRemaining life: ${game.tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				game.tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				game.tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				game.tebakbom[m.sender].pick++;
				game.tebakbom[m.sender].lolos--;
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].lolos < 1) {
					global.db.users[m.sender].limit += 3
					global.db.users[m.sender].uang += 3000
					await replygcxeon(`*YOU ARE GREAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n*Remaining life :* ${game.tebakbom[m.sender].nyawa}\n*Bomb :* ${game.tebakbom[m.sender].bomb}\n*Present :* Money(3000) & Limit(3)`);
					delete game.tebakbom[m.sender];
				} else replygcxeon(`*SELECT A NUMBER*\n\n${brd.join('')}\n\nSelected : ${game.tebakbom[m.sender].pick}\nRemaining life : ${game.tebakbom[m.sender].nyawa}\nBomb : ${game.tebakbom[m.sender].bomb}`)
			}
		}
		
		// Math
		if (game.kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = game.kuismath[m.sender.split('@')[0]].jawaban
			const difficultyMap = { 'noob': 1, 'easy': 2, 'medium': 3, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
			let hasilLimit = difficultyMap[game.kuismath[m.sender.split('@')[0]].mode]
			if (isNaN(budy)) return
			if (budy.toLowerCase() == jawaban) {
				global.db.users[m.sender].limit += hasilLimit
				global.db.users[m.sender].uang += hasilLimit * 1000
				await replygcxeon(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\nYou Get a Limit *${hasilLimit}*\n\nWant to play again? Send ${prefix}math mode`)
				delete game.kuismath[m.sender.split('@')[0]]
			} else replygcxeon('*Wrong answer!*')
		}
		
		// Menfes
		if (!m.isGroup) {
			if (game.menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await XeonBotInc.relayMessage(game.menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			replygcxeon(`Don't tag him!\nHe's AFK ${reason ? 'with reason ' + reason : 'no reason'}\nDuring ${clockString(new Date - afkTime)}`.trim())
		}
		if (global.db.users[m.sender].afkTime > -1) {
			let user = global.db.users[m.sender]
			replygcxeon(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' after ' + user.afkReason : ''}\nDuring ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		//reply
        async function replygcxeon(teks) {
            if (typereply === 'v1') {
                replygcxeon(teks)
            } else if (typereply === 'v2') {
                XeonBotInc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               XeonBotInc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'v4') {
                replygcxeon2(teks)
            }
        }
        
//fake reply with channel link embedded
async function replygcxeon2(txt) {
const xeonnewrep = {      
contextInfo: {
forwardingScore: 0,
isForwarded: false,
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://i.postimg.cc/rs4vLzzf/IMG-20240815-WA0038.png',
sourceUrl: websitex
},
},
text: txt,
}
return XeonBotInc.sendMessage(m.chat, xeonnewrep, {
quoted: m,
})
}
//premium
        async function replyprem(teks) {
    replygcxeon(`This feature is for premium user, contact the owner to become premium user`)
}

//script replier
        async function sendXeonBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await XeonBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//theme sticker reply
        const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
        XeonBotInc.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        
//time
const xday = moment.tz('Asia/Kolkata').locale('en-IN').format('dddd');
const xdate = moment.tz('Asia/Kolkata').locale('en-IN').format('DD/MM/YYYY');
const xtime = moment().tz('Asia/Kolkata').locale('en-IN').format('HH:mm:ss');
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 

//theme txt
let setv = pickRandom(global.listv)

//autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
XeonBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
XeonBotInc.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
XeonBotInc.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
}
function getRandomHoki() {
    return Math.floor(Math.random() * 101); // Persentase antara 0 hingga 100
}
function getPedoPercentage() {
    return Math.floor(Math.random() * 101); // Persentase antara 0 hingga 100
}
		switch(isCommand) { 
			case 'setprefix':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!text) return replygcxeon(`Example : ${prefix + command} #`)
                global.xprefix = text
                replygcxeon(`Prefix successfully changed to ${text}`)
                break
                //animemenu
case 'animeneko':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*ini hasil dari ${command}*_`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                }
break

case 'anime': {
if (!text) return replygcxeon(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await XeonStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcxeon(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Tipe: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episode: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genre: ${anime.genres}*
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularitas: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*ini hasil dari ${text}*_\n\n${animetxt}`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:anime.picture}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
                
                }
                break
			case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*ini hasil dari ${command}*_`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
 
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*ini hasil dari ${command}*_`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*ini hasil dari ${command}*_`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'traceanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return replygcxeon("*Respond to an image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return replygcxeon("*Error: Could not track the anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
    message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url: video}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error("Error:", error);
    replygcxeon("*Error: Could not track the anime or send the video.*");
  }
};
break
//search menu
           case 'spotify':{
	if (!text) return replygcxeon(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygcxeon('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygcxeon('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygcxeon( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "dgxeon",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await XeonBotInc.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygcxeon('*Error*')
    }
    }
    break
			case 'mediafire': {
  	if (!args[0]) return replygcxeon(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return replygcxeon(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    XeonBotInc.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
			case 'remini': {
			if (!quoted) return replygcxeon(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcxeon(`Send/Reply Photos With Captions ${prefix + command}`)
			await XeonStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*ini hasil dari: ${command}*_`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: proses }, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😍\",\"id\":\""}`
            }],
          }),
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
			}
			break
			case 'imdb':
if (!text) return replygcxeon(`_Name a Series or movie`)
await XeonStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           XeonBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'itunes': {
if (!text) return replygcxeon('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: songInfo
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({image: {url:json.thumbnail}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
    } else {
      replygcxeon(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
            case 'lyrics': {
if (!text) return replygcxeon(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
await XeonStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
try {
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
const xeonlirik = `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonlirik
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\""}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}catch{
replygcxeon(`Lyrics ${text} not found!`)
}
}
break
			case 'apksearch': {
if (!text) return replygcxeon(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: capt
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: json[0].thumbnail }}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
}
break

			case 'yts': case 'ytsearch': {
  if (!text) return replygcxeon(`*Example :* ${prefix + command} title`);
  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      replygcxeon('No video found');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: XeonBotInc.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_copy",
              "buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            
          })
        }
      }
    }, {quoted:m});
    await XeonBotInc.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await replygcxeon(`Error`);
  }
}
break
			case 'wikipedia': case 'wiki': {
	if (!text) return replygcxeon(`Enter what you want to search for on Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `▢ *Wikipedia*

‣ Title : ${wik}

${resulw}`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  replygcxeon('⚠️ ga ada hasilnya nih bos ')
}
}
break
			case 'google': {
if (!q) return replygcxeon(`Example : ${prefix + command} ${botname}`)
await XeonStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcxeon(teks)
})
}
break  
			// Group Menu
			
			case 'kickall': {
 if (!m.isGroup) return XeonStickGroup()
 if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
 if (!m.isBotAdmin) return XeonStickBotAdmin()
  const xeonkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.db.groups[m.chat].welcome === true) {
 global.db.groups[m.chat].welcome = false;
  }
 for (let remove of xeonkickall) {
 await XeonBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return XeonStickGroup()
 if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
 if (!m.isBotAdmin) return XeonStickBotAdmin()
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await XeonBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return XeonStickGroup()
 if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
 if (!m.isBotAdmin) return XeonStickBotAdmin()
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await XeonBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
			case 'ephemeral': {
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
                if (args[0] === 'on') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygcxeon(`Done`)
                } else if (args[0] === 'off') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcxeon(`Done`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                
            }
            break
			case 'invite': {
	if (!m.isGroup) return XeonStickGroup()
	if (!m.isBotAdmin) return XeonStickBotAdmin()
if (!text) return replygcxeon(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 6285864562024`)
if (text.includes('+')) return replygcxeon(`Enter the number together without *+*`)
if (isNaN(text)) return replygcxeon(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await XeonBotInc.groupInviteCode(group)
      await XeonBotInc.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcxeon(` An invite link is sent to the user`) 
}
break
			case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return XeonStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Menu 🚀\",\"id\":\"${prefix}menu"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [...groupAdmins.map(v => v.id), owner],
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
   
}
break
			case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':{
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isAdmin && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                }
            break
			case 'add': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`EXAMPLE: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await XeonBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) =>{
							for (let i of res) {
								let invv = await XeonBotInc.groupInviteCode(m.chat)
								if (i.status == 408) return replygcxeon('User Just Left This Group!')
								if (i.status == 401) return replygcxeon('User Blocked The Bot!')
								if (i.status == 409) return replygcxeon('User has joined!')
								if (i.status == 500) return replygcxeon('Group Full!')
								if (i.status == 403) {
									await XeonBotInc.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Cannot Be Added\n\nBecause Target Private\n\nInvitations will be sent to\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nVia Private Chat`, mentions: [numbersOnly] }, { quoted : m })
									await XeonBotInc.sendMessage(`${numbersOnly ? numbersOnly : '6285864562024@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nInvite you to this group\nPlease enter if you wish🙇`, detectLink: true, mentions: [numbersOnly] }, { quoted : floc2 }).catch((err) => replygcxeon('Failed to Send Invitation!'))
								} else {
									replygcxeon('Success!!')
								}
							}
						})
					} catch (e) {
						replygcxeon('Failed to Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XeonBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => replygcxeon('Failed to Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XeonBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => replygcxeon('Fail!'))
					replygcxeon(mess.done)
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XeonBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => replygcxeon('Failed!'))
					replygcxeon(mess.done)
				}
			}
			break
			case 'setnamegc': case 'setsubject': case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} text`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await XeonBotInc.groupUpdateSubject(m.chat, teksnya).catch((err) => replygcxeon('Fail!'))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await XeonBotInc.groupUpdateDescription(m.chat, teksnya).catch((err) => replygcxeon('Fail!'))
				}
			}
			break
			case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return XeonStickGroup()
                if (!m.isAdmin && !XeonTheCreator) return replygcxeon(mess.admin)
                if (!m.isBotAdmin) return XeonStickBotAdmin()
                if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return replygcxeon('Reply to the message you want to delete')
				await XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				let response = await XeonBotInc.groupInviteCode(m.chat)
				await XeonBotInc.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await XeonBotInc.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
			}
			break
			case 'resetlink': case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				await XeonBotInc.groupRevokeInvite(m.chat).then((a) => {
					replygcxeon(`Reset Success, Group Invite Link ${m.metadata.subject}`)
				}).catch((err) => replygcxeon('Fail!'))
			}
			break
			case 'group': case 'grup': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (text === 'close') {
					await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcxeon(`*Successfully Closing The Group*`))
				} else if (text === 'open') {
					await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcxeon(`*Successfully Opening The Group*`))
				} else {
					let button = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECT',
							sections: [{
								title: 'Group Mode',
								rows: [
									{ title: 'Open Group', description: 'Open Group', id: 'grup open' },
									{ title: 'Close Group', description: 'Close Group', id: 'grup close' },
								]
							}]
						}
					}]
					await XeonBotInc.sendButtonMsg(m.chat, 'Group Mode', xeonytimewisher, 'Please choose', null, button, m);
				}
			}
			break
			case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return XeonStickGroup()
if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
if (!m.isBotAdmin) return XeonStickBotAdmin()
    await XeonBotInc.removeProfilePicture(m.chat)
    }
    break
    case 'deleteppbot': case 'delbotpp': case 'delppbot': {
if (!XeonTheCreator) return XeonStickOwner()
    await XeonBotInc.removeProfilePicture(XeonBotInc.user.id)
    replygcxeon(`Success in deleting bot's profile picture`)
    }
    break
			case 'antidelete': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (text === 'on') {
					if (db.groups[m.chat].antidelete) return replygcxeon('*Sudah Aktif Sebelumnya*')
					db.groups[m.chat].antidelete = true
					replygcxeon('*Anti Delete Activated !*')
				} else if (text === 'off') {
					db.groups[m.chat].antidelete = false
					replygcxeon('*Anti Delete Disabled !*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Anti Delete',
								rows: [
									{ title: 'ENABLE', description: 'Enable Antidelete', id: 'antidelete on' },
									{ title: 'DISABLE', description: 'Disable Antidelete', id: 'antidelete off' },
								]
							}]
						}
					}]
					await XeonBotInc.sendButtonMsg(m.chat, 'Group Mode', xeonytimewisher, 'Please choose', null, buttonnya, m);
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				let teks = `*Tag All*\n\n*Message :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await XeonBotInc.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'totag': {
				if (!m.isGroup) return XeonStickGroup()
				if (!m.isAdmin && !XeonTheCreator) return XeonStickAdmin()
				if (!m.isBotAdmin) return XeonStickBotAdmin()
				if (!m.quoted) return replygcxeon(`Reply messages with captions ${prefix + command}`)
				delete m.quoted.chat
				await XeonBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return XeonStickGroup()
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await XeonBotInc.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `${setv} @` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => replygcxeon('Fail'))
			}
			break
			
			// Bot Menu
			
			case 'addowner':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await XeonBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/owner.json', JSON.stringify(owner))
replygcxeon(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 6285864562024`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/owner.json', JSON.stringify(owner))
replygcxeon(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│${setv} ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygcxeon(teks)
            }
            break
			case 'shutdown':{
                if (!XeonTheCreator) return XeonStickOwner()
                replygcxeon(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
                }
            break
			  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            replygcxeon(m.chat)
           }
          break
			case 'getexif': case 'getwm': case 'getwatermark':{
                if (!XeonTheCreator) return XeonStickOwner()
               replygcxeon(`*Water Mark/Exif of ${botname} is*\n\n${setv} Packname : ${packname}\n${setv} Author : ${author}`)
               }
                break
                case 'getautoblocknumber': case 'getautoblockno': case 'getautoblock':{
                if (!XeonTheCreator) return XeonStickOwner()
               replygcxeon(`*Auto Block Country Code of ${botname} is*\n\n${setv} Country Code : ${autoblocknumber}\n\n_Note: Once autoblock number is activated, numbers related to this country code will be blocked automatcially_`)
               }
                break
 
			case 'resetuser':
            case 'resetdbuser': {
               if (!XeonTheCreator) return XeonStickOwner()
               let totalusernya = db.users[0]
               replygcxeon(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.users = []
            }
            break
			case 'resethit':
            case 'resettotalhit': {
               if (!XeonTheCreator) return XeonStickOwner()
               global.db.settings[botNumber].totalhit = 0
               replygcxeon(mess.done)
            }
            break
			case 'setreply':{
               if (!XeonTheCreator) return XeonStickOwner()
               if (text.startsWith('v')) {
                  typereply = text
                  replygcxeon(mess.done)
               } else {
                  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT REPLY 🐛",
"sections":[{"title":"SELECT THE REPLY BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"CHANNEL + LINK THUMB",
"title":"CHOOSE ",
"description":"CHANNEL + LINK THUMB",
"id":"${prefix+command} v4"},
{"header":"LARGE LINK + THUMBNAIL",
"title":"CHOOSE ",
"description":"LARGE LINK + THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"LINK + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"LINK + FAKE THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"QUOTED NORMALLY",
"title":"CHOOSE ",
"description":"QUOTED NORMALLY",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
   
			case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!XeonTheCreator) return XeonStickOwner()
                try {
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './XeonMedia/theme/Cheems-bot.mp4')
                fs.unlinkSync(delb)
                replygcxeon(mess.done)
                } catch {
                	replygcxeon(`Please reply to a image with caption ${prefix+command}`)
                }
            }
            break
			case 'setimgmenu':
            case 'sim': {
                if (!XeonTheCreator) return XeonStickOwner()
                try {
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './XeonMedia/theme/cheemspic.jpg')
                fs.unlinkSync(delb)
                replygcxeon(mess.done)
                } catch {
                	replygcxeon(`Please reply to a image with caption ${prefix+command}`)
                }
            }
            break
			case 'setmenu': {
            if (!XeonTheCreator) return XeonStickOwner()
            if (text.startsWith('v')) {
                  typemenu = text
                  replygcxeon(mess.done)
               } else {
               let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT MENU 🗂️",
"sections":[{"title":"SELECT THE MENU BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"BUTTON + CHANNEL V2",
"title":"CHOOSE ",
"description":"BUTTON + CHANNEL V2",
"id":"${prefix+command} v12"},
{"header":"BUTTON + CHANNEL",
"title":"CHOOSE ",
"description":"BUTTON + CHANNEL",
"id":"${prefix+command} v11"},
{"header":"ONLY BUTTON",
"title":"CHOOSE ",
"description":"ONLY BUTTON",
"id":"${prefix+command} v10"},
{"header":"CHANNEL + FAKE THUMBNAIL V2",
"title":"CHOOSE ",
"description":"CHANNEL + FAKE THUMBNAIL V2",
"id":"${prefix+command} v9"},
{"header":"CHANNEL + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"CHANNEL + FAKE THUMBNAIL",
"id":"${prefix+command} v8"},
{"header":"FAKE THUMBNAIL + DOCUMENT",
"title":"CHOOSE ",
"description":"FAKE THUMBNAIL + DOCUMENT",
"id":"${prefix+command} v7"},
{"header":"FAKE PAYMENT",
"title":"CHOOSE ",
"description":"FAKE PAYMENT",
"id":"${prefix+command} v6"},
{"header":"CALL SCHEDULE",
"title":"CHOOSE",
"description":"CALL SCHEDULE",
"id":"${prefix+command} v5"},
{"header":"GIF THUMBNAIL",
"title":"CHOOSE",
"description":"GIF THUMBNAIL",
"id":"${prefix+command} v4"},
{"header":"VIDEO THUMBNAIL",
"title":"CHOOSE",
"description":"VIDEO THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"CHANNEL + THUMBNAIL",
"title":"CHOOSE",
"description":"CHANNEL + THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"IMAGE THUMBNAIL",
"title":"CHOOSE",
"description":"IMAGE THUMBNAIL",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break

			case 'autoblock':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].autoblocknum = true
                    replygcxeon(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].autoblocknum = false
                    replygcxeon(`Successfully Changed Auto-Block To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlygroup':
            case 'onlygc':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlygrub = true
                    replygcxeon(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlygrub = false
                    replygcxeon(`Successfully Changed Onlygroup To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlypc = true
                    replygcxeon(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlypc = false
                    replygcxeon(`Successfully Changed Only-Pc To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlyindia = true
                    replygcxeon(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlyindia = false
                    replygcxeon(`Successfully Changed Only-Indian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q == 'on') {
                    db.settings[botNumber].onlyindo = true
                    replygcxeon(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlyindo = false
                    replygcxeon(`Successfully Changed Only-Indonesian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'setautoblock':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!text) return replygcxeon(`Example : ${prefix + command} 92`)
                global.autoblocknumber = text
                replygcxeon(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!text) return replygcxeon(`Example : ${prefix + command} 91`)
                global.antiforeignnumber = text
                replygcxeon(`Anti-foreign number successfully changed to ${text}`)
                break
			case 'autoswview':
    case 'autostatusview':{
             if (!XeonTheCreator) return XeonStickOwner()
               
               if (args[0] === 'on') {
                  db.settings[botNumber].antiswview = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.settings[botNumber].antiswview = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
    case 'anticall': {
             if (!XeonTheCreator) return XeonStickOwner()
               
               if (args[0] === 'on') {
                  db.settings[botNumber].anticall = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.settings[botNumber].anticall = false
                  replygcxeon(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
			case 'autorecordtype':
                if (!XeonTheCreator) return XeonStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autorecordtype = true
                    replygcxeon(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autorecordtype = false
                    replygcxeon(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autorecord':
                if (!XeonTheCreator) return XeonStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autorecord = true
                    replygcxeon(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autorecord = false
                    replygcxeon(`Successfully changed Auto-Recording to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'autotype':
                if (!XeonTheCreator) return XeonStickOwner()
                
                if (q === 'on') {
                    db.settings[botNumber].autotype = true
                    replygcxeon(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autotype = false
                    replygcxeon(`Successfully changed Auto-Typing to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'autoread':
                if (!XeonTheCreator) return XeonStickOwner()
                if (q === 'on') {
                    db.settings[botNumber].autoread = true
                    replygcxeon(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autoread = false
                    replygcxeon(`Successfully changed autoread to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
      

			case 'setbio': case 'setbotbio': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon(`Where's the text??`)
				XeonBotInc.setStatus(q)
				replygcxeon(`*Bio has been changed to ${q}*`)
			}
			break
			case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
			case 'join': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon('Enter Group Link!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				XeonStickWait()
				await XeonBotInc.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return replygcxeon('Group Not Found❗');
					if (res.data == 401) return replygcxeon('Bot Kicked From The Group❗');
					if (res.data == 409) return replygcxeon('Bots Have Joined the Group❗');
					if (res.data == 410) return replygcxeon('Group URL Has Been Reset❗');
					if (res.data == 500) return replygcxeon('Full Group❗');
				})
			}
			break
						case 'leave': case 'leavegc': {
				if (!XeonTheCreator) return XeonStickOwner()
				await XeonBotInc.groupLeave(m.chat).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
			}
			break
			case 'blokir': case 'block': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await XeonBotInc.updateBlockStatus(numbersOnly, 'block').then((a) => replygcxeon(mess.done)).catch((err) => replygcxeon('Fail!'))
				}
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await XeonBotInc.updateBlockStatus(numbersOnly, 'unblock').then((a) => replygcxeon(mess.done)).catch((err) => replygcxeon('Fail!'))
				}
			}
			break
			case 'listpc': {
				if (!XeonTheCreator) return XeonStickOwner()
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				for (let i of anu) {
					let nama = store.messages[i].array[0].pushName
					teks += `${setv} *Name :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
				}
				XeonBotInc.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!XeonTheCreator) return XeonStickOwner()
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				for (let i of anu) {
					let metadata = await XeonBotInc.groupMetadata(i)
					teks += `${setv} *Name :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				XeonBotInc.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'creategc': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon(`Example:\n${prefix + command} *Gc Name*`)
				let group = await XeonBotInc.groupCreate(q, [m.sender])
				let res = await XeonBotInc.groupInviteCode(group.id)
				await XeonBotInc.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Group Name :* *${q}*`, detectLink: true }, { quoted: m });
				await XeonBotInc.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await XeonBotInc.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon(`Example:\n${prefix + command} @tag|time(s/m/h/d)`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await XeonBotInc.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return replygcxeon('This number is not registered on WhatsApp!')
				if (teks2) {
					prem.addPremiumUser(nmrnya, teks2, premium);
					replygcxeon(`Success ${command} @${nmrnya.split('@')[0]} During ${teks2}`)
					global.db.users[nmrnya].limit = global.db.users[nmrnya].vip ? global.limit.vip : global.limit.premium
					global.db.users[nmrnya].uang = global.db.users[nmrnya].vip ? global.uang.vip : global.uang.premium
				} else {
					replygcxeon(`Enter the time!\nExample: ${prefix + command} @tag|time`)
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!XeonTheCreator) return XeonStickOwner()
				if (!text) return replygcxeon(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (prem.checkPremiumUser(nmrnya, premium)) {
					premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
					replygcxeon(`Sukses ${command} @${nmrnya.split('@')[0]}`)
					global.db.users[nmrnya].limit = global.db.users[nmrnya].vip ? global.limit.vip : global.limit.free
					global.db.users[nmrnya].uang = global.db.users[nmrnya].vip ? global.uang.vip : global.uang.free
				} else {
					replygcxeon(`User @${nmrnya.split('@')[0]} Not Premium❗`)
				}
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!XeonTheCreator) return XeonStickOwner()
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Number*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${global.db.users[userprem.id].limit}\n➸ *Money*: ${global.db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				replygcxeon(txt)
			}
			break
			
			case 'owner': {
				let list = []
for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
                XeonBotInc.sendMessage(m.chat, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }, contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                }, {
                    quoted: m
                })
            }
            break
			case 'profile': case 'cekme': case 'cek': {
				const user = Object.keys(global.db.users)
				const infoUser = global.db.users[m.sender]
				const teks = `*Profile @${m.sender.split('@')[0]}* :\nUser Bot : ${user.includes(m.sender) ? 'True' : 'False'}\nUser : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\nLimit : ${infoUser.limit}\nMoney : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`
				await XeonBotInc.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'req': case 'request': {
				if (!text) return replygcxeon('What do you want to request from the owner??')
				await XeonBotInc.sendMessage(m.chat, { text: `*Request Has Been Sent To Owner*\n_Thank You🙏_` }, { quoted: m })
				await XeonBotInc.sendFromOwner(ownernumber, `Order From : @${m.sender.split('@')[0]}\nFor Owners\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'daily': case 'claim': {
				daily(XeonBotInc, m, global.db.users)
			}
			break
			case 'transferlimit': case 'tflimit': case 'tlimit': {
				transferLimit(XeonBotInc, m, args, global.db.users)
			}
			break
			case 'transfermoney': case 'tmoney': case 'transfer': {
				transferUang(XeonBotInc, m, args, global.db.users)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'tagme': {
				XeonBotInc.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
			
			case 'p': case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				replygcxeon(respon)
			}
			break
			case 'afk': {
				let user = global.db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				replygcxeon(`@${m.sender.split('@')[0]} Been Afk ${text ? ': ' + text : ''}`)
			}
			break
			case 'readviewonce': case 'readviewone': case 'rvo': {
				if (!m.quoted) return replygcxeon(`Reply view once message\nExample: ${prefix + command}`)
				if (m.quoted.msg.viewOnce) {
					m.quoted.msg.viewOnce = false
					await XeonBotInc.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
				} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
					m.quoted.msg.message.audioMessage.viewOnce = false
					m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
					await XeonBotInc.relayMessage(m.chat, m.quoted.msg.message, {})
				} else {
					replygcxeon(`Reply view once message\nExample: ${prefix + command}`)
				}
			}
			break
			// Downloader Menu
case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!text) return replygcxeon(`Example: ${prefix + command} youtube_url`)
				if (!text.includes('youtu')) return replygcxeon('The URL does not contain results from YouTube!')
				const hasil = await ytMp3(text);
				XeonStickWait()
				await XeonBotInc.sendMessage(m.chat, {
					audio: { url: hasil.result },
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: hasil.title,
							body: hasil.channel,
							previewType: 'PHOTO',
							thumbnailUrl: hasil.thumb,
							mediaType: 1,
							renderLargerThumbnail: true,
							sourceUrl: text
						}
					}
				}, { quoted: m });
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!text) return replygcxeon(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return replygcxeon('The link is not a youtube link!')
				const hasil = await ytMp4(text);
				XeonStickWait()
				await XeonBotInc.sendMessage(m.chat, { video: { url: hasil.result }, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
			}
			break
case 'mega':{
	try {
if (!text) return replygcxeon(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return replygcxeon('Error: File size is too large (Maximum Size: 300MB)');
        const downloadingMessage = `🌩️ Downloading file... Please wait.`;
        replygcxeon(downloadingMessage);
        const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await XeonBotInc.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return replygcxeon(`Error: ${error.message}`);
    }
}
break
			case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replygcxeon(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replygcxeon('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: te
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url:HD}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
await XeonBotInc.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  	replygcxeon(`Verify that the link is from Twitter`)
	}
}
break
			case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return replygcxeon(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygcxeon('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    XeonBotInc.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygcxeon('Maybe private video!')
  }
  }
  break
			case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygcxeon(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replygcxeon(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygcxeon(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: mediaURL}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
    } else if (mediaType === 'image') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: mediaURL}}, { upload: XeonBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          
       })
    }
  }
}, { quoted: m })
return await XeonBotInc.relayMessage(m.chat, msgs.message, {})
    }
  }
}
break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!text) return replygcxeon(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return replygcxeon('Url Tidak Mengandung Result Dari Tiktok!')
				const hasil = await tiktokDl(text);
				XeonStickWait()
				if (hasil.size_nowm) {
					await XeonBotInc.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
				} else {
					for (let i = 0; i < hasil.data.length; i++) {
						await XeonBotInc.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
					}
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!text) return replygcxeon(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return replygcxeon('Url Tidak Mengandung Result Dari Tiktok!')
				const hasil = await tiktokDl(text);
				XeonStickWait()
				await XeonBotInc.sendMessage(m.chat, {
					audio: { url: hasil.music_info.url },
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: 'TikTok • ' + hasil.author.nickname,
							body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
							previewType: 'PHOTO',
							thumbnailUrl: hasil.cover,
							mediaType: 1,
							renderLargerThumbnail: true,
							sourceUrl: text
						}
					}
				}, { quoted: m });
			}
			break
			
			
			case 'menu': case 'help': case 'alive': {
            const timestampe = speed()
            const latensie = speed() - timestampe
            const a = db.users[sender]
            const me = m.sender
			const xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *USER INFO* 」❍
├ *Name* : ${m.pushName ? m.pushName : 'No name'}
├ *Number* : +${me.split('@')[0]}
├ *Id* : @${m.sender.split('@')[0]}
├ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
├ *Limit* : ${isVip ? 'VIP' : global.db.users[m.sender].limit }
├ *Money* : ${global.db.users[m.sender] ? global.db.users[m.sender].uang.toLocaleString('en-IN') : '0'}
╰─┬────❍
╭─┴─❍「 *BOT INFO* 」❍
├ *Speed* : ${latensie.toFixed(4)} miliseconds
├ *Runtime* : ${runtime(process.uptime())}
├ *Host* : ${os.hostname()}
├ *Platform* : ${os.platform()}
├ *Bot Name* : ${global.botname}
├ *Owner* : @${ownernumber[0].split('@')[0]}
├ *Mode* : ${XeonBotInc.public ? 'Public' : 'Self'}
├ *Total User* : ${Object.keys(global.db.users).length} User
├ *Total Hit* : ${global.db.settings[botNumber].totalhit} Hit
├ *Total Chat* : ${Object.keys(global.db.groups).length} Chat/Gc
├ *Prefix* :「 ${xprefix} 」
╰─┬────❍
╭─┴─❍「 *TIME* 」❍
├ *Date* : ${xdate}
├ *Day* : ${xday}
├ *Time* : ${xtime}
╰─┬────❍
╭─┴❍「 *MENU* 」❍
│${setv} ${prefix}searchmenu
│${setv} ${prefix}toram
│${setv} ${prefix}downloadmenu
│${setv} ${prefix}groupmenu
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${botname}",
"rows":[
{"header":"TORAM MENU",
"title":"klik untuk menampilkan",
"description":"Menu Toram",
"id":"${prefix}TORAM"},
{"header":"Download Menu",
"title":"klik untuk menampilkan",
"description":"menu download",
"id":"${prefix}downloadmenu"},
{"header":"Owner Menu",
"title":"klik untuk menampilkan",
"description":"menu owner",
"id":"${prefix}ownermenu"},
{"header":"Group Menu",
"title":"Klik Untuk Menampilkan",
"description":"menu group",
"id":"${prefix}groupmenu"}
]
}]
}`
              },

              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'ownermenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Owner* 」❍
│${setv} ${prefix}setimgmenu 🅞
│${setv} ${prefix}setvidmenu 🅞
│${setv} ${prefix}setgifmenu 🅞
│${setv} ${prefix}setreply 🅞
│${setv} ${prefix}resethit 🅞
│${setv} ${prefix}resetuser 🅞
│${setv} ${prefix}creategc 🅞
│${setv} ${prefix}delppbot 🅞
│${setv} ${prefix}shutdown 🅞
│${setv} ${prefix}setppbot 🅞
│${setv} ${prefix}addprem 🅞
│${setv} ${prefix}delprem 🅞
│${setv} ${prefix}addowner 🅞
│${setv} ${prefix}delowner 🅞
│${setv} ${prefix}setprefix 🅞
│${setv} $ 🅞
│${setv} > 🅞
│${setv} < 🅞
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [

              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"MENU",
"title":"menu utama",
"id":"${prefix}allmenu"},
"rows":[{"header":"toram",
"title":"balik ke menu toram",
"id":"${prefix}allmenu"}]
}]
}`
              },

              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'groupmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Group* 」❍
│${setv} ${prefix}welcome 🅖
│${setv} ${prefix}adminevent 🅖
│${setv} ${prefix}antimedia 🅖
│${setv} ${prefix}antiaudio 🅖
│${setv} ${prefix}antivideo 🅖
│${setv} ${prefix}antiimage 🅖
│${setv} ${prefix}grouplink 🅖
│${setv} ${prefix}listadmin 🅖
│${setv} ${prefix}setppgroup 🅖
│${setv} ${prefix}delppgroup 🅖
│${setv} ${prefix}setnamegc 🅖
│${setv} ${prefix}setdesc 🅖
│${setv} ${prefix}add 🅖
│${setv} ${prefix}kick 🅖
│${setv} ${prefix}promote 🅖
│${setv} ${prefix}demote 🅖
│${setv} ${prefix}kickall 🅖
│${setv} ${prefix}promoteall 🅖
│${setv} ${prefix}demoteall 🅖
│${setv} ${prefix}hidetag 🅖
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [

              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
"name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"MENU",
"title":"buka menu utama",

"id":"${prefix}menu"}]
}]
}`
              },

              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
 case 'searchmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Search* 」❍
│${setv} ${prefix}google 🅕
│${setv} ${prefix}wikipedia 🅕
│${setv} ${prefix}ytsearch 🅕
│${setv} ${prefix}lyrics 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [

              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
"name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"MENU",
"title":"buka menu utama",

"id":"${prefix}menu"}]
}]
}`
              },

              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'downloadmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Download* 」❍
│${setv} ${prefix}play ??
│${setv} ${prefix}ytmp3 🅕
│${setv} ${prefix}ytmp4 🅕
│${setv} ${prefix}tiktok 🅕
│${setv} ${prefix}tiktokaudio 🅕
│${setv} ${prefix}tiktokvideo 🅕
│${setv} ${prefix}igvideo 🅕
│${setv} ${prefix}igimage 🅕
│${setv} ${prefix}facebook 🅕
│${setv} ${prefix}twitter 🅕
│${setv} ${prefix}mediafire 🅕
│${setv} ${prefix}google 🅕
│${setv} ${prefix}gimage 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [

              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
"name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"MENU",
"title":"buka menu utama",

"id":"${prefix}menu"}]
}]
}`
              },

              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'toram': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Tool Menu* 」❍
│${setv} ${prefix}lvling (lv) 🅕
│${setv} ${prefix}lbs (lv) 🅕
│${setv} ${prefix}slot 🅕
│${setv} ${prefix}bmq 🅕
│${setv} ${prefix}listpanah 🅕
│${setv} ${prefix}padu 🅕
│${setv} ${prefix}lpt 🅕
│${setv} ${prefix}aggro 🅕
│${setv} ${prefix}farm menu 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [

              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"menu",
"title":"balik ke menu",
"id":"${prefix}menu"},
"rows":[{"header":"farm menu",
"title":"farm menu",
"id":"${prefix}farmmenu"}]
}]
}`
              },

              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'animemenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi 👋*
├ *${m.pushName}* 
├ *${xeonytimewisher} 😄* 
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *🅞 = For Owner* 
├ *🅕 = For Free User*
├ *🅟 = For Premium User*
╰─┬────❍
╭─┴❍「 *Anime* 」❍
│${setv} ${prefix}stickhandhold 🅕
│${setv} ${prefix}traceanime 🅕
│${setv} ${prefix}neko 🅕
│${setv} ${prefix}loli 🅕
│${setv} ${prefix}anime 🅕
╰──────❍`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [

              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
"name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"MENU",
"title":"buka menu utama",

"id":"${prefix}menu"}]
}]
}`
              },

              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'farmmenu': {
let xmenu_oh = `
hallo kak 😀 mau farm yah nih aku kasih list tempat farmnya
${prefix}farm kain👕
${prefix}farm kayu?💊
${prefix}farm obat🗿
${prefix}farm fauna🐊
${prefix}farm mana🔮`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, { quoted: m })
                } else if (typemenu === 'v6') {
                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, { quoted: m })
                } else if (typemenu === 'v7') {
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: global.xchannel.jid,
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/Wppj16p/cheemspic.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [

              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          })
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 🔖","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: global.xchannel.jid,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, { quoted: m })
      
      await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"MENU",
"title":"click to display",

"id":"${prefix}allmenu"}]
}]
}`
              },

              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },

           ],
          }),
          
        })
    }
  }
}, { quoted: m })

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break


//toram menu
case 'hoki': {
        const hoki = getRandomHoki(); // Menghasilkan angka random
        const hokiMessage = `Hoki mu: ${hoki}% !`; // Pesan hoki

        // Mengirim pesan hoki ke pengguna
        m.reply(hokiMessage);
        break;
    }
    case 'pedo': {
        const pedoPercentage = getPedoPercentage(); // Menghasilkan angka random

        // Tentukan respon berdasarkan persentase
        let pedoMessage = '';
        if (pedoPercentage <= 25) {
            pedoMessage = `Persentase pedo ${pedoPercentage}% - Aman 👍`;
        } else if (pedoPercentage <= 60) {
            pedoMessage = `Persentase pedo ${pedoPercentage}% - Hati-hati ⚠️`;
        } else {
            pedoMessage = `Persentase pedo lu ${pedoPercentage}% - Pedo lu bajingan! Jauh-jauh! 😠`;
        }

        // Mengirim pesan pedo ke pengguna
        m.reply(pedoMessage);
        break;
    }
  case 'farm': {
        if (!body) return m.reply('Usage: farm [nama]');
        const name = body.split(' ')[1]; // Mengambil nama dari input
        const result = await showFarmData(name);
        m.reply(result);
        break;
    }
    case 'lvling': {
        if (!body) return m.reply('Usage: lvling [level]');
        const level = body.match(/\d+/)[0]; // Mengambil angka dari input
        const result = await showLevelingData(parseInt(level));
        m.reply(result);
        break;
    }
    case 'lbs': {
        if (!body) return m.reply('Usage: lbs [level]');
        const level = body.match(/\d+/)[0]; // Mengambil angka dari input
        const result = await showLbsData(parseInt(level));
        m.reply(result);
        break;
    }
    case 'padu':
        const levelingData = `
*🌟 List Leveling Pakar Padu 🌟*

➪ *𝗣𝗿𝗼𝗳 𝟭 - 𝟭𝟬*: Buat Revita I
➪ *𝗣𝗿𝗼𝗳 𝟭𝟬 - 𝟯𝟬*: Buat Revita II
➪ *𝗣𝗿𝗼𝗳 𝟯𝟭 - 𝟱𝟱*: Buat Revita III
➪ *𝗽𝗿𝗼𝗳 𝟱𝟲 - 𝟴𝟬*: Buat Revita IV
➪ *𝗽𝗿𝗼𝗳 𝟴𝟭 - 𝟭𝟬𝟱*: Buat Revita V
➪ *𝗽𝗿𝗼𝗳 𝟭𝟬𝟲 - 𝟭𝟯𝟱*: Buat Revita VI
➪ *𝗽𝗿𝗼𝗳 𝟭𝟯𝟲 - 𝟮𝟰𝟬*: Buat Orichalum
➪ *𝗽𝗿𝗼𝗳 𝟮𝟰𝟭 - 𝟯𝟮𝟬*: Buat HPO

*[List ini akan diperbarui sesuai dengan informasi terbaru tentang MQ]*
`;
        await XeonBotInc.sendMessage(m.chat, { text: levelingData }, { quoted: m });
        break;
  
    case 'bmq':
        const bmq = `
*Daftar bahan MQ*

1️⃣ *Sisik Naga* (Hard Dragon Skin)
   - Jumlah: 2pcs
2️⃣ *Daging Domba* (Lamb Meat)
   - Jumlah: 1pcs
3️⃣ *Sulur* (Vine)
   - Jumlah: 3pcs
4️⃣ *Paruh Tebal* (Thick Beak)
   - Jumlah: 3pcs
5️⃣ *Sayap Peri* (Fairy Feather)
   - Jumlah: 3pcs
6️⃣ *Koin Ksatria* (Swordsman Stone Coin)
   - Jumlah: 20pcs
7️⃣ *Kulit Kodok* (Sand Frog Skin)
   - Jumlah: 5pcs
8️⃣ *Cakar Binatang Buas* (Beast Claw)
   - Jumlah: 3pcs
9️⃣ *Daging Tikus Pasir* (Sand Mole Meat)
   - Jumlah: 1pcs
🔟 *Taring Bergerigi* (Jagged Fang)
    - Jumlah: 10pcs
1️⃣1️⃣ *Kristal Saham* (Saham Crystal)
    - Jumlah: 5pcs
1️⃣2️⃣ *Permata Jiwa* (Spiritual Gemstone)
    - Jumlah: 1pcs
1️⃣3️⃣ *Anggur Rokoko* (Rokoko Grape)
    - Jumlah: 5pcs
1️⃣4️⃣ *Kayu Labilans* (Labilans Woods)
    - Jumlah: 10pcs
1️⃣5️⃣ *Tanduk Patah* (Broken Horn)
    - Jumlah: 20pcs
1️⃣6️⃣ *Bijih Berkembang* (Growing Ore)
    - Jumlah: 5pcs
1️⃣7️⃣ *Batu Jabali* (Jabali Stone)
    - Jumlah: 5pcs
*[List bahan tersebut akan segera diupdate bila next MQ ada info terbaru]*
`;
        await XeonBotInc.sendMessage(m.chat, { text: bmq }, { quoted: m });
        break;
        
    case 'lpt':
        const levelingPet = `
*🌟 Tempat Leveling Pet 🌟*

1. *LVL 1-40* - Masked Norm
2. *LVL 40-46* - Masked Hard
3. *LVL 46-72* - Masked NM
4. *LVL 72-95* - Masked Ulti
5. *LVL 95-102* - Cerberus NM
6. *LVL 102-160* - Cerberus Ulti
7. *LVL 160-cap* - Venena Ulti

Silakan pilih tempat yang sesuai dengan level pet Anda!
`;
        await XeonBotInc.sendMessage(m.chat, { text: levelingPet }, { quoted: m });
        break;
    case 'slot':
        const slotData = `*Daftar Bahan MQ*

1️⃣ *Sisik Naga* (Hard Dragon Skin)
   - Jumlah: 2pcs
2️⃣ *Daging Domba* (Lamb Meat)
   - Jumlah: 1pcs
3️⃣ *Sulur* (Vine)
   - Jumlah: 3pcs
4️⃣ *Paruh Tebal* (Thick Beak)
   - Jumlah: 3pcs
5️⃣ *Sayap Peri* (Fairy Feather)
   - Jumlah: 3pcs
6️⃣ *Koin Ksatria* (Swordsman Stone Coin)
   - Jumlah: 20pcs
7️⃣ *Kulit Kodok* (Sand Frog Skin)
   - Jumlah: 5pcs
8️⃣ *Cakar Binatang Buas* (Beast Claw)
   - Jumlah: 3pcs
9️⃣ *Daging Tikus Pasir* (Sand Mole Meat)
   - Jumlah: 1pcs
🔟 *Taring Bergerigi* (Jagged Fang)
    - Jumlah: 10pcs
1️⃣1️⃣ *Kristal Saham* (Saham Crystal)
    - Jumlah: 5pcs
1️⃣2️⃣ *Permata Jiwa* (Spiritual Gemstone)
    - Jumlah: 1pcs
1️⃣3️⃣ *Anggur Rokoko* (Rokoko Grape)
    - Jumlah: 5pcs
1️⃣4️⃣ *Kayu Labilans* (Labilans Woods)
    - Jumlah: 10pcs
1️⃣5️⃣ *Tanduk Patah* (Broken Horn)
    - Jumlah: 20pcs
1️⃣6️⃣ *Bijih Berkembang* (Growing Ore)
    - Jumlah: 5pcs
1️⃣7️⃣ *Batu Jabali* (Jabali Stone)
    - Jumlah: 5pcs
*[List Bahan tersebut akan segera diupdate bila next MQ ada info terbaru]*`;
        await XeonBotInc.sendMessage(m.chat, { text: slotData }, { quoted: m });
        break;
    case 'aggro':
        const Aggro = `

*Aggro Toram Online* 📜

*Aggro* – Singkatan dari ‘aggravation’, tinggi rendahnya memengaruhi AI musuh untuk mengejar Anda. Menurut saya: Aggro adalah tingkat cintanya musuh kepada karakter Anda, jadi Anda akan diincar oleh musuh. Biasanya ada ikon panah dekat kaki karakter yang menunjukkan apakah Anda mendapatkan aggro atau diincar musuh atau tidak.

*Bagaimana cara menghitung aggro?*
- Setiap skill menghasilkan aggro sama dengan biaya MP-nya (MP Cost).
- Dengan hal itu, Anda dapat menetapkan APS (Aggro per Detik) untuk setiap kombo yang digunakan anggota DPS untuk menentukan jumlah aggro yang perlu dihasilkan untuk menjaga agar musuh tetap menargetkan Anda.
- Skill Tembak > Asap memiliki APS tertinggi, animasi skill hanya membutuhkan waktu 1 detik tetapi Aggro yang dihasilkan adalah 500 (500 MP).
- Setiap kali Anda memulai pertarungan dengan menyerang pertama, Anda akan mendapatkan basis 200 Aggro yang tidak berubah oleh status Aggro +%.
- Anda juga mendapatkan basis 200 Aggro setiap kali Anda mencuri Aggro dari anggota regu Anda.

*Status Aggro +%* pada perlengkapan Anda memiliki nilai minimum -100%, dalam hal ini ia tidak akan menghasilkan aggro, sementara nilai maksimumnya tidak diketahui.

*Catatan Penting:*
- Aggro tidak berpengaruh oleh tag combo, atau tetap terhitung walaupun Anda menggunakan tag combo contohnya save yang memiliki fungsi menampung MP skill.
- Aggro tidak terpengaruh oleh skill yang mengurangi biaya skill berikutnya contohnya Skill Sihir > Impak (Impach). Contoh: Impak (200 MP) > Finale (1600 MP). Aggro dihitung tetap dihitung dengan total 1800 MP tidak 1000 MP.

*Skill Khusus:*
1. *Skill Perisai > Guardian*
   - Aktif Skill (Tidak memberikan luka pada musuh)
   - MP Cost 400 | Dapat digunakan untuk semua senjata
   - Deskripsi: Memprofokasi lawan untuk menargetkanmu.
   - Penambahan Aggro: 500 + (50 x Level Skill)
   - Catatan:
     - Penambahan Aggro TIDAK ditambahkan di atas basis biaya MP.
     - Skill ini tidak memiliki aggro basis biaya MP.
     - Penambahan Aggro tidak terpengaruh oleh status Aggro +%.
     - Skill ini tidak bisa ditambahkan dalam kombo.
     - Aggro skill ini bisa disembunyikan atau dihilangkan oleh Skill Tembak > Tembakan Sembunyi (Sneak Attack).

2. *Skill Ksatria > Rage Sword*
   - Aktif Skill (Fisik) [Satu Target]
   - MP Cost 200 | Pedang 1 Tangan / Pedang 2 Tangan saja.
   - Deskripsi: Melancarkan serangan yang memicu permusuhan. Serangan khusus untuk mendapatkan Aggro banyak. Bila diincar, Critical Rate akan naik & MP Cost untuk skill yang dipakai berikutnya jadi setengah.
   - Penambahan Aggro: 50 + 10 x Level Skill
   - Catatan:
     - Penambahan Aggro juga ditambahkan basis Aggro Biaya MP. Jadi jika lv10, Aggro yang dihasilkan 200 + 150 = 350.
     - Status Aggro +% berefek pada Penambahan Aggro dan Basis Aggro Biaya MP.
`;
        await XeonBotInc.sendMessage(m.chat, { text: Aggro }, { quoted: m });
        break;
    case 'listpanah':
        const listPanah = `
🌟 Arrow Ele 🌟*

🔥*𝗙𝗶𝗿𝗲 (Api)*🔥
- Flame Arrow Craft: Zaldo
- Flame Arrow Drop: Sunion (Cermin Kegelapan/Dark Mirror)

💧*𝗔𝗶𝗿 (Air)*💧
- Ice Arrow Craft: Zaldo
- Quest Roh Peneliti (warna hijau v di halaman awal mula), Quest level 78

🌬*𝗔𝗻𝗴𝗶𝗻 (Angin)*🌬
- Break Sayap: Forestia
- Craft Zaldo Panah Topan

⛰️*B U M I* (Tanah)*⛰️
- Quest Bnut Zono
- Mob Rat Level 99 (Reruntuhan Singolare)

🌕*𝗖𝗮𝗵𝗮𝘆𝗮 (Cahaya)*🌕
- Quest Juan El Scaro Level 76
- Event White Day Craft

🌑*𝗚𝗲𝗹𝗮𝗽 (Gelap)*🌑
- Ivy (Kuil Naga Kegelapan)
`;
        await XeonBotInc.sendMessage(m.chat, { text: listPanah }, { quoted: m });
        break;
			default:
			if (budy.startsWith('>')) {
				if (!XeonTheCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await replygcxeon(evaled)
				} catch (err) {
					await replygcxeon(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!XeonTheCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await replygcxeon(evaled)
				} catch (err) {
					await replygcxeon(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!XeonTheCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return replygcxeon(`${err}`)
					if (stdout) return replygcxeon(stdout)
				})
			}
			if (m.message && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
		}
	} catch (err) {
		console.log(util.format(err))
        let e = String(err)
XeonBotInc.sendMessage("6285864562024@s.whatsapp.net", { text: "🌹 Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
