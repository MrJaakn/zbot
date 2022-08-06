const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://zenzapis.xyz': '1a7a4eb087',
}

// Other
global.namabot = ['ZO-BOT']
global.namaowner = ['ZoStore']
global.owner = ['6288295987911']
global.premium = ['6288295987911']
global.packname = 'Nanang'
global.author = 'WhatsApp'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'DoaMu Terkabulkan',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan Bot Admin Terlebih Dahulu!',
    owner: 'Khusus Owner Bot',
    group: 'Itu Khusus Grup Bre...!',
    private: 'Cuma Bisa Chat Pribadi Bre...',
    bot: 'Khusus Nomor Bot',
    wait: 'Tunggu Beberapa Detik...',
    endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 9999
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
