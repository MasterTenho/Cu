process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

/*
	* Create By sych
	* Follow https://github.com/sychdev
	* Whatsapp : https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e
*/

require('./settings');
const sharp = require('sharp');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const gis = require('g-i-s');
const Jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { JSDOM } = require('jsdom');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const { Akinator, AkinatorAnswer } = require('aki-api');
const { exec, spawn, execSync } = require('child_process');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, MessageType, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const prem = require('./src/premium');
const { LoadDataBase } = require('./src/message');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addUang, setUang, transfer } = require('./lib/game');
const { pinterest, pinterest2, wallpaper, remini, wikimedia, quotesAnime, multiDownload, yanzGpt, happymod, umma, ringtone, jadwalsholat, styletext, tiktokDl, facebookDl, instaStory, bk9Ai, ytMp4, ytMp3, mediafireDl, quotedLyo, simi } = require('./lib/screaper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, getAllHTML } = require('./lib/function');

// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let akinator = db.game.akinator = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakepep = db.game.tebakepep = []
let tebakbendera = db.game.tebakbendera = []
let autoAi = false; // Default mati

let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗮𝘁𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 シ︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   

module.exports = sych = async (sych, m, chatUpdate, store) => {
	try {
    await LoadDataBase(sych, m);
		const content = JSON.stringify(m.message);
const type = Object.keys(m.message)[0]
let _chats =
      type === "conversation" && m.message.conversation
        ? m.message.conversation
        : type == "imageMessage" && m.message.imageMessage.caption
        ? m.message.imageMessage.caption
        : type == "videoMessage" && m.message.videoMessage.caption
        ? m.message.videoMessage.caption
        : type == "extendedTextMessage" && m.message.extendedTextMessage.text
        ? m.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && m.message[type].selectedButtonId
        ? m.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(m.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(m.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(m.message[type].fileSha256.toString("base64"))
        : "";
        const cmd = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		const botNumber = await sych.decodeJid(sych.user.id)
		const from = m.key.remoteJid;
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
   const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(cmd) ? cmd.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => cmd.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(cmd) ? cmd.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => cmd.startsWith(a)) || '¿') : listprefix.find(a => cmd.startsWith(a)) || '¿'
		const body = (type === 'listResponseMessage' && m.message.listResponseMessage.title) ? m.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && m.message.conversation.startsWith(prefix)) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption.startsWith(prefix) ? m.message.imageMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption.startsWith(prefix) ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text.startsWith(prefix) ? m.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budy = (typeof m.text == 'string' ? m.text : '')
		
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = args.join(' ')
		const q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const setv = pickRandom(listv)
		const readmore = String.fromCharCode(8206).repeat(999)
		
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
		const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage");
		const extendedText = MessageType;
		// Fake
		const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? sych.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : sych.sendMessage(from, teks.trim(), extendedText, {
            quoted: m,
            contextInfo: { mentionedJid: memberr },
          });
    };
		const fkontak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: 'sych'
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})
		
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber]
			if (new Date() * 1 - setbio.status > 60000) {
				await sych.updateProfileStatus(`${sych.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`)
				setbio.status = new Date() * 1
			}
		}
		
		// Set Public
	if (!sych.public) {
    console.log("Bot dalam mode self");
    if (!isCreator && !m.key.fromMe) {
        console.log("Pesan ditolak: bukan kreator atau pemilik bot");
        return;
    }
}
		
		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			if (db.set[botNumber].autoread && sych.public) sych.readMessages([m.key]);
		}
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }}} : { [chats.type]: chats.msg }
					await sych.relayMessage(m.chat, pesan, {})
				}
			}
			
			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					const isGcLink = new RegExp(`https://chat.whatsapp.com/${await sych.groupInviteCode(m.chat)}`, 'i').test(m.text);
					if (isGcLink) return
					await sych.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await sych.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Link❗*'}, ...m.key }}}, {})
				}
			}
			
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 6000) {
					await sych.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await sych.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Virtex❗*'}, ...m.key }}}, {})
					await sych.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
					await sych.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await sych.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Bug❗*'}, ...m.key }}}, {})
					await sych.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
		}
		
		// Filter Bot
		if (m.isBot) return
		
		// Mengetik
		if (db.set[botNumber].autotyping && sych.public && isCmd) {
			await sych.sendPresenceUpdate('composing', m.chat)
		}
		
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam','Wa\'alaikumusalam wr wb','Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			m.reply(pickRandom(jwb_salam))
		}
		
		// Cek Expired
		prem.expiredCheck(sych, premium);
		
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
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
				db.users[m.sender].limit += 3
				db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await sych.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await sych.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`)
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) sych.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				if (!roof.pilih2) sych.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						m.reply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
					}
					delete suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
				if (!roof.pilih2) sych.sendMessage(roof.p2, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) sych.sendMessage(roof.p, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
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
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				sych.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete suit[roof.id]
			}
		}
		
		// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				sych.sendMessage(m.chat, { react: {text: '❌', key: m.key }})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					sych.sendMessage(m.chat, { react: { text: '😂', key: m.key }})
					delete tebakbom[m.sender];
				} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		
		// Akinator
		if (m.sender in akinator) {
			if (m.quoted && akinator[m.sender].key == m.quoted.id) {
				if (budy == '5') {
					akinator[m.sender].isWin = false
					await akinator[m.sender].cancelAnswer()
					let { key } = await m.reply(`🎮 Akinator Game Back :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
					akinator[m.sender].key = key.id
				} else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
					sych.sendMessage(m.chat, { react: { text: '🎊', key: m.key }})
					delete akinator[m.sender]
				} else {
					if (!isNaN(budy)) {
						if (akinator[m.sender].isWin) {
							let { key } = await sych.sendMessage(m.chat, { image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }}, { quoted: m })
							akinator[m.sender].key = key.id
						} else {
							await akinator[m.sender].answer(budy)
							if (akinator[m.sender].isWin) {
								let { key } = await sych.sendMessage(m.chat, { image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }}, { quoted: m })
								akinator[m.sender].key = key.id
							} else {
								let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
								akinator[m.sender].key = key.id
							}
						}
					}
				}
			}
		}
		
		// Game
		const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebaknegara, tebakgambar, tebakepep, tebakbendera }
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if (m.quoted && id == m.quoted.id) {
				if (gameName == 'kuismath') {
					jawaban = game[m.chat + id].jawaban
					const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
					let randMoney = difficultyMap[kuismath[m.chat + id].mode]
					if (!isNaN(budy)) {
						if (budy.toLowerCase() == jawaban) {
							db.users[m.sender].uang += randMoney * 1000
							await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${randMoney * 1000}*`)
							delete kuismath[m.chat + id]
						} else m.reply('*Jawaban Salah!*')
					}
				} else {
					jawaban = game[m.chat + id].jawaban
					let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
					let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
					if (jawabBenar) {
						db.users[m.sender].uang += bonus * 1
						await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`)
						delete game[m.chat + id]
					} else m.reply('*Jawaban Salah!*')
				}
			}
		}
		
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				m.reply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		
		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await sych.relayMessage(menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		
		switch(command) {
			// Tempat Add Case
			case '19rujxl1e': {
				console.log('.')
			}
			break
			
			// Owner Menu
			case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Mana text nya?')
				sych.setStatus(q)
				m.reply(`*Bio telah di ganti menjadi ${q}*`)
			}
			break
			   case "addcmd":
      case "setcmd":
      	if (!isCreator) return m.reply(mess.owner)
        if (isQuotedSticker) {
          if (!q)
            return m.reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          m.reply("Done!");
          await sych.sendMessage(m.chat, {
            react: {
                text: '🔐', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
        } else {
          m.reply("tag stickenya");
        }
        break;
        case "delcmd":
        	if (!isCreator) return m.reply(mess.owner)
        if (!isQuotedSticker)
          return m.reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        m.reply("Done!");
        await sych.sendMessage(m.chat, {
            react: {
                text: '🚫', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
        break;
        case "listcmd":
        	if (!isCreator) return m.reply(mess.owner)
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        m.reply(teksnyee, cemde, true);
        break;
			case 'setppbot': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await sych.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await sych.query({
						tag: 'iq',
						attrs: {
							to: botNumber,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await sych.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delppbot': {
				if (!isCreator) return m.reply(mess.owner)
				await sych.removeProfilePicture(sych.user.id)
				m.reply('Sukses')
			}
			break
			case 'join': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Link Group!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				m.reply(mess.wait)
				await sych.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (res.data == 409) return m.reply('Bot Sudah Join Di Grup Tersebut❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (res.data == 500) return m.reply('Grup Penuh❗');
				})
			}
			break
			case 'leave': {
				if (!isCreator) return m.reply(mess.owner)
				await sych.groupLeave(m.chat).then(() => sych.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, { contextInfo: { isForwarded: true }}))
			}
			break
			case 'blokir': case 'block': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await sych.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'listblock': {
				let anu = await sych.fetchBlocklist()
				m.reply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await sych.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'adduang': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 1000`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await sych.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].uang) {
					addUang(args[1], nmrnya, db)
					m.reply('Sukses Add Uang')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'addlimit': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await sych.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					addLimit(args[1], nmrnya, db)
					m.reply('Sukses Add limit')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'listpc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
						let nama = store.messages[i].array[0].pushName
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				await sych.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					let metadata = store.groupMetadata[i] || await sych.groupMetadata(i)
					teks += `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				await sych.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'creategc': case 'buatgc': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} *Nama Gc*`)
				let group = await sych.groupCreate(q, [m.sender])
				let res = await sych.groupInviteCode(group.id)
				await sych.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`, detectLink: true }, { quoted: m });
				await sych.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await sych.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await sych.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (teks2) {
					if (db.users[nmrnya] && db.users[nmrnya].limit) {
						prem.addPremiumUser(nmrnya, teks2.replace(/[^0-9]/g, '') + 'd', premium);
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium
					} else m.reply('Nomer tidak terdaftar di BOT !')
				} else {
					m.reply(`Masukkan waktunya!\Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					if (prem.checkPremiumUser(nmrnya, premium)) {
						premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
						fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free
					} else {
						m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`)
					}
				} else m.reply('Nomer tidak terdaftar di BOT !')
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!isCreator) return m.reply(mess.owner)
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Uang*: ${db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				m.reply(txt)
			}
			break
			case 'upsw': {
				if (!isCreator) return m.reply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				if (quoted.isMedia) {
					if (/image|video/.test(quoted.mime)) {
						await sych.sendMessage('status@broadcast', {
							[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
							caption: text || m.quoted?.body || ''
						}, { statusJidList })
						sych.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
					} else if (/audio/.test(quoted.mime)) {
						await sych.sendMessage('status@broadcast', {
							audio: await quoted.download(),
							mimetype: 'audio/mp4',
							ptt: true
						}, { backgroundColor, statusJidList })
						sych.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
					} else m.reply('Only Support video/audio/image/text')
				} else if (quoted.text) {
					await sych.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
						textArgb: 0xffffffff,
						font: Math.floor(Math.random() * 9),
						backgroundColor, statusJidList
					})
					sych.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
				} else m.reply('Only Support video/audio/image/text')
			}
			break
			case 'addcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !text.startsWith('case')) return m.reply('Masukkan Casenya!')
				fs.readFile('naze.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisi = data.indexOf("case '19rujxl1e':");
					if (posisi !== -1) {
						const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
						fs.writeFile('naze.js', codeBaru, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file: ', err);
							} else {
								m.reply('Case berhasil ditambahkan');
							}
						});
					} else {
						m.reply('Gagal Menambahkan case!');
					}
				});
			}
			break
			case 'getcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				try {
					const getCase = (cases) => {
						return "case"+`'${cases}'`+fs.readFileSync("naze.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
					}
					m.reply(`${getCase(text)}`)
				} catch (e) {
					m.reply(`case ${text} tidak ditemukan!`)
				}
			}
			break
			case 'delcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				fs.readFile('naze.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('naze.js', modifiedData, 'utf8', (err) => {
						if (err) {
							m.reply('Terjadi kesalahan saat menulis file: ', err);
						} else {
							m.reply('Case berhasil dihapus dari file');
						}
					});
				});
			}
			break
			case 'getsession': {
				if (!isCreator) return m.reply(mess.owner)
				await sych.sendMessage(m.chat, {
					document: fs.readFileSync('./nazedev/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, { quoted: m });
			}
			break
			case 'deletesession': case 'delsession': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./nazedev', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));					
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./nazedev/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah Session', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'deletesampah': case 'delsampah': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./database/sampah', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['gif', 'png', 'bin','mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./database/sampah/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'sc': case 'script': case 'esce': {
				await sych.sendMessage(m.chat, {
					text: `https://github.com/sychyy/sychee\n⬆️ Itu Sc nya cuy`,
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'SYCHEE🌱'
						},
						externalAdReply: {
							title: author,
							body: 'Subscribe My YouTube',
							thumbnail: fake.thumbnail,
							mediaType: 2,
							mediaUrl: my.yt,
							sourceUrl: my.yt,
						}
					}
				}, { quoted: m })
				await sych.sendMessage(m.chat, {
            react: {
                text: '🔗', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
			}
			break
			case 'donasi': case 'donate': {
				m.reply('Donasi Dapat Melalui Url Dibawah Ini :\nhttps://saweria.co/sych')
			}
			break
			
			// Group Menu
			case 'add': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
							for (let i of res) {
								let invv = await sych.groupInviteCode(m.chat)
								if (i.status == 408) return m.reply('Dia Baru-Baru Saja Keluar Dari Grub Ini!')
								if (i.status == 401) return m.reply('Dia Memblokir Bot!')
								if (i.status == 409) return m.reply('Dia Sudah Join!')
								if (i.status == 500) return m.reply('Grub Penuh!')
								if (i.status == 403) {
									await sych.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, mentions: [numbersOnly] }, { quoted : m })
									await sych.sendMessage(`${numbersOnly ? numbersOnly : '6282113821188@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, detectLink: true, mentions: [numbersOnly, m.sender] }, { quoted : fkontak }).catch((err) => m.reply('Gagal Mengirim Undangan!'))
								} else if (i.status !== 200) {
									m.reply('Gagal Add User')
								}
							}
						})
					} catch (e) {
						m.reply('Terjadi Kesalahan! Gagal Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await sych.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await sych.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'setppgroups': case 'setppgrup': case 'setppgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply('Reply Gambar yang mau dipasang di Profile Bot')
				if (!/image/.test(mime) && /webp/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await sych.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await sych.query({
						tag: 'iq',
						attrs: {
							to: m.chat,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await sych.updateProfilePicture(m.chat, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di delete')
				await sych.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let response = await sych.groupInviteCode(m.chat)
				await sych.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await sych.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
			}
			break
			case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await sych.groupRevokeInvite(m.chat).then((a) => {
					m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`)
				}).catch((err) => m.reply('Gagal!'))
			}
			break
			case 'group': case 'grup': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let teks = text.split(' ')
				let set = db.groups[m.chat]
				switch (teks[0]) {
					case 'close': case 'open':
					await sych.groupSettingUpdate(m.chat, teks[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*Sukses ${teks[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`))
					break
					case 'antilink': case 'antivirtex': case 'antidelete': case 'welcome': case 'mute': case 'antitoxic': case 'waktusholat': case 'nsfw':
					if (teks[1] == 'on' || teks[1] == 'true') {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[teks[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (teks[1] == 'off' || teks[1] == 'false') {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*')
					} else {
						m.reply(`❗${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
					}
					break
					default:
					m.reply(`${m.metadata.subject}\n- Mute : ${set.mute ? '✅' : '❌'}\n- Anti Link : ${set.antilink ? '✅' : '❌'}\n- Anti Virtex : ${set.antivirtex ? '✅' : '❌'}\n- Anti Delete : ${set.antidelete ? '✅' : '❌'}\n- Welcome : ${set.welcome ? '✅' : '❌'}\n\nExample:\n${prefix + command} antilink off`)
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await sych.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				sych.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'totag': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
				delete m.quoted.chat
				await sych.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await sych.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => m.reply('Gagal'))
			}
			break
			
			// Bot Menu
			case 'owner': {
    await sych.sendContact(m.chat, own, m);
    await sych.sendMessage(m.chat, {
            react: {
                text: '👤', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
}
break;
			case 'profile': case 'cek': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`)
			}
			break
			case 'leaderboard': {
				const entries = Object.entries(db.users).sort((a, b) => b[1].uang - a[1].uang).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──❍「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].uang.toLocaleString('id-ID')}\n│\n`
				}
				m.reply(teksnya + '╰──────❍');
			}
			break
			case 'req': case 'request': {
				if (!text) return m.reply('Mau Request apa ke Owner?')
				await sych.sendMessage(m.chat, { text: `*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_` }, { quoted: m })
				await sych.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'totalfitur': {
				const total = ((fs.readFileSync('./naze.js').toString()).match(/case '/g) || []).length
				m.reply(`Total Fitur : ${total}`);
			}
			break
			case 'daily': case 'claim': {
				daily(m, db)
				await sych.sendMessage(m.chat, {
                        react: {
                            text: '🎉', // Emoji yang diinginkan
                            key: m.key // Memberikan reaksi pada pesan perintah
                        }
                    });
			}
			break
			case 'transfer': case 'tf': {
				transfer(m, args, db)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				sych.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tagme': {
				sych.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
			case 'runtime': case 'tes': case 'bot': {
				let teks = text.split(' ')
				let set = db.set[botNumber]
				switch(teks[0]) {
					case 'mode':
        if (!teks[1]) {
            return m.reply('Gunakan perintah: mode self/public');
        }

        if (teks[1].toLowerCase() === 'public') {
            if (sych.public) {
                return m.reply('*Mode public sudah aktif sebelumnya.*');
            }
            sych.public = true;
            console.log("Mode diubah ke public");
            return m.reply('*Sukses mengubah mode ke Public Usage.*');

        } else if (teks[1].toLowerCase() === 'self') {
            if (!sych.public) {
                return m.reply('*Mode self sudah aktif sebelumnya.*');
            }
            sych.public = false;
            console.log("Mode diubah ke self");
            return m.reply('*Sukses mengubah mode ke Self Usage.*');

        } else {
            return m.reply('Gunakan perintah: mode self/public');
        }
        break;
					case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix':
					if (teks[1] == 'on') {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[teks[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (teks[1] == 'off') {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*')
					} else {
						m.reply(`${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
					}
					break
					case 'set': case 'settings':
					let settingsBot = Object.entries(set).map(([key, value]) => {
						let list = key == 'status' ? new Date(value).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
					}).join('\n');
					m.reply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}`);
					break
					default:
					if (teks[0] || teks[1]) m.reply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- autoAi : *${prefix} autoai on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*`)
				}
				if (!teks[0] && !teks[1]) return sych.sendMessage(m.chat, { text: `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*` }, { quoted: m })
			}
			break
			case 'ping': case 'botstatus': case 'statusbot': {
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
				await sych.sendMessage(m.chat, {
            react: {
                text: '💻', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(respon)
			}
			break
			case 'speedtest': case 'speed': {
				m.reply('Testing Speed...')
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py --share')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) m.reply(stdout)
					if (stderr.trim()) m.reply(stderr)
				}
			}
			break
			case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`)
			}
			break
			case 'readviewonce': case 'readviewone': case 'rvo': {
				if (!m.quoted) return m.reply(`Reply view once message\nExample: ${prefix + command}`)
				try {
					if (m.quoted.msg.viewOnce) {
						m.quoted.msg.viewOnce = false
						await sych.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
					} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
						m.quoted.msg.message.audioMessage.viewOnce = false
						m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
						await sych.relayMessage(m.chat, m.quoted.msg.message, {})
					} else {
						m.reply(`Reply view once message\nExample: ${prefix + command}`)
					}
				} catch (e) {
					m.reply('Media Tidak Valid!')
				}
			}
			break
			case 'inspect': {
				if (!text) return m.reply('Masukkan Link Group!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return m.reply('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await sych.groupGetInviteInfo(code).then(anu => {
					let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu
					let par = `*Nama Gc* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Jumlah Member* : ${size}\n*Gc Dibuat Tanggal* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*Nama GC Diubah Oleh* : @${subjectOwner.split('@')[0]}` : '*Nama GC Diubah Oleh* : -'}\n${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					sych.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
				});
			}
			break
			case 'addmsg': {
				if (!m.quoted) return m.reply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return m.reply(`Example : ${prefix + command} file name`)
				let msgs = db.database
				if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`)
			}
			break
			case 'delmsg': case 'deletemsg': {
				if (!text) return m.reply('Nama msg yg mau di delete?')
				let msgs = db.database
				if (text == 'allmsg') {
					db.database = {}
					m.reply('Berhasil menghapus seluruh msg dari list pesan')
				} else {
					if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
					delete msgs[text.toLowerCase()]
					m.reply(`Berhasil menghapus '${text}' dari list pesan`)
				}
			}
			break
			case 'getmsg': {
				if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
				let msgs = db.database
				if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`)
				await sych.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) }})
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
				}
				m.reply(teks)
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				const anu = await m.getQuotedObj()
				if (!anu) return m.reply('Format Tidak Tersedia!')
				if (!anu.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
				await sych.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (m.isGroup) return m.reply(mess.private)
				if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return m.reply(`Example : ${prefix + command} 62xxxx|Nama Samaran`)
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await sych.onWhatsApp(tujuan)
					if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang',
						waktu: setTimeout(() => {
							if (menfes[m.sender]) m.reply(`_Waktu ${command} habis_`)
							delete menfes[m.sender];
						}, 600000)
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
						waktu: setTimeout(() => {
							if (menfes[tujuan]) sych.sendMessage(tujuan, { text: `_Waktu ${command} habis_` });
							delete menfes[tujuan];
						}, 600000)
					};
					sych.sendMessage(tujuan, { text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_` });
					m.reply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`)
				} else {
					m.reply(`Masukkan Nomernya!\nExample : ${prefix + command} 62xxxx|Nama Samaran`)
				}
			}
			break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				let anu = menfes[m.sender]
				sych.sendMessage(anu.tujuan, { text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}` })
				m.reply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
			break
			
			// Tools Menu
			case 'fetch': case 'get': {
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|html|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else {
						m.reply(util.format(res.data))
					}
				} catch (e) {
					m.reply(util.format(e))
				}
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await sych.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await sych.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Sych Bot.mp3`}, { quoted : m })
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await sych.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await sych.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					sych.sendMessage(m.chat, { video: buffer, gifPlayback: true }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage': case 'toimg': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await sych.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					sych.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const msg = await generateWAMessageContent({ video: anu }, { upload: sych.waUploadToServer })
					await sych.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
				try {
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						m.reply('Url : ' + anu.url)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
			break
			case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				sych.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'translate': case 'tr': {
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					m.reply(list_tr)
				} else {
					if (!m.quoted && (!text|| !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						m.reply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'toqr': case 'qr': {
				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				m.reply(mess.wait)
				await sych.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Nih Bro' }, { quoted: m })
			}
			break
			case 'tohd': case 'remini': case 'hd': {
				if (/image/.test(mime)) {
					let media = await quoted.download()
					remini(media, 'enhance').then(a => {
						sych.sendMessage(m.chat, { image: a, caption: 'Done' }, { quoted: m });
					}).catch(e => m.reply('Server sedang offline!'));
				} else {
					m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
				}
			}
			break
			case 'shutdown': {
    if (!isCreator) {
        return m.reply('Hanya pemilik bot yang dapat mengeksekusi perintah ini.');
    }
    await sych.sendMessage(m.chat, { text: 'Bot sedang dimatikan...'}, { quoted: m });
    process.exit();  // Menghentikan bot
}
break;
			case 'ssweb': {
				if (!text) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/naze-md`)
				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await sych.sendMessage(m.chat, { image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'Done' }, { quoted: m })
				} catch (e) {
					m.reply('Server SS web Sedang Offline!')
				}
			}
			break
			case 'readmore': {
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				m.reply(teks1 + readmore + teks2)
			}
			break
			case 'getexif': {
				if (!m.quoted) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`)
				if (!/sticker|webp/.test(quoted.type)) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`)
				const img = new webp.Image()
				await img.load(await m.quoted.download())
				m.reply(util.format(JSON.parse(img.exif.slice(22).toString())))
			}
			break
			case 'cuaca': case 'weather': {
				if (!text) return m.reply(`Example: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					m.reply('Kota Tidak Di Temukan!')
				}
			}
			break
			

case 'sticker': case 'colong': case 's': {
    try {
        console.log('Memulai proses konversi ke stiker...');
        
        if (!/image|webp/.test(mime)) {
            console.log('Mime tipe tidak valid, harus image atau webp.');
            return m.reply(`Kirim/reply image/sticker untuk mengonversi ke stiker.`);
        }

        let media = await quoted.download();  // Unduh gambar/sticker yang direply
        console.log('Gambar/sticker berhasil diunduh.');

        // Memberikan reaksi pada pesan pengguna
        await sych.sendMessage(m.chat, {
            react: {
                text: '💟', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
        console.log('Reaksi berhasil diberikan pada pesan.');

        // Menggunakan sharp untuk memproses gambar
        sharp(media)
            .resize(512, 512)  // Menyesuaikan ukuran gambar (stiker WhatsApp harus berukuran 512x512 px)
            .webp()  // Mengonversi gambar ke format WebP, format yang diterima WhatsApp
            .toBuffer()  // Menghasilkan buffer dari gambar
            .then(async (buffer) => {
                console.log('Gambar berhasil diproses menjadi format WebP.');
                
                // Kirim buffer gambar sebagai stiker
                await sych.sendAsSticker(m.chat, buffer, m, { packname: 'ydz', author: 'SychyBOTz' });
                console.log('Stiker berhasil dikirim.');
            })
            .catch((err) => {
                console.error('Terjadi kesalahan saat memproses gambar:', err);
                m.reply('Terjadi kesalahan saat mengonversi gambar ke stiker!');
            });
    } catch (e) {
        console.error('Terjadi kesalahan saat memproses gambar:', e);
        m.reply('Terjadi kesalahan saat memproses gambar!');
    }
}
break;
			
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
    try {
        console.log('Memulai proses pembuatan stiker meme...');
        
        if (!isPremium) {
            console.log('Pengguna bukan premium.');
            return m.reply(mess.prem);
        }

        let mime = (quoted.msg || m.msg).mimetype || '';
        if (!/image|webp/.test(mime)) {
            console.log('Mime tipe tidak valid, harus image atau webp.');
            return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`);
        }

        if (!text) {
            console.log('Teks caption tidak ditemukan.');
            return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`);
        }

        m.reply(mess.wait);
        console.log('Menunggu proses meme...');

        let [atas, bawah] = text.split('|');
        atas = atas ? atas.trim() : '-';
        bawah = bawah ? bawah.trim() : '-';
        console.log(`Teks atas: ${atas}, Teks bawah: ${bawah}`);

        let quotedMedia = m.quoted ? m.quoted : m;
        let media = await quotedMedia.download();
        console.log('Gambar/sticker berhasil diunduh.');

        let uploadResponse = await UguuSe(media); // Pastikan fungsi UguuSe berfungsi
        let mediaUrl = uploadResponse.url;
        console.log('Gambar berhasil diunggah ke UguuSe, URL:', mediaUrl);

        // Buat URL meme
        let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${encodeURIComponent(mediaUrl)}`;
        console.log('URL meme berhasil dibuat:', memeUrl);

        // Unduh file dari URL meme
        let response = await fetch(memeUrl);
        if (!response.ok) {
            console.log('Gagal mengunduh gambar meme.');
            throw new Error('Gagal mengunduh gambar meme.');
        }
        let buffer = await response.buffer();
        console.log('Meme berhasil diunduh.');

        // Konversi ke stiker menggunakan sharp atau library lain
        let webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain' })
            .webp()
            .toBuffer();
        console.log('Meme berhasil dikonversi ke format WebP.');

        // Kirim stiker
        await sych.sendAsSticker(m.chat, webpBuffer, m, { packname: packname, author: author });
        console.log('Stiker meme berhasil dikirim.');

        // Memberikan reaksi pada pesan pengguna
        await sych.sendMessage(m.chat, {
            react: {
                text: '💭', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
        console.log('Reaksi berhasil diberikan pada pesan.');
    } catch (e) {
        console.error('Terjadi kesalahan:', e);
        m.reply('Terjadi kesalahan saat membuat stiker meme!');
    }
}
break;
case 'emojimix': {
    if (!text) {
        console.log("Input kosong!");
        return m.reply(`Example: ${prefix + command} 😅+🤔`);
    }

    let [emoji1, emoji2] = text.split`+`;
    if (!emoji1 || !emoji2) {
        console.log("Emoji tidak valid atau tidak dipisahkan dengan '+'.");
        return m.reply(`Example: ${prefix + command} 😅+🤔`);
    }

    console.log(`Emoji1: ${emoji1}, Emoji2: ${emoji2}`);

    try {
        console.log("Mengirim permintaan ke API...");
        let response = await axios.get(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`
        );

        console.log("Respons dari API diterima:", response.data);

        let results = response.data.results;
        if (results.length < 1) {
            console.log("Hasil emoji mix tidak ditemukan.");
            return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`);
        }

        console.log(`Jumlah hasil ditemukan: ${results.length}`);
        for (let res of results) {
            let stickerUrl = res.media_formats.png_transparent.url;
            console.log(`URL Sticker: ${stickerUrl}`);

            // Buat folder temp jika belum ada
            const tempDir = path.resolve(__dirname, 'temp');
            if (!fs.existsSync(tempDir)) {
                console.log("Membuat folder temp...");
                fs.mkdirSync(tempDir, { recursive: true });
            }

            // Unduh file ke folder sementara
            const filePath = path.join(tempDir, `sticker_${Date.now()}.png`);
            const writer = fs.createWriteStream(filePath);
            const download = await axios({
                url: stickerUrl,
                method: 'GET',
                responseType: 'arraybuffer',
            });

            const buffer = Buffer.from(download.data);

            // Konversi gambar menjadi WebP menggunakan sharp
            const filePathWebP = path.join(tempDir, `sticker_${Date.now()}.webp`);
            await sharp(buffer).webp().toFile(filePathWebP);

            console.log(`File dikonversi ke: ${filePathWebP}`);

            // Kirim sebagai sticker
            await sych.sendAsSticker(m.chat, filePathWebP, m, { packname: packname, author: author });
            console.log("Sticker berhasil dikirim.");

            // Hapus file setelah selesai
            fs.unlinkSync(filePathWebP);
        }
    } catch (e) {
        console.error("Terjadi kesalahan:", e);
        m.reply('Gagal Mix Emoji!');
    }
}
break;

			case 'qc': case 'quote': case 'fakechat': {
				if (!text && !m.quoted) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					let ppnya = await sych.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
					let res = await quotedLyo(text, m.pushName, ppnya);
					await sych.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, { packname: packname, author: author })
				} catch (e) {
					m.reply('Server Create Sedang Offline!')
				}
			}
			break
			case 'brat': {
    if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`*${prefix + command}* Teksnya`);
    try {
        // Log langkah pertama
        console.log('Mengambil gambar dari API pertama...');
        const response = await fetch('https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(text || m.quoted.text));
        if (!response.ok) throw new Error('API pertama gagal merespons');
        const buffer = await response.buffer();

        console.log('Gambar berhasil diambil dari API pertama, mulai konversi...');
        const outputPath = './temp_sticker.webp';
        await sharp(buffer)
            .resize(512, 512, { fit: 'contain' })
            .webp({ quality: 100 })
            .toFile(outputPath);

        console.log('Konversi ke WebP selesai, mengirim stiker...');
        await sych.sendMessage(
            m.chat,
            { sticker: { url: outputPath } },
            { quoted: m }
        );

        console.log('Stiker berhasil dikirim, menghapus file sementara...');
        fs.unlinkSync(outputPath);
    } catch (e) {
        console.error('Error pada API pertama:', e.message);
        try {
            // Log langkah kedua
            console.log('Mengambil gambar dari API kedua...');
            const response = await fetch('https://mannoffc-x.hf.space/brat?q=' + encodeURIComponent(text || m.quoted.text));
            if (!response.ok) throw new Error('API kedua gagal merespons');
            const buffer = await response.buffer();

            console.log('Gambar berhasil diambil dari API kedua, mulai konversi...');
            const outputPath = './temp_sticker.webp';
            await sharp(buffer)
                .resize(512, 512, { fit: 'contain' })
                .webp({ quality: 100 })
                .toFile(outputPath);

            console.log('Konversi ke WebP selesai, mengirim stiker...');
            await sych.sendMessage(
                m.chat,
                { sticker: { url: outputPath } },
                { quoted: m }
            );

            console.log('Stiker berhasil dikirim, menghapus file sementara...');
            fs.unlinkSync(outputPath);
        } catch (e) {
            console.error('Error pada API kedua:', e.message);
            m.reply('Server Brat Sedang Offline!');
        }
    }
}
break;

// Fungsi untuk membuat metadata Exif
async function generateExif(packname, author) {
    const exif = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author
    };
    const jsonBuffer = Buffer.from(JSON.stringify(exif), 'utf-8');
    const exifBuffer = Buffer.concat([
        Buffer.from([0x00, 0x00, 0x16, 0x00, 0x00]),
        jsonBuffer
    ]);
    return exifBuffer;
}
			case 'wasted': {
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await sych.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Nih Bro', m)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
			
case 'kucing': {
    try {
        // Mengirim gambar langsung tanpa memerlukan input teks
        await sych.sendMessage(m.chat, {
            image: { url: 'https://api.siputzx.my.id/api/r/cats' }
        }, { quoted: m });
    } catch (e) {
        m.reply('Server Sedang Offline!');
    }
}
break;
case 'bluearchive': {
    try {
        // Mengirim gambar langsung tanpa memerlukan input teks
        await sych.sendMessage(m.chat, {
            image: { url: 'https://api.siputzx.my.id/api/r/blue-archive' }
        }, { quoted: m });
    } catch (e) {
        m.reply('Server Sedang Offline!');
    }
}
break;
case 'cjpn': {
    try {
        // Mengirim gambar langsung tanpa memerlukan input teks
        await sych.sendMessage(m.chat, {
            image: { url: 'https://api.siputzx.my.id/api/r/cecan/japan' }
        }, { quoted: m });
        await sych.sendMessage(m.chat, {
                        react: {
                            text: '🇯🇵', // Emoji yang diinginkan
                            key: m.key // Memberikan reaksi pada pesan perintah
                        }
                    });
    } catch (e) {
        m.reply('Server Sedang Offline!');
    }
}
break;
case 'ckorea': {
    try {
        // Mengirim gambar langsung tanpa memerlukan input teks
        await sych.sendMessage(m.chat, {
            image: { url: 'https://api.siputzx.my.id/api/r/cecan/korea' }
        }, { quoted: m });
        await sych.sendMessage(m.chat, {
                        react: {
                            text: '🇰🇷', // Emoji yang diinginkan
                            key: m.key // Memberikan reaksi pada pesan perintah
                        }
                    });
    } catch (e) {
        m.reply('Server Sedang Offline!');
    }
}
break;
case 'cindo': {
    try {
        // Mengirim gambar langsung tanpa memerlukan input teks
        await sych.sendMessage(m.chat, {
            image: { url: 'https://api.siputzx.my.id/api/r/cecan/indonesia' }
        }, { quoted: m });
        await sych.sendMessage(m.chat, {
                        react: {
                            text: '🇮🇩', // Emoji yang diinginkan
                            key: m.key // Memberikan reaksi pada pesan perintah
                        }
                    });
    } catch (e) {
        m.reply('Server Sedang Offline!');
    }
}
break;
case 'cthai': {
    try {
        // Mengirim gambar langsung tanpa memerlukan input teks
        await sych.sendMessage(m.chat, {
            image: { url: 'https://api.siputzx.my.id/api/r/cecan/thailand' }
        }, { quoted: m });
        await sych.sendMessage(m.chat, {
                        react: {
                            text: '🇹🇭', // Emoji yang diinginkan
                            key: m.key // Memberikan reaksi pada pesan perintah
                        }
                    });
    } catch (e) {
        m.reply('Server Sedang Offline!');
    }
}
break;
case 'cviet': {
    try {
        // Mengirim gambar langsung tanpa memerlukan input teks
        await sych.sendMessage(m.chat, {
            image: { url: 'https://api.siputzx.my.id/api/r/cecan/vietnam' }
        }, { quoted: m });
        await sych.sendMessage(m.chat, {
                        react: {
                            text: '🇻🇳', // Emoji yang diinginkan
                            key: m.key // Memberikan reaksi pada pesan perintah
                        }
                    });
    } catch (e) {
        m.reply('Server Sedang Offline!');
    }
}
break;
case 'cchina': {
    try {
        // Mengirim gambar langsung tanpa memerlukan input teks
        await sych.sendMessage(m.chat, {
            image: { url: 'https://api.siputzx.my.id/api/r/cecan/china' }
        }, { quoted: m });
        await sych.sendMessage(m.chat, {
                        react: {
                            text: '🇨🇳', // Emoji yang diinginkan
                            key: m.key // Memberikan reaksi pada pesan perintah
                        }
                    });
    } catch (e) {
        m.reply('Server Sedang Offline!');
    }
}
break;
			case 'trigger': case 'triggered': {
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await sych.sendMessage(m.chat, { document: { url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url }, fileName: 'triggered.gif', mimetype: 'image/gif' }, { quoted: m })
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'nulis': {
				m.reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
			}
			break
			case 'nuliskiri': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/nulis/images/buku/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					sych.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
				})
			}
			break
			case 'nuliskanan': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/nulis/images/buku/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					sych.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
				})
			}
			break
			case 'foliokiri': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/nulis/images/folio/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					sych.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
				})
			}
			break
			case 'foliokanan': {
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/nulis/images/folio/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					sych.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: m })
				})
			}
			break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await sych.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							sych.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
							fs.unlinkSync(ran)
						});
					} else {
						m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
					}
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'tinyurl': case 'shorturl': case 'shortlink': {
				if (!text || !isUrl(text)) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/hitori`)
				try {
					let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
					m.reply('Url : ' + anu.data)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'git': case 'gitclone': {
				if (!args[0]) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/hitori`)
				if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply('Gunakan Url Github!')
				let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
				try {
					sych.sendMessage(m.chat, { document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + '.zip', mimetype: 'application/zip' }, { quoted: m }).catch((e) => m.reply(mess.error))
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			
			// Ai Menu
			// Variabel global untuk menyimpan status auto AI

// Case untuk mengatur autoai
case 'autoai': {
    if (!isCreator) return m.reply(mess.owner);  // Memeriksa apakah pengirim adalah pembuat bot

    if (!text) return m.reply(`Gunakan: ${prefix + command} on/off`);  // Memastikan ada teks untuk mengaktifkan/mematikan

    if (text.toLowerCase() === 'on') {
        if (autoAi) {
            // Jika autoAi sudah aktif, beri tahu bahwa sudah aktif sebelumnya
            m.reply('Auto AI sudah aktif sebelumnya!');
        } else {
            // Mengaktifkan autoAi jika belum aktif
            autoAi = true;
            m.reply('Auto AI telah diaktifkan!');
        }
    } else if (text.toLowerCase() === 'off') {
        if (!autoAi) {
            // Jika autoAi sudah dimatikan, beri tahu bahwa sudah dimatikan sebelumnya
            m.reply('Auto AI sudah dimatikan sebelumnya!');
        } else {
            // Mematikan autoAi jika aktif
            autoAi = false;
            m.reply('Auto AI telah dimatikan!');
        }
    } else {
        m.reply('Gunakan: autoai on/off');
    }
    break;
}

// Case untuk AI utama
case 'ai': {
    if (!text) return m.reply(`Example: ${prefix + command} query`);
    try {
        let promt = `kalo jawab pake bahasa indonesia ga baku aja: ${text}`;
      let hasil = await yanzGpt(promt);
        m.reply(hasil.choices[0].message.content);
    } catch (e) {
        try {
        let promt = `kalo jawab pake bahasa indonesia ga baku aja: ${text}`;
            let hasil = await bk9Ai(promt);
            m.reply(hasil.BK9);
        } catch (e) {
            m.reply(pickRandom([
                'Fitur Ai sedang bermasalah!',
                'Tidak dapat terhubung ke ai!',
                'Sistem Ai sedang sibuk sekarang!',
                'Fitur sedang tidak dapat digunakan!'
            ]));
        }
    }
    break;
}

// Auto AI: memproses semua pesan secara otomatis jika autoAi aktif

			case 'simi': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					const hasil = await simi(text)
					m.reply(hasil.success)
				} catch (e) {
					m.reply('Server simi sedang offline!')
				}
			}
			break
			case 'txt2img': {
			  if (!isPremium) return m.reply(mess.prem);
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					await sych.sendMessage(m.chat, { image: { url: 'https://api.siputzx.my.id/api/ai/dreamshaper?prompt=' + (text || m.quoted.text) }}, { quoted: m })
					} catch (e) {
						m.reply('Server Brat Sedang Offline!')
					}
				}
			break
			case 'aimg': {
			  if (!isPremium) return m.reply(mess.prem);
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					await sych.sendMessage(m.chat, { image: { url: 'https://api.siputzx.my.id/api/ai/flux?prompt=' + (text || m.quoted.text) }}, { quoted: m })
					} catch (e) {
						m.reply('Server Brat Sedang Offline!')
					}
				}
			break
			// Search Menu
			case 'google': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					let anu = await google.search(text);
					let msg = anu.knowledge_panel.metadata.map(({ title, value }) => {
						return `*${title}*\n_${value}_`
					}).join('\n\n');
					if (!anu.knowledge_panel.description && !anu.knowledge_panel.url) return m.reply('Result tidak ditemukan!')
					m.reply(anu.knowledge_panel.description + '\n' + anu.knowledge_panel.url + '\n\n' + msg)
				} catch (e) {
					m.reply('Pencarian Tidak Ditemukan!')
				}
			}
			break
			case 'gimage': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				gis(text, async (err, result) => {
					if (err) return m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					if (result == undefined) {
						m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					} else if (result.length > 1) {
						let anu = pickRandom(result)
						await sych.sendMessage(m.chat, { image: { url: anu.url }, caption: 'Url : '+ anu.url }, { quoted: m })
					} else m.reply('Gagal Mencari Gambar!')
				});
			}
			break
			case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
				if (!text) return m.reply(`Example: ${prefix + command} dj komang`)
				m.reply(mess.wait)
				try {
					const res = await yts.search(text);
					const hasil = pickRandom(res.all)
					const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
					await sych.sendMessage(m.chat, { image: { url: hasil.thumbnail }, caption: teksnya }, { quoted: m });
					await sych.sendMessage(m.chat, {
            react: {
                text: '💿', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
			case 'pixiv': {
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					m.reply(mess.wait)
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await sych.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], caption, mimetype: mime }, { quoted: m })
					}
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
			case 'pinterest': case 'pint': {
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await pinterest(text)
					if (anu.length < 1) return m.reply('Pencarian tidak ditemukan!');
					await sych.sendFileUrl(m.chat, pickRandom(anu), 'Nih Ngab', m)
				} catch (e) {
					let anu = await pinterest2(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await sych.sendMessage(m.chat, { image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` }, { quoted: m })
					}
				}
			}
			break
			case 'wallpaper': {
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await sych.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`}, { quoted: m })
					}
				} catch (e) {
					m.reply('Server wallpaper sedang offline!')
				}
			}
			break
			case 'ringtone': {
				if (!text) return m.reply(`Example: ${prefix + command} black rover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await sych.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'npm': case 'npmjs': {
				if (!text) return m.reply(`Example: ${prefix + command} axios`)
				let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
				let { objects } = await res.json()
				if (!objects.length) return m.reply('Pencarian Tidak di temukan')
				let txt = objects.map(({ package: pkg }) => {
					return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
				}).join`\n\n`
				m.reply(txt)
			}
			break
			case 'style': {
				if (!text) return m.reply(`Example: ${prefix + command} sych`)
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
				m.reply(txt)
			}
			break
			case 'spotify': case 'spotifysearch': {
				if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`)
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					m.reply(txt)
					 await sych.sendMessage(m.chat, {
            react: {
                text: '🔍', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
				} catch (e) {
					m.reply('Server Search Offline!')
				}
			}
			break
			
			// Downloader Menu
		


case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
if (!isPremium) return m.reply(mess.prem);
    if (!text) return m.reply(`Example: ${prefix + command} url_youtube`);
    if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!');
    m.reply('Memproses permintaan Anda, harap tunggu...');

    try {
        console.log('Mengambil informasi video...');
        const info = await ytdl.getInfo(text);

        if (info.videoDetails.lengthSeconds > 300) {
            return m.reply('Video terlalu panjang. Silakan coba video dengan durasi lebih pendek.');
        }

        const title = info.videoDetails.title.replace(/[<>:"/\\|?*]/g, '');
        const outputPath = path.join('./downloads', `${title}.mp3`);
        const compressedPath = path.join('./downloads', `${title}_compressed.mp3`);

        if (!fs.existsSync('./downloads')) {
            fs.mkdirSync('./downloads', { recursive: true });
        }

        console.log('Memulai unduhan audio...');
        console.time('Unduhan Audio');
        const audioStream = ytdl(text, { filter: 'audioonly', quality: 'lowestaudio' });
        const tempFile = fs.createWriteStream(outputPath);

        audioStream.pipe(tempFile);

        tempFile.on('finish', () => {
            console.timeEnd('Unduhan Audio');
            console.log('Unduhan selesai, memulai kompresi...');
            console.time('Kompresi Audio');

            ffmpeg(outputPath)
                .audioBitrate(128)
                .outputOptions('-preset ultrafast') // Preset cepat
                .on('end', async () => {
                    console.timeEnd('Kompresi Audio');
                    console.log('Kompresi selesai, mengirim file...');
                    await sych.sendMessage(m.chat, {
                        audio: { url: compressedPath },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                title: title,
                                body: info.videoDetails.author.name,
                                previewType: 'PHOTO',
                                thumbnailUrl: info.videoDetails.thumbnails[0].url,
                                mediaType: 1,
                                renderLargerThumbnail: true,
                                sourceUrl: text
                            }
                        }
                    }, { quoted: m });
                await sych.sendMessage(m.chat, {
            react: {
                text: '▶️', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
                    fs.unlinkSync(outputPath);
                    fs.unlinkSync(compressedPath);
                    console.log('Proses selesai, file dikirim!');
                })
                .on('error', (err) => {
                    console.error('Error saat mengompresi audio:', err);
                    m.reply('Terjadi kesalahan saat mengompresi audio.');
                })
                .save(compressedPath);
        });

        tempFile.on('error', (err) => {
            console.error('Error saat menulis file:', err);
            m.reply('Terjadi kesalahan saat menyimpan audio.');
        });

    } catch (e) {
        console.error('Error:', e);
        m.reply('Gagal memproses audio! Error: ' + e.message);
    }
}
break;
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
    if (!isPremium) return m.reply(mess.prem);
    if (!text) return m.reply(`Example: ${prefix + command} url_youtube`);
    if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!');
    m.reply('Memproses permintaan Anda, harap tunggu...');

    try {
        console.log('Mengambil informasi video...');
        const info = await ytdl.getInfo(text);

        if (info.videoDetails.lengthSeconds > 300) {
            return m.reply('Video terlalu panjang. Silakan coba video dengan durasi lebih pendek.');
        }

        const title = info.videoDetails.title.replace(/[<>:"/\\|?*]/g, '');
        const videoPath = path.join('./downloads', `${title}_video.mp4`);
        const audioPath = path.join('./downloads', `${title}_audio.mp4`);
        const outputPath = path.join('./downloads', `${title}_final.mp4`);

        if (!fs.existsSync('./downloads')) {
            fs.mkdirSync('./downloads', { recursive: true });
        }

        console.log('Memulai unduhan video...');
        const videoStream = ytdl(text, { filter: 'videoonly', quality: 'highestvideo' });
        const tempVideoFile = fs.createWriteStream(videoPath);

        videoStream.pipe(tempVideoFile);

        tempVideoFile.on('finish', async () => {
            console.log('Video selesai diunduh. Memulai unduhan audio...');
            const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
            const tempAudioFile = fs.createWriteStream(audioPath);

            audioStream.pipe(tempAudioFile);

            tempAudioFile.on('finish', async () => {
                console.log('Audio selesai diunduh. Memulai penggabungan...');
                ffmpeg()
                    .input(videoPath)
                    .input(audioPath)
                    .videoCodec('libx264')
                    .audioCodec('aac')
                    .outputOptions('-preset ultrafast') // Preset cepat
                    .on('end', async () => {
                        console.log('Penggabungan selesai, mengirim file...');
                        await sych.sendMessage(m.chat, {
                            video: { url: outputPath },
                            caption: `*📍Title:* ${title}\n*🚀Channel:* ${info.videoDetails.author.name}\n*🗓Upload at:* ${info.videoDetails.publishDate}`,
                            contextInfo: {
                                externalAdReply: {
                                    title: title,
                                    body: info.videoDetails.author.name,
                                    previewType: 'PHOTO',
                                    thumbnailUrl: info.videoDetails.thumbnails[0].url,
                                    mediaType: 1,
                                    renderLargerThumbnail: true,
                                    sourceUrl: text
                                }
                            }
                        }, { quoted: m });
                        await sych.sendMessage(m.chat, {
                        react: {
                            text: '⏹️', // Emoji yang diinginkan
                            key: m.key // Memberikan reaksi pada pesan perintah
                        }
                    });
                        fs.unlinkSync(videoPath);
                        fs.unlinkSync(audioPath);
                        fs.unlinkSync(outputPath);
                        console.log('Proses selesai, file dikirim!');
                    })
                    .on('error', (err) => {
                        console.error('Error saat menggabungkan video:', err);
                        m.reply('Terjadi kesalahan saat menggabungkan video.');
                    })
                    .save(outputPath);
            });

            tempAudioFile.on('error', (err) => {
                console.error('Error saat menulis audio:', err);
                m.reply('Terjadi kesalahan saat menyimpan audio.');
            });
        });

        tempVideoFile.on('error', (err) => {
            console.error('Error saat menulis video:', err);
            m.reply('Terjadi kesalahan saat menyimpan video.');
        });

    } catch (e) {
        console.error('Error:', e);
        m.reply('Gagal memproses video! Error: ' + e.message);
    }
}
break;
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				m.reply(mess.wait)
				try {
					const hasil = await multiDownload(text);
					if(hasil.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await sych.sendFileUrl(m.chat, hasil[i].path, 'Done', m)
					}
				} catch (e) {
					try {
						let hasil = await fetchJson(api('hitori','/download/instagram', { url: text }, 'apikey'))
						if(hasil.result.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.length; i++) {
							await sych.sendFileUrl(m.chat, hasil.result[i].imageUrl, 'Done', m)
						}
					} catch (e) {
						m.reply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await sych.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
    if (!isPremium) {
        console.log('Pengguna bukan premium.');
        return m.reply(mess.prem);
    }

    if (!text) {
        console.log('Teks URL TikTok tidak ditemukan.');
        return m.reply(`Example: ${prefix + command} url_tiktok`);
    }

    if (!text.includes('tiktok.com')) {
        console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
        return m.reply('Url Tidak Mengandung Result Dari Tiktok!');
    }

    try {
        console.log('Memulai proses pengunduhan dari URL TikTok:', text);

        const hasil = await tiktokDl(text);
        m.reply(mess.wait);
        console.log('Proses pengunduhan berhasil.');

        if (hasil && hasil.size_nowm) {
            console.log('Video tanpa watermark ditemukan.');
            await sych.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m);
            await sych.sendMessage(m.chat, {
            react: {
                text: '🎵', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
        } else {
            console.log('Tidak ada video tanpa watermark, mengirimkan gambar...');
            for (let i = 0; i < hasil.data.length; i++) {
                console.log(`Mengirim gambar ke-${i + 1}.`);
                await sych.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i + 1}`, m);
            }
        }
    } catch (e) {
        console.error('Gagal mengunduh atau URL tidak valid:', e);
        m.reply('Gagal/Url tidak valid!');
    }
}
break;
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
    if (!isPremium) {
        console.log('Pengguna bukan premium.');
        return m.reply(mess.prem);
    }

    if (!text) {
        console.log('Teks URL TikTok tidak ditemukan.');
        return m.reply(`Example: ${prefix + command} url_tiktok`);
    }

    if (!text.includes('tiktok.com')) {
        console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
        return m.reply('Url Tidak Mengandung Result Dari Tiktok!');
    }

    try {
        console.log('Memulai proses pengunduhan audio dari URL TikTok:', text);

        const hasil = await tiktokDl(text);
        m.reply(mess.wait);
        console.log('Proses pengunduhan berhasil, audio ditemukan.');

        // Mengirimkan pesan audio
        await sych.sendMessage(m.chat, {
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
        await sych.sendMessage(m.chat, {
            react: {
                text: '🎶', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
        console.log('Audio berhasil dikirimkan dengan informasi terkait.');
    } catch (e) {
        console.error('Gagal mengunduh atau URL tidak valid:', e);
        m.reply('Gagal/Url tidak valid!');
    }
}
break;
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await sych.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'mediafire': {
    if (!text) {
        console.log('URL tidak diberikan');
        return m.reply(`Contoh: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`);
    }
    
    if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) {
        console.log('URL tidak valid: ' + args[0]);
        return m.reply('URL tidak valid!');
    }

    console.log('URL MediaFire yang valid diterima:', args[0]);

    try {
        console.log('Mencoba mengunduh dari MediaFire...');
        const anu = await mediafireDl(text);
        console.log('Unduhan berhasil:', anu.name, 'Ukuran:', anu.size);

        await sych.sendMedia(m.chat, anu.link, decodeURIComponent(anu.name), `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Nama* : ${decodeURIComponent(anu.name)}\n*${setv} Ukuran* : ${anu.size}`, m);
         
        console.log('File berhasil dikirim ke chat:', m.chat);
        await sych.sendMessage(m.chat, {
            react: {
                text: '📚', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
    } catch (e) {
        console.log('Terjadi kesalahan saat mengunduh:', e);
        m.reply('Server download sedang offline!');
    }
}
break
			case 'spotifydl': {
    console.log("Proses mulai untuk command: spotifydl");

    // Cek apakah ada URL yang diberikan
    if (!text) {
        console.log("URL tidak diberikan. Mengirimkan contoh penggunaan.");
        return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
    }

    // Validasi format URL
    if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) {
        console.log("URL tidak valid: " + args[0]);
        return m.reply('Url Invalid!');
    }

    try {
        // Coba kirim media dengan URL untuk mendownload
        console.log("Mencoba mengirim media dengan URL: " + 'https://spotifyapi.caliphdev.com/api/download/track?url=' + text);
        await sych.sendMedia(m.chat, 'https://spotifyapi.caliphdev.com/api/download/track?url=' + text, '','', m);
        console.log("Media berhasil dikirim.");
         await sych.sendMessage(m.chat, {
            react: {
                text: '🔊', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
    } catch (e) {
        // Jika terjadi error (misalnya server offline)
        console.error("Terjadi kesalahan saat mencoba mengunduh: " + e.message);
        m.reply('Server download sedang offline!');
    }
}
break;
			
			// Quotes Menu
			case 'motivasi': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/motivasi.json'));
				m.reply(hasil)
			}
			break
			case 'bijak': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bijak.json'));
				m.reply(hasil)
			}
			break
			case 'dare': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/dare.json'));
				m.reply(hasil)
			}
			break
			case 'quotes': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/quotes.json'));
				m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
			break
			case 'truth': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/truth.json'));
				m.reply(`_${hasil}_`)
			}
			break
			case 'renungan': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/renungan.json'));
				m.reply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: hasil,
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				});
			}
			break
			case 'bucin': {
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bucin.json'));
				m.reply(hasil)
			}
			break
			
			// Random Menu
			case 'coffe': case 'kopi': {
				await sych.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
			}
			break
			
			// Anime Menu
			case 'waifu': {
				try {
					if (text == 'nsfw') {
						const res = await fetchJson('https://api.waifu.pics/nsfw/waifu')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/waifu')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					}
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
			case 'neko': {
				try {
					if (text == 'nsfw') {
						const res = await fetchJson('https://api.waifu.pics/nsfw/neko')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/neko')
						await sych.sendFileUrl(m.chat, res.url, 'Random Neko', m)
					}
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
			
			// Fun Menu
		
case 'dadu': {
    let ddsa = [
        { url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },
        { url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },
        { url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },
        { url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },
        { url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },
        { url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }
    ];
    let media = pickRandom(ddsa);

    try {
        // Mengunduh gambar dari URL
        const response = await fetch(media.url);
        const buffer = await response.buffer();

        // Mengonversi gambar menjadi WebP menggunakan sharp
        const outputPath = './temp_sticker.webp';
        await sharp(buffer)
            .webp()
            .toFile(outputPath);

        // Mengirim gambar sebagai stiker
        await sych.sendAsSticker(m.chat, outputPath, m, { packname: packname, author: author, isAvatar: 1 });

        // Menghapus file sementara setelah digunakan
        fs.unlinkSync(outputPath);
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        m.reply('Terjadi kesalahan saat mengirimkan stiker.');
    }
}
break;
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
				if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
			break
			case 'apakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Mungkin Tidak','Mungkin Iya','Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`*${command} ${text}*\nJawab : ${kah}`)
			}
			break
			case 'kapan': case 'kapankah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Ntahlah','Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				m.reply(`*${command} ${text}*\nJawab : ${koh}`)
			}
			break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
			break
			case 'cekmati': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let { data } = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`);
				m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
			break
			case 'ceksifat': {
				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				m.reply(teks)
			}
			break
			case 'cekkhodam': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/cekkhodam.json'));
				m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`)
			}
			break
			case 'rate': case 'nilai': {
				m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`)
			}
			break
			case 'jodohku': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jodoh = pickRandom(member)
				m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`);
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				sych.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(sych, m, db)
			}
			break
			case 'casino': {
				await gameCasinoSolo(sych, m, prefix, db)
			}
			break
			case 'rampok': case 'merampok': {
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
				await gameBegal(sych, m, db)
			}
			break
			case 'suitpvp': case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				suit[id] = {
					chat: m.reply(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (suit[id]) m.reply(`_Waktu suit habis_`)
						delete suit[id]
					}, 60000), poin, poin_lose, timeout
				}
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await sych.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await sych.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (tictactoe[roomnya.id]) m.reply(`_Waktu ${command} habis_`)
							delete tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					sych.sendMessage(m.chat, { text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					tictactoe[room.id] = room
				}
			}
			break
			case 'akinator': {
			if (!isPremium) return m.reply(mess.prem);
				if (text == 'start') {
					if (akinator[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({ region: 'id', childMode: false });
					await akinator[m.sender].start()
					let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`)
					akinator[m.sender].key = key.id
					akinator[m.sender].waktu = setTimeout(() => {
						if (akinator[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete akinator[m.sender];
					}, 3600000)
				} else if (text == 'end') {
					if (!akinator[m.sender]) return m.reply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					m.reply('Sukses Mengakhiri sessi Akinator')
				} else m.reply(`Example : ${prefix + command} start/end`)
			}
			break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) m.reply(`_Waktu ${command} habis_`)
						delete tebakbom[m.sender];
					}, 120000)
				}
				m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
			}
			break
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tekateki.json'));
				let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaklirik.json'));
				let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json'));
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/family100.json'));
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/susunkata.json'));
				let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkimia.json'));
				let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/caklontong.json'));
				let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'aitukam': {
    if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang diteruskan
        const query = text || m.quoted.text;
        
        // Mengambil respons dari API
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/latukam?content=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            m.reply(hasil.data);  // Mengirim balasan sesuai respons dari API
        } else {
            m.reply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        m.reply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaknegara.json'));
				let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'tebakepep': {
    if (iGame(tebakepep, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!');
    
    try {
        // Mengambil data dari API
        const hasil = await fetchJson('https://api.siputzx.my.id/api/games/karakter-freefire');
        
        // Log untuk memeriksa response dari API
        console.log('Response dari API:', hasil);
        
        // Mengecek apakah statusnya true dan data lengkap
        if (!hasil || hasil.status !== true || !hasil.data || !hasil.data.gambar || !hasil.data.name) {
            return m.reply('Terjadi kesalahan saat mengambil data dari API! Response tidak valid atau tidak lengkap.');
        }

        // Menyusun deskripsi permainan
        const deskripsi = `🎮 Tebak Karakter Berikut :\n\nNama Karakter: AYO TEBAK📍\n\nWaktu: 60s\nHadiah *+3499*`;

        // Mengirim gambar dan deskripsi permainan
        let { key } = await sych.sendFileUrl(m.chat, hasil.data.gambar, deskripsi, m);
        
        // Menyimpan jawaban dan ID sesi
        tebakepep[m.chat + key.id] = {
            jawaban: hasil.data.name.toLowerCase(),
            id: key.id
        };
        
        // Menunggu selama 60 detik
        await sleep(60000);

        // Mengecek apakah game sudah selesai
        if (rdGame(tebakepep, m.chat, key.id)) {
            m.reply('Waktu Habis\nJawaban: ' + tebakepep[m.chat + key.id].jawaban);
            delete tebakepep[m.chat + key.id];
        }
    } catch (error) {
        m.reply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakgambar.json'));
				let { key } = await sych.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakbendera.json'));
				let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'kuismath': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (iGame(kuismath, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
			break
			
			// Menu
			case 'allmenu': case 'menu': {
    let profile;
    try {
        profile = await sych.profilePictureUrl(m.sender, 'image');
    } catch (e) {
        profile = fake.anonim;
    }
    const menunya = `
╭──❍「 *USER INFO* 」❍
├ *Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
├ *Id* : @${m.sender.split('@')[0]}
├ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
├ *Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
├ *Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}
╰─┬────❍
╭─┴─❍「 *BOT INFO* 」❍
├ *Nama Bot* : ${botname}
├ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
├ *Owner* : @${owner[0].split('@')[0]}
├ *Mode* : ${sych.public ? 'Public' : 'Self'}
├ *Prefix* :${db.set[botNumber].multiprefix ? '「 MULTI-PREFIX 」' : ' *'+prefix+'*' }
╰─┬────❍
╭─┴─❍「 *ABOUT* 」❍
├ *Tanggal* : ${tanggal}
├ *Hari* : ${hari}
├ *Jam* : ${jam} WIB
╰──────❍
╭──❍「 *BOT* 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}leaderboard
│${setv} ${prefix}request (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}ping
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}menfes (62xxx|fake name)
│${setv} ${prefix}donasi
╰─┬────❍
╭─┴❍「 *GROUP* 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}revoke
│${setv} ${prefix}tagall
│${setv} ${prefix}hidetag
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}group set
╰─┬────❍
╭─┴❍「 *SEARCH* 」❍
│${setv} ${prefix}spotify (query)
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
╰─┬────❍
╭─┴❍「 *DOWNLOAD* 」❍
│${setv} ${prefix}spotifydl (url)
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ytmp4 (url)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}mediafire (url)
╰─┬────❍
╭─┴❍「 *QUOTES* 」❍
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}truth
│${setv} ${prefix}renungan
╰─┬────❍
╭─┴❍「 *TOOLS* 」❍
│${setv} ${prefix}get (url)
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}brat (txt)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}ssweb (url)
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}getexif (reply sticker)
╰─┬────❍
╭─┴❍「 *AI* 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}simi (query)
│${setv} ${prefix}aitukam
│${setv} ${prefix}autoai (own)
│${setv} ${prefix}txt2img (query)
╰─┬────❍
╭─┴❍「 *CEWE* 」❍
│${setv} ${prefix}cjpn 
│${setv} ${prefix}ckorea
│${setv} ${prefix}cthai
│${setv} ${prefix}cindo
│${setv} ${prefix}cviet
│${setv} ${prefix}cchina
╰─┬────❍
╭─┴❍「 *ANIME* 」❍
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
│${setv} ${prefix}bluearchive
╰─┬────❍
╭─┴❍「 *GAME* 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}akinator
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakepep
│${setv} ${prefix}tebakbendera
╰─┬────❍
╭─┴❍「 *FUN* 」❍
│${setv} ${prefix}dadu
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama lu)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰─┬────❍
╭─┴❍「 *RANDOM* 」❍
│${setv} ${prefix}coffe
│${setv} ${prefix}kucing
╰─┬────❍
╭─┴❍「 *OWNER* 」❍
│${setv} ${prefix}bot [set]
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}addcase
│${setv} ${prefix}getcase
│${setv} ${prefix}delcase
│${setv} ${prefix}listgc
│${setv} ${prefix}creategc
│${setv} ${prefix}addprem
│${setv} ${prefix}setcmd (reply stc)
│${setv} ${prefix}listcmd
│${setv} ${prefix}delcmd (reply stc)
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
│${setv} ${prefix}shutdown
│${setv} $
│${setv} >
│${setv} <
╰──────❍`;

    await sych.sendMessage(m.chat, {
        document: fake.docs,
        fileName: ucapanWaktu,
        mimetype: pickRandom(fake.listfakedocs),
        fileLength: '100000000000000',
        pageCount: '999',
        caption: menunya,
        contextInfo: {
            mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            forwardingScore: 10,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: my.ch,
                serverMessageId: null,
                newsletterName: 'SYCHEE🌱'
            },
            externalAdReply: {
                title: author,
                body: packname,
                showAdAttribution: true,
                thumbnailUrl: profile,
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: true,
                mediaUrl: my.gh,
                sourceUrl: my.gh,
            }
        }
    }, { quoted: m });

    // Mengirim reaksi dengan emoji '🌱' oleh pengirim perintah
    sych.sendMessage(m.chat, {
        react: {
            text: '🌱', // Emoji yang diinginkan
            key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
        }
    });

}
break;

			default: {
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
		}
    if (autoAi && text) { // Cek apakah autoAi aktif dan ada input teks
        try {
          let promt = `kalo jawab pake bahasa indonesia ga baku aja: ${text}`;
            let hasil = await yanzGpt(promt);
            m.reply(hasil.choices[0].message.content);
        } catch (e) {
            try {
              let promt = `kalo jawab pake bahasa indonesia ga baku aja: ${text}`;
                let hasil = await bk9Ai(promt);
                m.reply(hasil.BK9);
            } catch (e) {
                m.reply(pickRandom([
                    'Fitur Ai sedang bermasalah!',
                    'Tidak dapat terhubung ke ai!',
                    'Sistem Ai sedang sibuk sekarang!',
                    'Fitur sedang tidak dapat digunakan!'
                ]));
            }
        }
    }
    break;
}
			
	} catch (err) {
		console.log(util.format(err));
		//m.reply('*❗ Internal server error️*');
		sych.sendFromOwner(owner, 'Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n' + util.format(err), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});